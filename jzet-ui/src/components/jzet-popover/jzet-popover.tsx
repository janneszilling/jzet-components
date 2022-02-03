import { Component, Host, h, State, Prop } from '@stencil/core';
import { Color } from '../../interface';

@Component({
  tag: 'jzet-popover',
  styleUrl: 'jzet-popover.scss',
  shadow: true,
})
export class JzetPopover {
  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   */
  @Prop({ reflect: true }) readonly appearance?: Color = 'primary';

  @State() popoverVisible = false;

  private onTogglePopover() {
    this.popoverVisible = !this.popoverVisible;
  }
  render() {
    let popover = null;
    if (this.popoverVisible) {
      popover = <slot name="content"></slot>;
    }
    const { appearance } = this;
    return (
      <Host class={{ [`jz-color-${appearance}`]: true }}>
        <button id="trigger" onClick={this.onTogglePopover.bind(this)}>
          <slot></slot>
        </button>
        {popover}
      </Host>
    );
  }
}
