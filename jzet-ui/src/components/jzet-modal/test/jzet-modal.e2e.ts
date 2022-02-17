import { newE2EPage } from '@stencil/core/testing';

describe('jzet-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jzet-modal></jzet-modal>');

    const element = await page.find('jzet-modal');
    expect(element).toHaveClass('hydrated');
  });
});
