import { C1Page } from './app.po';

describe('c1 App', () => {
  let page: C1Page;

  beforeEach(() => {
    page = new C1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
