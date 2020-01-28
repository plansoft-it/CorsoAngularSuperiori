import { GestioneClassiPage } from './app.po';

describe('gestione-classi App', function() {
  let page: GestioneClassiPage;

  beforeEach(() => {
    page = new GestioneClassiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
