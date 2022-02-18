import { Component, Host, h, Prop } from '@stencil/core';
import { Color } from '../../interface';

@Component({
  tag: 'jzet-card',
  styleUrl: 'jzet-card.scss',
  shadow: true,
})
export class JzetCard {
  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   */
  @Prop({ reflect: true }) readonly appearance?: Color = 'primary';

  @Prop({ reflect: true }) readonly fill: 'outline' | 'solid';

  /**
   * Sets the flex direction for the card.
   */
  @Prop() readonly flexDirection?: 'row' | 'column';
  render() {
    const { appearance, fill } = this;
    return (
      <Host class={{ [`jz-color-${appearance}`]: true }}>
        <div class={`card ${fill}`}>
          <div class="card-body" style={{ ['flex-direction']: `${this.flexDirection}` }}>
            <slot name="start"></slot>
            <slot name="middle"></slot>
            <slot name="end"></slot>
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
