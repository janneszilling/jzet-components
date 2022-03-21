import { newSpecPage } from '@stencil/core/testing';
import { JzetNavbar } from '../jzet-navbar';

describe('jzet-navbar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JzetNavbar],
      html: `<jzet-navbar></jzet-navbar>`,
    });
    expect(page.root).toEqualHtml(`
      <jzet-navbar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jzet-navbar>
    `);
  });
});
