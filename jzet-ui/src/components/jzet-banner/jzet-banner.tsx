import { Component, Host, h, Prop, Element } from '@stencil/core';
import { Color } from '../../interface';

@Component({
  tag: 'jzet-banner',
  styleUrl: 'jzet-banner.scss',
  shadow: true,
})
export class JzetBanner {
  @Element() el: HTMLElement;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   */
  @Prop({ reflect: true }) readonly appearance?: Color = 'primary';

  private close(e) {
    e.preventDefault();
    this.el.remove();
  }

  render() {
    const { appearance } = this;
    return (
      <Host class={{ [`jz-color-${appearance}`]: true }}>
        <slot></slot>
        <button class="close-button" onClick={event => this.close(event)}>
          <span></span>
          <span></span>
        </button>
      </Host>
    );
  }
}
