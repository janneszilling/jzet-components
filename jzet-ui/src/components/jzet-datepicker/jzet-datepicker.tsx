import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'jzet-datepicker',
  styleUrl: 'jzet-datepicker.scss',
  shadow: true,
})
export class JzetDatepicker {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
