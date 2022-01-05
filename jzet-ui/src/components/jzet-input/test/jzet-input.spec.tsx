import { newSpecPage } from '@stencil/core/testing';
import { JzetInput } from '../jzet-input';

describe('jzet-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JzetInput],
      html: `<jzet-input></jzet-input>`,
    });
    expect(page.root).toEqualHtml(`
      <jzet-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jzet-input>
    `);
  });
});
