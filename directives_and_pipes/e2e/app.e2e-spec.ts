import { Meuprojeto2Page } from './app.po';

describe('meuprojeto2 App', () => {
  let page: Meuprojeto2Page;

  beforeEach(() => {
    page = new Meuprojeto2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
