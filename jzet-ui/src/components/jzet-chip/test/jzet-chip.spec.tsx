import { newSpecPage } from '@stencil/core/testing';
import { JzetChip } from '../jzet-chip';

describe('jzet-chip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JzetChip],
      html: `<jzet-chip></jzet-chip>`,
    });
    expect(page.root).toEqualHtml(`
      <jzet-chip>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jzet-chip>
    `);
  });
});
