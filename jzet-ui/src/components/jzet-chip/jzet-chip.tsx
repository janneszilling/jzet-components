import { Component, Host, h, Prop } from '@stencil/core';
import { Color } from '../../interface';

@Component({
  tag: 'jzet-chip',
  styleUrl: 'jzet-chip.scss',
  shadow: true,
})
export class JzetChip {
  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   */
  @Prop({ reflect: true }) readonly appearance?: Color = 'primary';
  render() {
    const { appearance } = this;
    return (
      <Host class={{ [`jz-color-${appearance}`]: true }}>
        <div class="chip">
          <slot name="start"></slot>
          <slot></slot>
          <slot name="end"></slot>
        </div>
      </Host>
    );
  }
}
