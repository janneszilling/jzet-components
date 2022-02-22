import { newSpecPage } from '@stencil/core/testing';
import { JzetMenu } from '../jzet-menu';

describe('jzet-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JzetMenu],
      html: `<jzet-menu></jzet-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <jzet-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jzet-menu>
    `);
  });
});
