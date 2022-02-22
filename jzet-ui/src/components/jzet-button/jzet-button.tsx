import { Component, h, Element, Prop, Host } from '@stencil/core';
import { Color } from '../../interface';

@Component({
  tag: 'jzet-button',
  styleUrl: 'jzet-button.scss',
  shadow: true,
})
export class JzetButton {
  @Element() el!: HTMLElement;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   */
  @Prop({ reflect: true }) readonly appearance?: Color = 'primary';

  /**
   * If `true`, the user cannot interact with the button.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Set to `"minimal"` for a transparent button, to `"outline"` for a transparent
   * button with a border, or to `"solid"`. The default style is `"solid"`
   */
  @Prop({ reflect: true }) readonly fill: 'minimal' | 'outline' | 'solid' = 'solid';

  /**
   * Set to `"block"` for a full-width button.
   */
  @Prop({ reflect: true }) readonly expand?: 'default' | 'block';

  private get hasIconOnly() {
    return !!this.el.querySelector('[slot="icon-only"]');
  }

  render() {
    const { fill, disabled, hasIconOnly, appearance, expand } = this;
    return (
      <Host class={{ [`jz-color-${appearance}`]: true, [`button-${fill}`]: true, 'button-has-icon-only': hasIconOnly }} disabled={disabled}>
        <button class={{ 'button': true, 'button-disabled': disabled }} {...expand}>
          <slot></slot>
        </button>
      </Host>
    );
  }
}
