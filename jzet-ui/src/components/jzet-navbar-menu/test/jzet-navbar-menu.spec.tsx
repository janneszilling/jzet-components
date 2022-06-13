import { newSpecPage } from '@stencil/core/testing';
import { JzetNavbarMenu } from '../jzet-navbar-menu';

describe('jzet-navbar-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JzetNavbarMenu],
      html: `<jzet-navbar-menu></jzet-navbar-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <jzet-navbar-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jzet-navbar-menu>
    `);
  });
});
