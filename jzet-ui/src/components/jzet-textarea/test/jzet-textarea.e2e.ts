import { newE2EPage } from '@stencil/core/testing';

describe('jzet-textarea', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jzet-textarea></jzet-textarea>');

    const element = await page.find('jzet-textarea');
    expect(element).toHaveClass('hydrated');
  });
});
