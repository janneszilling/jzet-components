import { newSpecPage } from '@stencil/core/testing';
import { JzetRadioGroup } from '../jzet-radio-group';

describe('jzet-radio-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JzetRadioGroup],
      html: `<jzet-radio-group></jzet-radio-group>`,
    });
    expect(page.root).toEqualHtml(`
      <jzet-radio-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jzet-radio-group>
    `);
  });
});
