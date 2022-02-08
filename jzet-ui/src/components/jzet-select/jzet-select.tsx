import { Component, Host, h, Prop, Element, Event, EventEmitter, State, Listen } from '@stencil/core';
import { Color } from '../../interface';

@Component({
  tag: 'jzet-select',
  styleUrl: 'jzet-select.scss',
  shadow: true,
})
export class JzetSelect {
  @Element() el: HTMLElement;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   */
  @Prop({ reflect: true }) readonly appearance?: Color = 'primary';

  /**
   * Optional placeholder if no value is selected.
   */
  @Prop() readonly placeholder?: string;

  /**
   * The selected value of the combobox
   */
  @Prop({ mutable: true, reflect: true }) value: string;

  /**
   * An array of items to choose from.
   */
  @Prop() items: any[];

  /**
   * Set the property for the items to define as label. Default: "label"
   */
  @Prop() itemLabelProperty: string = 'label';

  /**
   * Set thte property for the itmes to define as value. Default: "value"
   */
  @Prop() itemValueProperty: string = 'value';

  /**
   * Set to `"block"` for a full-width button.
   */
  @Prop({ reflect: true }) readonly expand?: 'default' | 'block';

  /**
   * If `true`, the user cannot interact with the select.
   */
  @Prop() disabled: boolean;

  /**
   * Event is being emitted when value changes
   */
  @Event() itemSelected: EventEmitter<any>;

  /**
   * Event is being emitted when input gets focus..
   */
  @Event() focusGained: EventEmitter<FocusEvent>;

  /**
   * Event is being emitted when focus gets lost.
   */
  @Event() focusLost: EventEmitter<FocusEvent>;

  @State() dropdownActive: boolean = false;

  private selectHeaderElement: HTMLElement;
  private selectOptions: HTMLElement;

  @Listen('scroll', { target: 'body', capture: true })
  @Listen('scroll', { target: 'window', capture: true })
  handleWindowScroll(ev) {
    if (!this.dropdownActive || this.el === ev.target || this.selectOptions === ev.target) {
      return;
    }

    this.dropdownActive = false;
    this.focusLost.emit();
  }

  @Listen('resize', { target: 'window', capture: true })
  handleWindowResize() {
    if (this.dropdownActive) {
      this.selectOptions.style.cssText = this.getOptionsCss();
    }
  }

  @Listen('click', { target: 'body' })
  handleBodyClick(ev) {
    if (!this.dropdownActive || this.el === ev.target) {
      return;
    }
    if (this.dropdownActive) {
      this.dropdownActive = false;
      ev.cancelBubble = true;
      this.focusLost.emit();
    }
  }

  componentDidLoad() {
    this.selectOptions.addEventListener('wheel', _ev => {
      if (this.selectOptions.scrollTop === 0 && _ev.deltaY < 0) {
        _ev.cancelBubble = true;
        _ev.preventDefault();
      }
      if (this.selectOptions.scrollTop + this.selectOptions.offsetHeight === this.selectOptions.scrollHeight && _ev.deltaY > 0) {
        _ev.cancelBubble = true;
        _ev.preventDefault();
      }
    });
  }

  disconnectCallback() {
    this.removeOptionsFromBody();
  }

  private buttonClicked(e: Event) {
    if (!this.disabled) {
      this.dropdownActive = !this.dropdownActive;
      if (this.dropdownActive) {
        this.focusGained.emit();
        this.moveOptionsToBody();
        this.selectOptions.style.cssText = this.getOptionsCss();
      } else {
        this.focusLost.emit();
      }
      e.preventDefault();
      e.stopPropagation();
    }
  }

  private listItemSelected(item) {
    if (!this.disabled) {
      this.dropdownActive = false;
      this.value = item[this.itemValueProperty] + '';
      this.itemSelected.emit(item);
      this.focusLost.emit();
    }
  }

  private getSelectedItemLabel(): string {
    if (!this.hasValidItems()) {
      return '';
    }
    const item = this.items.find(item => item[this.itemValueProperty] + '' === this.value);
    if (!item) {
      return '';
    }
    return item[this.itemLabelProperty];
  }

  private moveOptionsToBody() {
    this.selectOptions && document.body.appendChild(this.selectOptions);
  }

  private removeOptionsFromBody() {
    this.selectOptions && this.selectOptions.remove();
  }

  private hasValidItems(): boolean {
    return Array.isArray(this.items);
  }

  private isDropdownActive(): boolean {
    return this.dropdownActive && !this.disabled;
  }

  private getOptionsCss(): string {
    if (!this.selectHeaderElement) {
      return '';
    }

    const selectHeaderStyle = window.getComputedStyle(this.selectHeaderElement);

    let optionsTop = this.selectHeaderElement.getBoundingClientRect().top + parseInt(selectHeaderStyle.height) + parseInt(selectHeaderStyle.marginBottom);
    let optionsHeight = 0;
    let itemHeight = 0;

    //get item height
    const item = this.selectOptions.shadowRoot.querySelector('li');

    if (!item) {
      // no items available => return
      return '';
    }

    const itemStyle = window.getComputedStyle(item);
    itemHeight = parseInt(itemStyle.paddingTop) + parseInt(itemStyle.paddingBottom) + parseInt(itemStyle.lineHeight);
    optionsHeight = itemHeight * this.items.length;

    //get space on screen below select
    const spaceBelow = window.innerHeight - optionsTop - parseInt(itemStyle.paddingBottom);

    //calculate maximum and minimum options size (for 4 -7 items)
    const maxHeight = itemHeight * Math.min(7, this.items.length);
    const minHeight = itemHeight * Math.min(4, this.items.length);

    //calculate real options size to fit below select
    optionsHeight = Math.min(spaceBelow, Math.min(maxHeight, optionsHeight));

    //if options size is below min size, then show options above select
    if (optionsHeight < minHeight) {
      optionsHeight = maxHeight;
      optionsTop = this.selectHeaderElement.getBoundingClientRect().top - optionsHeight - parseInt(selectHeaderStyle.marginTop) - parseInt(selectHeaderStyle.marginBottom);
    }

    return `top: ${optionsTop}px; left: ${this.selectHeaderElement.getBoundingClientRect().left - parseInt(selectHeaderStyle.marginLeft)}px; width: ${
      this.selectHeaderElement.getBoundingClientRect().width + parseInt(selectHeaderStyle.marginLeft) + parseInt(selectHeaderStyle.marginRight)
    }px; height: ${optionsHeight}px`;
  }

  render() {
    const { appearance, placeholder, expand, disabled } = this;
    return (
      <Host class={{ [`jz-color-${appearance}`]: true, 'select-disabled': disabled }}>
        <div class="select-container" onClick={e => this.buttonClicked(e)} ref={el => (this.selectHeaderElement = el)}>
          <input class="select" type="text" readonly="true" value={this.getSelectedItemLabel()} placeholder={placeholder} {...expand} disabled={disabled} />
          <div class="icon-button">
            <span class={'icon ' + (this.isDropdownActive() ? 'icon-arrow--collapsed' : 'icon-arrow--expanded')}> -&gt; </span>
          </div>
        </div>
        <jzet-select-options
          ref={el => (this.selectOptions = el)}
          visible={this.isDropdownActive()}
          items={this.items}
          onItemSelected={event => this.listItemSelected(event.detail)}
          value={this.value}
        ></jzet-select-options>
      </Host>
    );
  }
}
