import { Component, Host, h, Prop } from '@stencil/core';
import { Color } from '../../interface';

@Component({
  tag: 'jzet-avatar',
  styleUrl: 'jzet-avatar.scss',
  shadow: true,
})
export class JzetAvatar {
  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   */
  @Prop({ reflect: true }) readonly appearance?: Color = 'primary';

  @Prop() readonly name: string = 'Jannes Zilling';

  private initials: string;

  @Prop({ attribute: 'img-url' }) readonly imgURL?: string = '';

  @Prop({ reflect: true }) readonly size?: 'small' | 'large';

  componentWillLoad() {
    this.getInitials(this.name);
  }

  private getInitials(name: string) {
    let initials = name.split(/\s/).reduce((response, word) => response + word.slice(0, 1), '');
    this.initials = initials;
  }

  render() {
    const { appearance, initials, imgURL, name, size } = this;
    return (
      <Host class={{ [`jz-color-${appearance}`]: true }} {...size}>
        <div class="avatar" title={name}>
          {imgURL !== '' ? <img src={imgURL} alt={initials}></img> : <slot>{initials}</slot>}
        </div>
      </Host>
    );
  }
}
