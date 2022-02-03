import { newE2EPage } from '@stencil/core/testing';

describe('jzet-popover', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jzet-popover></jzet-popover>');

    const element = await page.find('jzet-popover');
    expect(element).toHaveClass('hydrated');
  });
});
