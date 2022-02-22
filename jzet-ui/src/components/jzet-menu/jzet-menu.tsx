import { Component, Host, h, Element, State, Prop } from '@stencil/core';
import { Color } from '../../interface';

@Component({
  tag: 'jzet-menu',
  styleUrl: 'jzet-menu.scss',
  shadow: true,
})
export class JzetMenu {
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

  /**
   * Set a label text for the menu button. Default: `"Menu"`
   */
  @Prop({ reflect: true }) readonly menuLabel: string = 'Menu';

  /**
   * Set a menu icon as string for the menu button. Default: `"->"`;
   */
  @Prop({ reflect: true }) readonly menuIcon: string = '->';

  /**
   * Set to `"minimal"` for a transparent button, to `"outline"` for a transparent
   * button with a border, or to `"solid"`. The default style is `"outline"`
   */
  @Prop({ reflect: true }) readonly menuButtonFill = 'outline';

  /**
   * Sets the position of the menu in relation to the menu button. Default: `"right"`. Options: `"left"`, `"center"`, `"right"`
   */
  @Prop({ reflect: true }) readonly alignMenu: 'left' | 'center' | 'right' = 'right';

  @State() items: HTMLJzetMenuItemElement[] = [];

  componentWillLoad() {
    this.el.shadowRoot.addEventListener('slotchange', () => {
      this.items = Array.from(this.el.querySelectorAll('jzet-menu-item'));
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

        <div
          class="menu-wrapper"
          style={{ ['align-items']: `${this.alignMenu === 'left' ? 'flex-start' : this.alignMenu === 'right' ? 'flex-end' : this.alignMenu === 'center' ? 'center' : 'flex-end'}` }}
        >
          <jzet-button fill={this.menuButtonFill} appearance={this.appearance} onClick={() => this.toggleMenu()}>
            <span class="menu-label">
              {this.menuLabel}
              <div class="menu-icon">{this.menuIcon}</div>
            </span>
          </jzet-button>

          <div class="menu" data-visible={this.visible}>
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
