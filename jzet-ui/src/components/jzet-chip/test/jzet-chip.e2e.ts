import { newE2EPage } from '@stencil/core/testing';

describe('jzet-chip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jzet-chip></jzet-chip>');

    const element = await page.find('jzet-chip');
    expect(element).toHaveClass('hydrated');
  });
});
