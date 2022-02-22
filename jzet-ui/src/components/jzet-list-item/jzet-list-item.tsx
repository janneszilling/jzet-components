import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'jzet-list-item',
  styleUrl: 'jzet-list-item.scss',
  shadow: true,
})
export class JzetListItem {
  /**
   * selected attribute to now which list-item is selected.
   */
  @Prop({ reflect: true }) selected: boolean;

  /**
   * Event emits list-item element.
   */
  @Event() itemSelected: EventEmitter<any>;
  handleItemSelected(event: CustomEvent) {
    const selectedItem = this.itemSelected.emit(event.currentTarget);
    return selectedItem;
  }

  render() {
    return (
      <Host onClick={event => this.handleItemSelected(event)}>
        <slot></slot>
      </Host>
    );
  }
}
