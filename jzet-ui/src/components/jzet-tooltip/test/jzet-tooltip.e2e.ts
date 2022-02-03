import { newE2EPage } from '@stencil/core/testing';

describe('jzet-tooltip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jzet-tooltip></jzet-tooltip>');

    const element = await page.find('jzet-tooltip');
    expect(element).toHaveClass('hydrated');
  });
});
