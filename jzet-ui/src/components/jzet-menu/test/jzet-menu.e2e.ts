import { newE2EPage } from '@stencil/core/testing';

describe('jzet-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jzet-menu></jzet-menu>');

    const element = await page.find('jzet-menu');
    expect(element).toHaveClass('hydrated');
  });
});
