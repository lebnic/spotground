import { SpotgroundPage } from './app.po';

describe('spotground App', () => {
  let page: SpotgroundPage;

  beforeEach(() => {
    page = new SpotgroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
