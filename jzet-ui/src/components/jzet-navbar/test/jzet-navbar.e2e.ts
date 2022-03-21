import { newE2EPage } from '@stencil/core/testing';

describe('jzet-navbar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jzet-navbar></jzet-navbar>');

    const element = await page.find('jzet-navbar');
    expect(element).toHaveClass('hydrated');
  });
});
