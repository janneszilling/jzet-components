import { newSpecPage } from '@stencil/core/testing';
import { JzetPopover } from '../jzet-popover';

describe('jzet-popover', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JzetPopover],
      html: `<jzet-popover></jzet-popover>`,
    });
    expect(page.root).toEqualHtml(`
      <jzet-popover>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jzet-popover>
    `);
  });
});
