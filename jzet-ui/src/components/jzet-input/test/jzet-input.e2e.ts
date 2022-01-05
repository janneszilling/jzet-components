import { newE2EPage } from '@stencil/core/testing';

describe('jzet-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jzet-input></jzet-input>');

    const element = await page.find('jzet-input');
    expect(element).toHaveClass('hydrated');
  });
});
