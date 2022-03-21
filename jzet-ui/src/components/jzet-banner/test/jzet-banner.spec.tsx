import { newSpecPage } from '@stencil/core/testing';
import { JzetBanner } from '../jzet-banner';

describe('jzet-banner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JzetBanner],
      html: `<jzet-banner></jzet-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <jzet-banner>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jzet-banner>
    `);
  });
});
