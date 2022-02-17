import { Component, Host, h, Prop, Listen } from '@stencil/core';
import { ScrollHandler } from '../../utils/scroll-handler';

@Component({
  tag: 'jzet-alert',
  styleUrl: 'jzet-alert.scss',
  shadow: true,
})
export class JzetAlert {
  /**
   * Sets the alert visible or invisibil
   */
  @Prop({ reflect: true, mutable: true }) visible: boolean = false;

  @Listen('wheel', { passive: false, target: 'window' })
  handleWheel(event) {
    this.visible && ScrollHandler.cancelScrolling(event);
  }

  @Listen('touchmove', { passive: false, target: 'window' })
  handleTouchMove(event) {
    this.visible && ScrollHandler.cancelScrolling(event);
  }
  @Listen('keydown', { passive: false, target: 'window' })
  handleKeyDown(event: KeyboardEvent) {
    this.visible && event.target === document.body && ScrollHandler.cancelScrollingKeyFilter(event);
  }

  public closeAlert = () => {
    this.visible = false;
  };
  render() {
    return (
      <Host visible={this.visible}>
        <div class="backdrop"></div>
        <div class="alert">
          <div class="header">
            <slot name="icon"></slot>
            <slot name="title"></slot>
          </div>
          <div class="body">
            <slot></slot>
            <slot name="content"></slot>
          </div>
          <div class="footer">
            <slot name="actions"></slot>
          </div>
        </div>
      </Host>
    );
  }
}
