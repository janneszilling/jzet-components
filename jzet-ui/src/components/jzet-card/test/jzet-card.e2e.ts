import { newE2EPage } from '@stencil/core/testing';

describe('jzet-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jzet-card></jzet-card>');

    const element = await page.find('jzet-card');
    expect(element).toHaveClass('hydrated');
  });
});
