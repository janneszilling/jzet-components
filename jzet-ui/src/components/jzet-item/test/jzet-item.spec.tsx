import { newSpecPage } from '@stencil/core/testing';
import { JzetItem } from '../jzet-item';

describe('jzet-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JzetItem],
      html: `<jzet-item></jzet-item>`,
    });
    expect(page.root).toEqualHtml(`
      <jzet-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jzet-item>
    `);
  });
});
