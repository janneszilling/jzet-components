import { newSpecPage } from '@stencil/core/testing';
import { JzetCard } from '../jzet-card';

describe('jzet-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JzetCard],
      html: `<jzet-card></jzet-card>`,
    });
    expect(page.root).toEqualHtml(`
      <jzet-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jzet-card>
    `);
  });
});
