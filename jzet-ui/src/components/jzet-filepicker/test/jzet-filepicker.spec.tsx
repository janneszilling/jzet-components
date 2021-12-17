import { newSpecPage } from '@stencil/core/testing';
import { JzetFilepicker } from '../jzet-filepicker';

describe('jzet-filepicker', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JzetFilepicker],
      html: `<jzet-filepicker></jzet-filepicker>`,
    });
    expect(page.root).toEqualHtml(`
      <jzet-filepicker>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jzet-filepicker>
    `);
  });
});
