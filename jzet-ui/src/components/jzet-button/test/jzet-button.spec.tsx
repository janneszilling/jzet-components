import { newSpecPage } from '@stencil/core/testing';
import { JzetButton } from '../jzet-button';

describe('jzet-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JzetButton],
      html: `<jzet-button></jzet-button>`,
    });
    expect(page.root).toEqualHtml(`
      <jzet-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jzet-button>
    `);
  });
});
