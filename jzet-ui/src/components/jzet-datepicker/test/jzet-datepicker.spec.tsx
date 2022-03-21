import { newSpecPage } from '@stencil/core/testing';
import { JzetDatepicker } from '../jzet-datepicker';

describe('jzet-datepicker', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JzetDatepicker],
      html: `<jzet-datepicker></jzet-datepicker>`,
    });
    expect(page.root).toEqualHtml(`
      <jzet-datepicker>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jzet-datepicker>
    `);
  });
});
