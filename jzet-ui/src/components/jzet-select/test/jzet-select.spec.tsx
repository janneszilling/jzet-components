import { newSpecPage } from '@stencil/core/testing';
import { JzetSelect } from '../jzet-select';

describe('jzet-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JzetSelect],
      html: `<jzet-select></jzet-select>`,
    });
    expect(page.root).toEqualHtml(`
      <jzet-select>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jzet-select>
    `);
  });
});
