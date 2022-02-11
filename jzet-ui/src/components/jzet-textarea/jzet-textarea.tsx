import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';
import { Color } from '../../interface';

@Component({
  tag: 'jzet-textarea',
  styleUrl: 'jzet-textarea.scss',
  shadow: true,
})
export class JzetTextarea {
  private inputId = `jz-switch-${textareaIds++}`;
  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   */
  @Prop({ reflect: true }) readonly appearance?: Color = 'primary';

  /**
   * The initial value. Can be updated at runtime.
   */
  @Prop({ reflect: true, mutable: true }) value: string;

  /**
   * The placeholder for the textarea.
   */
  @Prop({ reflect: true }) placeholder: string;

  /**
   * Set to `"block"` for a full-width button.
   */
  @Prop({ reflect: true }) readonly expand?: 'default' | 'block';

  @Prop({ reflect: true }) readonly rows?: number;

  /**
   * If `true`, the user cannot interact with the textarea.
   */
  @Prop() disabled: boolean;

  /**
   * Event is being emitted when value changes.
   */
  @Event() valueChanged: EventEmitter<string>;

  /**
   * Event is being emitted when input gets focus.
   */
  @Event() focusGained: EventEmitter<FocusEvent>;

  /**
   * Event is being emitted when focus gets lost.
   */
  @Event() focusLost: EventEmitter<FocusEvent>;

  private handleChange(e) {
    if (!this.disabled) {
      this.value = e.target.value;
      this.valueChanged.emit(this.value);
    }
  }
  render() {
    const { appearance, value, placeholder, inputId, rows, expand, disabled } = this;
    return (
      <Host class={{ [`jz-color-${appearance}`]: true, 'textarea-disabled': disabled }}>
        <slot name="label"></slot>
        <div class="textarea-container">
          <textarea
            class="textarea"
            id={inputId}
            value={value}
            placeholder={placeholder}
            rows={rows}
            {...expand}
            disabled={disabled}
            onInput={event => this.handleChange(event)}
            onFocus={event => this.focusGained.emit(event)}
            onBlur={event => this.focusLost.emit(event)}
          ></textarea>
        </div>
      </Host>
    );
  }
}

let textareaIds = 0;
