import { newE2EPage } from '@stencil/core/testing';

describe('jzet-radio-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jzet-radio-group></jzet-radio-group>');

    const element = await page.find('jzet-radio-group');
    expect(element).toHaveClass('hydrated');
  });
});
