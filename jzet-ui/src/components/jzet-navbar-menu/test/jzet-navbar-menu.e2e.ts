import { newE2EPage } from '@stencil/core/testing';

describe('jzet-navbar-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jzet-navbar-menu></jzet-navbar-menu>');

    const element = await page.find('jzet-navbar-menu');
    expect(element).toHaveClass('hydrated');
  });
});
