import { Component, h, State, Prop, Element, Event, EventEmitter, Watch } from '@stencil/core';

@Component({
  tag: 'jzet-radio-group',
  styleUrl: 'jzet-radio-group.scss',
  shadow: true,
})
export class JzetRadioGroup {
  @Element() private el: HTMLElement;

  @State() radioButtons: HTMLJzetRadioElement[] = [];

  /**
   * Name for the radio buttons within this group
   */
  @Prop() name: string;

  /**
   * The value of the selected radio button.
   */
  @Prop({ reflect: true, mutable: true }) value: string;

  /**
   * If `true`, the user cannot interact with the radio-group.
   */
  @Prop() disabled: boolean;

  /**
   * Sets the flex direction for the radio buttons.
   */
  @Prop() readonly flexDirection?: 'row' | 'column';

  @Event() valueChanged: EventEmitter<string>;

  @Watch('name')
  nameChanged() {
    this.updateButtons();
  }

  @Watch('value')
  handleValueChange() {
    this.updateButtons();
  }

  @Watch('disabled')
  disabledChanged() {
    this.updateButtons();
  }

  componentWillLoad() {
    this.radioButtons = Array.from(this.el.querySelectorAll('jzet-radio'));
    if (this.radioButtons.length === 0) {
      throw new Error('[jzet-radio-group] Must have at least one jzet-radio child');
    }
    this.updateButtons();
    this.radioButtons.forEach(radioButton => {
      radioButton.addEventListener('valueChanged', e => this.selectedRadioButtonChanged(e));
    });
  }

  private selectedRadioButtonChanged(event) {
    this.value = event.target.value;
    this.valueChanged.emit(this.value);
    event.cancelBubble = true;
  }

  private updateButtons() {
    this.radioButtons.forEach(button => {
      button.name = this.name;
      button.groupDisabled = this.disabled;
      button.checked = button.value === this.value;
    });
  }

  render(): HTMLElement {
    return (
      <div class="radio-group-wrapper" style={{ ['flex-direction']: `${this.flexDirection}` }}>
        <slot></slot>
      </div>
    );
  }
}
