import { OnlineAuctionPage } from './app.po';

describe('online-auction App', () => {
  let page: OnlineAuctionPage;

  beforeEach(() => {
    page = new OnlineAuctionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
