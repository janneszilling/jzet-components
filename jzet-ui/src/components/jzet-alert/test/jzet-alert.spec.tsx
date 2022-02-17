import { newSpecPage } from '@stencil/core/testing';
import { JzetAlert } from '../jzet-alert';

describe('jzet-alert', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JzetAlert],
      html: `<jzet-alert></jzet-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <jzet-alert>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jzet-alert>
    `);
  });
});
