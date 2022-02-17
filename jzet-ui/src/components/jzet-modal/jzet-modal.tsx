import { Component, Host, h, Prop, Listen } from '@stencil/core';
import { ScrollHandler } from '../../utils/scroll-handler';

@Component({
  tag: 'jzet-modal',
  styleUrl: 'jzet-modal.scss',
  shadow: true,
})
export class JzetModal {
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

  public closeModal = () => {
    this.visible = false;
  };
  render() {
    return (
      <Host visible={this.visible}>
        <div class="backdrop" onClick={this.closeModal.bind(this)}></div>
        <button class="close-button" onClick={this.closeModal}></button>
        <div class="modal">
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
