import { Component, Host, h, Prop } from '@stencil/core';
import { Color } from '../../interface';

@Component({
  tag: 'jzet-filepicker',
  styleUrl: 'jzet-filepicker.scss',
  shadow: true,
})
export class JzetFilepicker {
  private inputId = `jz-cb-${filepickerIds++}`;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   */
  @Prop({ reflect: true }) readonly appearance?: Color = 'primary';

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.inputId;

  /**
   * If `true`, the user cannot interact with the checkbox.
   */
  @Prop() disabled = false;

  render() {
    const { appearance, inputId, disabled } = this;
    return (
      <Host class={{ [`jz-color-${appearance}`]: true, 'filepicker-disabled': disabled }}>
        <input type="file" id={inputId} disabled={disabled} />
        <label htmlFor={inputId}>
          <slot name="start"></slot>
          <slot></slot>
        </label>
      </Host>
    );
  }
}

let filepickerIds = 0;
