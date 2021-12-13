import { Component, Host, h, Prop } from '@stencil/core';
import { Color } from '../../interface';

@Component({
  tag: 'jzet-badge',
  styleUrl: 'jzet-badge.scss',
  shadow: true,
})
export class JzetBadge {
  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   */
  @Prop({ reflect: true }) readonly appearance?: Color = 'primary';

  @Prop({ reflect: true }) readonly form?: 'circle' | 'pill';
  render() {
    const { appearance, form } = this;
    return (
      <Host class={{ [`jz-color-${appearance}`]: true, [form]: true }}>
        <div class="badge">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
