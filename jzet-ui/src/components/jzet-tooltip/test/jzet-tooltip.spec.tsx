import { newSpecPage } from '@stencil/core/testing';
import { JzetTooltip } from '../jzet-tooltip';

describe('jzet-tooltip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JzetTooltip],
      html: `<jzet-tooltip></jzet-tooltip>`,
    });
    expect(page.root).toEqualHtml(`
      <jzet-tooltip>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jzet-tooltip>
    `);
  });
});
