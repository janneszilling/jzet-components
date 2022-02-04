import { newSpecPage } from '@stencil/core/testing';
import { JzetRadio } from '../jzet-radio';

describe('jzet-radio', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JzetRadio],
      html: `<jzet-radio></jzet-radio>`,
    });
    expect(page.root).toEqualHtml(`
      <jzet-radio>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jzet-radio>
    `);
  });
});
