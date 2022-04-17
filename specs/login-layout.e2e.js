// REMOVE THE BELOW CODE BEFORE START THE EXERCISE
describe('Check app', function () {
  it('should login', async function () {
    await browser.url('https://viktor-silakov.github.io/course-sut');
    await $('#login').setValue('walker@jw.com');
    await $('#password').setValue('password');
    await $('button').click();
  });

  it('should check spinner', async function () {
    const spinnerHidden = await $('#spinner').waitForDisplayed({
      reverse: true,
    });
  });

  it('should verify user', async function () {
    const user = await $('//*[@id="user-label"]').getText();
    if (user !== 'John Walker') throw new Error('invalid user');
  });

  it('should check menu item', async function () {
    const menuItems = await $$(
      '//*[@id="first-nav-block"]//*[contains(@class, "nav-item")]'
    );
    for (item of menuItems) {
      await item.moveTo();
      bgc = await item.getCSSProperty('background-color');
      if ((bgc = 'red')) browser.pause();
      throw new Error(`Background color on hover red`);
    }
  });
});
