import { Component, Prop } from '@stencil/core';

import {
  Store
} from '@stencil/redux';

import {
  configureStore
} from '../../redux/store';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  @Prop({
    context: 'store'
  })
  private store: Store;

  public componentWillLoad(): void {
    // Initiate Redux store
    this.store.setStore(configureStore());

  }

  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/profile/:name' component='app-profile' />
              <stencil-route url='/new-reducer' component='app-menu' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
