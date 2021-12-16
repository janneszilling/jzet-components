import { newSpecPage } from '@stencil/core/testing';
import { JzetCheckbox } from '../jzet-checkbox';

describe('jzet-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JzetCheckbox],
      html: `<jzet-checkbox></jzet-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <jzet-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jzet-checkbox>
    `);
  });
});
