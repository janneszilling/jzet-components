import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'jzet-menu-item',
  shadow: true,
})
export class JzetMenuItem {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
