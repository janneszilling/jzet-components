import { newSpecPage } from '@stencil/core/testing';
import { JzetBadge } from '../jzet-badge';

describe('jzet-badge', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JzetBadge],
      html: `<jzet-badge></jzet-badge>`,
    });
    expect(page.root).toEqualHtml(`
      <jzet-badge>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jzet-badge>
    `);
  });
});
