import { newSpecPage } from '@stencil/core/testing';
import { JzetModal } from '../jzet-modal';

describe('jzet-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JzetModal],
      html: `<jzet-modal></jzet-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <jzet-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jzet-modal>
    `);
  });
});
