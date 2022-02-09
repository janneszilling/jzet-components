import { newSpecPage } from '@stencil/core/testing';
import { JzetSwitch } from '../jzet-switch';

describe('jzet-switch', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JzetSwitch],
      html: `<jzet-switch></jzet-switch>`,
    });
    expect(page.root).toEqualHtml(`
      <jzet-switch>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jzet-switch>
    `);
  });
});
