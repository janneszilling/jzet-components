import { newE2EPage } from '@stencil/core/testing';

describe('jzet-select', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jzet-select></jzet-select>');

    const element = await page.find('jzet-select');
    expect(element).toHaveClass('hydrated');
  });
});
