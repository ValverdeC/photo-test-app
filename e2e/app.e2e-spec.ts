import { PhotoTestAppPage } from './app.po';

describe('photo-test-app App', () => {
  let page: PhotoTestAppPage;

  beforeEach(() => {
    page = new PhotoTestAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
