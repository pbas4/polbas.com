import { PbasWebPage } from './app.po';

describe('pbas-web App', () => {
  let page: PbasWebPage;

  beforeEach(() => {
    page = new PbasWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
