import { newE2EPage } from '@stencil/core/testing';

describe('jzet-alert', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jzet-alert></jzet-alert>');

    const element = await page.find('jzet-alert');
    expect(element).toHaveClass('hydrated');
  });
});
