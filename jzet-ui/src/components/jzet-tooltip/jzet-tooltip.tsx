import { Component, Host, h, Prop } from '@stencil/core';
import { Color } from '../../interface';

@Component({
  tag: 'jzet-tooltip',
  styleUrl: 'jzet-tooltip.scss',
  shadow: true,
})
export class JzetTooltip {
  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   */
  @Prop({ reflect: true }) readonly appearance?: Color = 'primary';

  render() {
    let tooltip = <slot name="content"></slot>;
    const { appearance } = this;
    return (
      <Host class={{ [`jz-color-${appearance}`]: true }}>
        <button id="trigger">
          <slot></slot>
        </button>
        {tooltip}
      </Host>
    );
  }
}
