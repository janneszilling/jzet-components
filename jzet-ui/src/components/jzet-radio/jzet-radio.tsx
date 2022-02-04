import { Component, Host, h, Event, Prop, EventEmitter } from '@stencil/core';
import { Color } from '../../interface';

@Component({
  tag: 'jzet-radio',
  styleUrl: 'jzet-radio.scss',
  shadow: true,
})
export class JzetRadio {
  private inputId = `jz-rb-${radioButtonIds++}`;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   */
  @Prop({ reflect: true }) readonly appearance?: Color = 'secondary';

  /**
   * The name of the radio button. All radio buttons with the same name belong to one group.
   */
  @Prop({ reflect: true }) name: string;

  /**
   * The value of the radio.
   */
  @Prop() value: string;

  /**
   * If `true`, the radio is selected.
   */
  @Prop({ reflect: true }) checked: boolean;

  /**
   * If `true`, the user cannot interact with the radio.
   */
  @Prop() disabled = false;

  /**
   * Determines, whether the control is disabled from the parent group
   */
  @Prop()
  public groupDisabled: boolean;

  @Event() valueChanged: EventEmitter<MouseEvent>;

  private eventInputChanged(event) {
    this.valueChanged.emit(event.target.value);
  }

  render() {
    const { appearance, name, value, inputId, checked, disabled } = this;
    return (
      <Host class={{ [`jz-color-${appearance}`]: true, 'radio-disabled': disabled || this.groupDisabled }}>
        <div class="radio-button-wrapper">
          <label class={{ 'radio-button': true, 'radio-button-active': checked }}>
            <input type="radio" name={name} id={inputId} value={value} checked={checked} onChange={e => this.eventInputChanged(e)} disabled={disabled || this.groupDisabled} />
            <span class="checkmark"></span>
          </label>
          <label class="radio-label" htmlFor={inputId}>
            <slot></slot>
          </label>
        </div>
      </Host>
    );
  }
}

let radioButtonIds = 0;
