import { newE2EPage } from '@stencil/core/testing';

describe('jzet-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jzet-checkbox></jzet-checkbox>');

    const element = await page.find('jzet-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
