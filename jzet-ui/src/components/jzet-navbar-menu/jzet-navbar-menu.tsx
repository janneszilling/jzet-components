import { Component, Host, h, Prop, State, Element, Listen } from '@stencil/core';
import { Color } from '../../interface';
import { ScrollHandler } from '../../utils/scroll-handler';

@Component({
  tag: 'jzet-navbar-menu',
  styleUrl: 'jzet-navbar-menu.scss',
  assetsDirs: ['assets'],
  shadow: true,
})
export class JzetNavbarMenu {
  @Element() el: HTMLElement;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   */
  @Prop({ reflect: true }) readonly appearance?: Color = 'primary';

  /**
   * If attribute is set to `"true"` menu is visible.
   */
  @Prop({ reflect: true, mutable: true }) visible: boolean = false;

  @Prop() closeIcon = 'cross.svg';

  @State() items: HTMLJzetMenuItemElement[] = [];

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

  componentWillLoad() {
    this.el.shadowRoot.addEventListener('slotchange', () => {
      this.items = Array.from(this.el.querySelectorAll('jzet-navbar-menu-item'));
      this.items.forEach((item, i) => {
        item.slot = `item-${i}`;
      });
    });
  }

  private toggleMenu = () => {
    this.visible = !this.visible;
  };

  render() {
    return (
      <Host class={{ [`jz-color-${this.appearance}`]: true }}>
        <slot></slot>
        <button class="menu-icon" onClick={() => this.toggleMenu()}>
          <span></span>
          <span></span>
        </button>

        <div class="menu" data-visible={this.visible}>
          <button class="close-button" onClick={() => this.toggleMenu()}>
            <span></span>
            <span></span>
          </button>
          <div class="nav">
            {this.items.map((_, i) => (
              <li>
                <slot name={`item-${i}`}></slot>
              </li>
            ))}
          </div>
        </div>
      </Host>
    );
  }
}
