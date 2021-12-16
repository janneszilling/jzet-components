import { Component, Host, h, Prop } from '@stencil/core';
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
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.inputId;

  /**
   * If `true`, the checkbox is selected.
   */
  @Prop({ mutable: true }) checked = false;

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

  private onClick = (event: any) => {
    event.preventDefault();
    if (this.disabled) {
      this.checked = this.checked;
    } else {
      this.checked = !this.checked;
    }
  };

  render() {
    const { appearance, inputId, checked, disabled } = this;
    return (
      <Host onClick={this.onClick} aria-checked={`${checked}`} aria-hidden={disabled ? 'true' : ''} class={{ [`jz-color-${appearance}`]: true, 'checkbox-disabled': disabled }}>
        <label htmlFor={inputId}>
          <slot />
        </label>
        <div class="checkbox bounce">
          <input type="checkbox" id={inputId} aria-checked={`${checked}`} checked={checked} disabled={disabled} />
          <svg viewBox="0 0 22 22">
            <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
          </svg>
        </div>
      </Host>
    );
  }
}

let checkboxIds = 0;
