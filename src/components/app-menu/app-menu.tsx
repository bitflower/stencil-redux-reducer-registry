import { Component, Prop, State } from '@stencil/core';
import { Store } from '@stencil/redux';

import { GlobalStoreState } from '../../redux/store';

import { closeMenu } from './app-menu.actions';

@Component({
  tag: 'app-menu',
  // styleUrl: 'app-menu.pcss'
})
export class AppMenu {
  @Prop({
    context: 'store'
  })
  private store: Store;

  @State() public visible: boolean = false;
  @State() public repos: any[];

  private closeMenu: typeof closeMenu;

  public componentWillLoad(): void {
    this.store.mapStateToProps(this, (state: GlobalStoreState): {} => {
      const {
        menu: { visible },
      } = state;

      return {
        visible
      };
    });

    this.store.mapDispatchToProps(this, {
      closeMenu
    });
  }

  // @autobind
  private overlayClickHandler(): void {
    this.closeMenu();
  }

  public hostData(): JSXElements.AppMenuAttributes {
    return {
      class: {
        visible: this.visible
      }
    };
  }

  public render(): JSX.Element[] {
    return [
      <nav class='container'>
        <a href='#'>Test 1</a>
      </nav>,
      <div class='overlay' onClick={this.overlayClickHandler} />
    ];
  }

}
