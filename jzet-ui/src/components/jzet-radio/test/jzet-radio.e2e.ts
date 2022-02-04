import { newE2EPage } from '@stencil/core/testing';

describe('jzet-radio', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jzet-radio></jzet-radio>');

    const element = await page.find('jzet-radio');
    expect(element).toHaveClass('hydrated');
  });
});
