import { Angular22306Page } from './app.po';

describe('angular22306 App', () => {
  let page: Angular22306Page;

  beforeEach(() => {
    page = new Angular22306Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
