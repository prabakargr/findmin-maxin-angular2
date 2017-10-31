import { MinPage } from './app.po';

describe('min App', function() {
  let page: MinPage;

  beforeEach(() => {
    page = new MinPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
