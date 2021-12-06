import { newE2EPage } from '@stencil/core/testing';

describe('jzet-avatar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jzet-avatar></jzet-avatar>');

    const element = await page.find('jzet-avatar');
    expect(element).toHaveClass('hydrated');
  });
});
