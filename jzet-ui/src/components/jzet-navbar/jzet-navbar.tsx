import { Component, Host, h, Prop } from '@stencil/core';
import { Color } from '../../interface';

@Component({
  tag: 'jzet-navbar',
  styleUrl: 'jzet-navbar.scss',
  shadow: true,
})
export class JzetNavbar {
  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   */
  @Prop({ reflect: true }) readonly appearance?: Color = 'light';

  render() {
    const { appearance } = this;
    return (
      <Host class={{ [`jz-color-${appearance}`]: true }}>
        <slot name="start"></slot>
        <div class="center">
          <slot name="logo"></slot>
        </div>
        <slot name="end"></slot>
      </Host>
    );
  }
}
