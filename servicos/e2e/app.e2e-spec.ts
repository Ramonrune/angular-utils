import { ServicosPage } from './app.po';

describe('servicos App', () => {
  let page: ServicosPage;

  beforeEach(() => {
    page = new ServicosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
