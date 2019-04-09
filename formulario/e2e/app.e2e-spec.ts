import { FormularioPage } from './app.po';

describe('formulario App', () => {
  let page: FormularioPage;

  beforeEach(() => {
    page = new FormularioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
