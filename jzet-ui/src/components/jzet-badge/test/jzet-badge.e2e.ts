import { newE2EPage } from '@stencil/core/testing';

describe('jzet-badge', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jzet-badge></jzet-badge>');

    const element = await page.find('jzet-badge');
    expect(element).toHaveClass('hydrated');
  });
});
