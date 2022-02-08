import { newE2EPage } from '@stencil/core/testing';

describe('jzet-select-options', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jzet-select-options></jzet-select-options>');

    const element = await page.find('jzet-select-options');
    expect(element).toHaveClass('hydrated');
  });
});
