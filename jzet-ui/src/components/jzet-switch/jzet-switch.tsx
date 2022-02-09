import { Component, Host, h, Prop, Event, EventEmitter, State } from '@stencil/core';
import { Color } from '../../interface';

@Component({
  tag: 'jzet-switch',
  styleUrl: 'jzet-switch.scss',
  shadow: true,
})
export class JzetSwitch {
  private inputId = `jz-switch-${switchIds++}`;
  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   */
  @Prop({ reflect: true }) readonly appearance?: Color = 'primary';

  @Prop({ reflect: true }) readonly label: string;

  /**
   * The value of the switch
   */
  @Prop({ mutable: true }) value: boolean;

  /**
   * If `true`, the user cannot interact with the switch.
   */
  @Prop() disabled: boolean;

  @State() isChecked: boolean = false;

  /**
   * Event is being emitted when value changes.
   */
  @Event() valueChanged: EventEmitter<MouseEvent>;

  private handleChange(e) {
    if (!this.disabled) {
      this.isChecked = !this.isChecked;
      this.valueChanged.emit(e.target.checked);
    }
  }

  render() {
    const { appearance, value, label, inputId, disabled } = this;
    return (
      <Host class={{ [`jz-color-${appearance}`]: true, 'switch-disabled': disabled }}>
        <div class="switch-wrapper">
          {!label ? '' : <label class="switch-label">{label}</label>}
          <div class="switch">
            <input type="checkbox" id={inputId} checked={value} disabled={disabled} onChange={event => this.handleChange(event)} />
            <label class={'switch__toggle ' + (this.isChecked ? 'active' : '')} htmlFor={inputId} tabindex="0"></label>
          </div>
        </div>
      </Host>
    );
  }
}

let switchIds = 0;
