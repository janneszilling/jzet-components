import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'jzet-navbar-menu-item',
  shadow: true,
})
export class JzetNavbarMenuItem {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
