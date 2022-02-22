import { Component, Host, h, Element, Prop, State, Listen } from '@stencil/core';
import { Color } from '../../interface';

@Component({
  tag: 'jzet-list',
  styleUrl: 'jzet-list.scss',
  shadow: true,
})
export class JzetList {
  @Element() el: HTMLElement;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   */
  @Prop({ reflect: true }) readonly appearance?: Color = 'primary';

  /**
   * If attribute is set to `"true"` menu is visible.
   */
  @Prop({ reflect: true, mutable: true }) visible: boolean = true;

  @State() items: HTMLJzetListItemElement[] = [];

  componentWillLoad() {
    this.el.shadowRoot.addEventListener('slotchange', () => {
      this.items = Array.from(this.el.querySelectorAll('jzet-list-item'));
      this.items.forEach((item, i) => {
        item.slot = `item-${i}`;
      });
    });
  }

  findSelectedItem = () => {
    this.items = Array.from(this.el.querySelectorAll('jzet-list-item'));
    const selectedItem = this.items.find(el => el.hasAttribute('selected'));
    return selectedItem;
  };

  @Listen('itemSelected')
  getClickedListItem(event: CustomEvent) {
    const clickedItem = event.detail;
    const selectedItem = this.findSelectedItem();
    if (clickedItem !== selectedItem) {
      clickedItem.setAttribute('selected', true);
      selectedItem.removeAttribute('selected');
    }
  }

  public toggleList = () => {
    this.visible = !this.visible;
  };

  render() {
    return (
      <Host class={{ [`jz-color-${this.appearance}`]: true }}>
        <slot></slot>

        <div class="list" data-visible={this.visible}>
          {this.items.map((_, i) => (
            <li>
              <slot name={`item-${i}`}></slot>
            </li>
          ))}
        </div>
      </Host>
    );
  }
}
