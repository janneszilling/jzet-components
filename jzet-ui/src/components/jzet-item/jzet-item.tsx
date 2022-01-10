import { Component, Host, h, Prop } from '@stencil/core';
import { Color } from '../../interface';

@Component({
  tag: 'jzet-item',
  styleUrl: 'jzet-item.scss',
  shadow: true,
})
export class JzetItem {
  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   */
  @Prop({ reflect: true }) readonly appearance?: Color = 'primary';

  /**
   * If `true`, the user cannot interact with the item.
   */
  @Prop() disabled = false;

  render() {
    const { appearance, disabled } = this;

    return (
      <Host class={{ [`jz-color-${appearance}`]: true, 'item-disabled': disabled }}>
        <div class="item">
          <slot name="left"></slot>
          <slot name="right"></slot>
        </div>
      </Host>
    );
  }
}
