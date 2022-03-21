import { newE2EPage } from '@stencil/core/testing';

describe('jzet-banner', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jzet-banner></jzet-banner>');

    const element = await page.find('jzet-banner');
    expect(element).toHaveClass('hydrated');
  });
});
