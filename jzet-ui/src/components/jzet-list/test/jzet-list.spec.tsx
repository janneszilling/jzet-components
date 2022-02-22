import { newSpecPage } from '@stencil/core/testing';
import { JzetList } from '../jzet-list';

describe('jzet-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JzetList],
      html: `<jzet-list></jzet-list>`,
    });
    expect(page.root).toEqualHtml(`
      <jzet-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jzet-list>
    `);
  });
});
