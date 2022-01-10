import { newE2EPage } from '@stencil/core/testing';

describe('jzet-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jzet-item></jzet-item>');

    const element = await page.find('jzet-item');
    expect(element).toHaveClass('hydrated');
  });
});
