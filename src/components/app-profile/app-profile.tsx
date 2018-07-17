import { Component, Prop, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';

import { Store } from '@stencil/redux';

import { reducerRegistry } from 'redux-reducer-registry/esm/reducer-registry';

import reducer from './app-profile.reducer'

import { startLoading, stopLoading } from './app-profile.actions';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css'
})
export class AppProfile {

  @Prop({
    context: 'store'
  })
  private store: Store;

  @State() public loading: boolean = false;
  private startLoading: typeof startLoading;
  private stopLoading: typeof stopLoading;

  @Prop() match: MatchResults;


  public componentWillLoad(): void {


    reducerRegistry.register('profileReducer', reducer);


    this.store.mapStateToProps(this, (state: any): {} => {
      const {
        profileReducer: { loading },
      } = state;

      return {
        loading
      };
    });

    this.store.mapDispatchToProps(this, {
      startLoading,
      stopLoading
    });

  }


  handleClick(event: UIEvent) {
    this.startLoading();
    console.log(event)
  }

  handleClick2(event: UIEvent) {
    this.stopLoading();
    console.log(event)
  }

  render() {
    if (this.match && this.match.params.name) {
      return (
        <div class='app-profile'>
          <p>
            Hello! My name is {this.match.params.name}.
            My name was passed in through a route param!
          </p>
          <button onClick={(event: UIEvent) => this.handleClick(event)}>Start loading</button>
          <button onClick={(event: UIEvent) => this.handleClick2(event)}>Stop loading</button>
          <p>{this.loading + ''}</p>
        </div>
      );
    }
  }
}
