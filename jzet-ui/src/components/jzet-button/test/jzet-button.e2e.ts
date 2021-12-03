import { newE2EPage } from '@stencil/core/testing';

describe('jzet-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jzet-button></jzet-button>');

    const element = await page.find('jzet-button');
    expect(element).toHaveClass('hydrated');
  });
});
