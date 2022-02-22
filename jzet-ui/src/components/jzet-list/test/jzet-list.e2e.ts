import { newE2EPage } from '@stencil/core/testing';

describe('jzet-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jzet-list></jzet-list>');

    const element = await page.find('jzet-list');
    expect(element).toHaveClass('hydrated');
  });
});
