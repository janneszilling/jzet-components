import { newSpecPage } from '@stencil/core/testing';
import { JzetTextarea } from '../jzet-textarea';

describe('jzet-textarea', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JzetTextarea],
      html: `<jzet-textarea></jzet-textarea>`,
    });
    expect(page.root).toEqualHtml(`
      <jzet-textarea>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jzet-textarea>
    `);
  });
});
