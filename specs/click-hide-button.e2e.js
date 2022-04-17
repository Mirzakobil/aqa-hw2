// REMOVE THE BELOW CODE BEFORE START THE EXERCISE
describe('Check app', function () {
  it('click on hide button', async function () {
    await browser.url('https://viktor-silakov.github.io/course-sut');
    await $('#login').setValue('walker@jw.com');
    await $('#password').setValue('password');
    await $('button').click();
    // method 1
    await browser.execute(
      'document.getElementsByClassName(arguments[0])[0].remove()',
      'sticky-top'
    );
    await browser.execute(
      'document.getElementsByClassName(arguments[0])[0].click()',
      'btn-danger'
    );
    // method 2
    // await browser.execute(
    //   'document.getElementsByClassName("sticky-top")[0].remove()'
    // );
    // await browser.execute(
    //   'document.getElementsByClassName("btn-danger")[0].click()'
    // );
  });
});
