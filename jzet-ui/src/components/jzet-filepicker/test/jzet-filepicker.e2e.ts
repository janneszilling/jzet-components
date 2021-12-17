import { newE2EPage } from '@stencil/core/testing';

describe('jzet-filepicker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jzet-filepicker></jzet-filepicker>');

    const element = await page.find('jzet-filepicker');
    expect(element).toHaveClass('hydrated');
  });
});
