import { newE2EPage } from '@stencil/core/testing';

describe('jzet-switch', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jzet-switch></jzet-switch>');

    const element = await page.find('jzet-switch');
    expect(element).toHaveClass('hydrated');
  });
});
