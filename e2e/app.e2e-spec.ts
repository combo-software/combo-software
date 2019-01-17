import { ComboSoftwarePage } from './app.po';

describe('combo-software App', () => {
  let page: ComboSoftwarePage;

  beforeEach(() => {
    page = new ComboSoftwarePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
