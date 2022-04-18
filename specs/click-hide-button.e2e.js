// REMOVE THE BELOW CODE BEFORE START THE EXERCISE
describe('Check app', function () {
  it('click on hide button', async function () {
    await browser.url('https://viktor-silakov.github.io/course-sut');
    await $('#login').setValue('walker@jw.com');
    await $('#password').setValue('password');
    await $('button').click();

    it('should check spinner', async function () {
      await $('#spinner').waitForDisplayed({
        reverse: false,
      });
    });
    await browser.execute(
      'document.getElementsByClassName(arguments[0])[0].remove()',
      'sticky-top'
    );
    await browser.execute(
      'document.getElementsByClassName("btn-danger")[0].click()'
    );
    await browser.acceptAlert();
  });
});
