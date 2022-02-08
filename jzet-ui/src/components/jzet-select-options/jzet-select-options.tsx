import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';
import { Color } from '../../interface';

@Component({
  tag: 'jzet-select-options',
  styleUrl: 'jzet-select-options.scss',
  shadow: true,
})
export class JzetSelectOptions {
  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   */
  @Prop({ reflect: true }) readonly appearance?: Color = 'primary';

  /**
   * Set the light or dark mode.
   */
  @Prop({ reflect: true }) mode: string = 'light-mode';
  /**
   * An array of items to choose from
   */
  @Prop() items: any[];

  /**
   * The selected value
   */
  @Prop({ mutable: true }) value: string;

  /**
   * Set the property for the items to define as label. Default: "label"
   */
  @Prop() itemLabelProperty: string = 'label';

  /**
   * Set the property for the items to define as value. Default: "value"
   */
  @Prop() itemValueProperty: string = 'value';

  /**
   * If `true`, the user cannot interact with the select.
   */
  @Prop() disabled: boolean;

  /**
   * Determines, whether the options are visible or not
   */
  @Prop({ mutable: true, reflect: true }) visible: boolean;

  /**
   * Event is being emitted when value changes.
   */
  @Event() itemSelected: EventEmitter<any>;

  private handleItemClick(item) {
    if (!this.disabled) {
      this.value = item[this.itemValueProperty] + '';
      this.itemSelected.emit(item);
    }
  }

  private hasValidItems(): boolean {
    return Array.isArray(this.items);
  }

  render() {
    const { appearance, mode, disabled } = this;
    return (
      <Host class={{ [`jz-color-${appearance}`]: true, [mode]: true, 'select-options-disabled': disabled }}>
        <ul class="select-options__list">
          {!this.hasValidItems() ? (
            <li>No options available</li>
          ) : (
            this.items.map(
              (item): HTMLElement => (
                <li
                  class={{ 'select-options__list__item': true, [item[this.itemLabelProperty] == this.value ? 'select-options__list__item--active' : '']: true }}
                  onClick={() => this.handleItemClick(item)}
                >
                  {item[this.itemLabelProperty]}
                </li>
              ),
            )
          )}
        </ul>
      </Host>
    );
  }
}
