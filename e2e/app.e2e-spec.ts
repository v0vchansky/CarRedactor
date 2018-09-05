import { AngProjectPage } from './app.po';

describe('ang-project App', function() {
  let page: AngProjectPage;

  beforeEach(() => {
    page = new AngProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
