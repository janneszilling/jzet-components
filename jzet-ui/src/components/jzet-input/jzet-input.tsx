import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';
import { Color } from '../../interface';

@Component({
  tag: 'jzet-input',
  styleUrl: 'jzet-input.scss',
  shadow: true,
})
export class JzetInput {
  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   */
  @Prop({ reflect: true }) readonly appearance?: Color = 'primary';

  @Prop({ reflect: true }) readonly label: string;
  @Prop({ reflect: true }) readonly placeholder: string = ' ';
  @Prop({ reflect: true, mutable: true }) value: string;
  @Prop() readonly type = 'text';

  @Event() valueChanged: EventEmitter<string>;
  private onInputChangeValue(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    this.valueChanged.emit(this.value);
  }

  /**
   * If `true`, the user cannot interact with the input.
   */
  @Prop() disabled = false;

  /**
   * If `true`, the input is required.
   */
  @Prop() required = false;

  /**
   * Set to `"block"` for a full-width button.
   */
  @Prop({ reflect: true }) readonly expand?: 'default' | 'block';

  @Prop() indicator = true;

  render() {
    const { appearance, disabled, type, value, placeholder, required, expand, indicator } = this;
    return (
      <Host class={{ [`jz-color-${appearance}`]: true, 'input-disabled': disabled }}>
        <slot name="label"></slot>
        <div class="input-container">
          <input
            placeholder={placeholder}
            type={type}
            value={value}
            disabled={disabled}
            onInput={this.onInputChangeValue.bind(this)}
            required={required}
            {...expand}
            indicator={indicator}
          />
          {indicator ? <div id="indicator"></div> : ''}
        </div>
        {required ? <label class="required-tag">* Required</label> : ''}
      </Host>
    );
  }
}
