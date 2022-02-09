import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';
import { Color } from '../../interface';

@Component({
  tag: 'jzet-checkbox',
  styleUrl: 'jzet-checkbox.scss',
  shadow: true,
})
export class JzetCheckbox {
  private inputId = `jz-cb-${checkboxIds++}`;
  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   */
  @Prop({ reflect: true }) readonly appearance?: Color = 'secondary';

  /**
   * If `true`, the checkbox is selected.
   */
  @Prop({ reflect: true, mutable: true }) checked = false;

  /**
   * If `true`, the user cannot interact with the checkbox.
   */
  @Prop() disabled = false;

  /**
   * The value of the checkbox does not mean if it's checked or not, use the `checked`
   * property for that.
   *
   * The value of a checkbox is analogous to the value of an `<input type="checkbox">`,
   * it's only used when the checkbox participates in a native `<form>`.
   */
  @Prop() value = 'on';

  @Event() valueChanged: EventEmitter<MouseEvent>;

  private handleChange(e) {
    if (!this.disabled) {
      this.checked = e.target.checked;
      this.valueChanged.emit(e.target.checked);
    }
  }

  render() {
    const { appearance, inputId, checked, disabled } = this;
    return (
      <Host class={{ [`jz-color-${appearance}`]: true, 'checkbox-disabled': disabled }}>
        <div class="checkbox-wrapper">
          <label class="checkbox-label" htmlFor={inputId}>
            <slot />
          </label>
          <label class="checkbox">
            <input type="checkbox" id={inputId} checked={checked} disabled={disabled} onChange={event => this.handleChange(event)} />
            <span class="checkmark">
              <span class="check"></span>
            </span>
          </label>
        </div>
      </Host>
    );
  }
}

let checkboxIds = 0;
