import { newSpecPage } from '@stencil/core/testing';
import { JzetAvatar } from '../jzet-avatar';

describe('jzet-avatar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JzetAvatar],
      html: `<jzet-avatar></jzet-avatar>`,
    });
    expect(page.root).toEqualHtml(`
      <jzet-avatar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jzet-avatar>
    `);
  });
});
