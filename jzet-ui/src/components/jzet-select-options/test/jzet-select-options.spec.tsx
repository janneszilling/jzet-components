import { newSpecPage } from '@stencil/core/testing';
import { JzetSelectOptions } from '../jzet-select-options';

describe('jzet-select-options', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JzetSelectOptions],
      html: `<jzet-select-options></jzet-select-options>`,
    });
    expect(page.root).toEqualHtml(`
      <jzet-select-options>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jzet-select-options>
    `);
  });
});
