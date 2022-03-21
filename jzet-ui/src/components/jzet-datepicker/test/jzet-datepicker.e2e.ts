import { newE2EPage } from '@stencil/core/testing';

describe('jzet-datepicker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jzet-datepicker></jzet-datepicker>');

    const element = await page.find('jzet-datepicker');
    expect(element).toHaveClass('hydrated');
  });
});
