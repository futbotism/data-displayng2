import { Ng2DataDisplayAaPage } from './app.po';

describe('ng2-data-display-aa App', function() {
  let page: Ng2DataDisplayAaPage;

  beforeEach(() => {
    page = new Ng2DataDisplayAaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
