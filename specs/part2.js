describe('Create Magager', function () {
  context('Login', function () {
    it('should login', async function () {
      await browser.url('https://viktor-silakov.github.io/course-sut');
      await $('#login').setValue('walker@jw.com');
      await $('#password').setValue('password');
      await $('button').click();
    });
  });
  context('Find Create Manager Btn', function () {
    it('should find create manager btn', async function () {
      await $(`//a[text()[contains(.,"Create Manager")]]`).click();
      // await $$(`//*[@class='nav-link users']`)[1].click();
      // const userBtns = await $$(`//*[@class='nav-link users']`);
      // for (btn of userBtns) {
      //   if (btn.getText() == 'Create Manager') await btn.click();
      // }
    });
  });
  context('Create Manager Form', function () {
    const email = ['user1@gmail.com', 'user2@gmail.com'];
    const password = ['123', '345'];
    const address1 = ['test1 street1', 'test1 street2'];
    const address2 = ['test2 street1', 'test2 street2'];
    const zip = ['111', '222'];
    const city = ['city1', 'city2'];
    it('should fill form', async function () {
      // await $(`//*[@id='email']`).setValue('hello');
      // for (let i = 0; i < 3; i++) {
      //   await $(`//*[@id='email']`).setValue('hello');
      //   await $(`//*[@id='password']`).setValue(password[i]);
      //   await $(`//*[@id='address1']`).setValue(address1[i]);
      //   await $(`//*[@id='address2']`).setValue(address2[i]);
      //   await $(`//*[@id='state']`).selectByVisibleText('India');
      //   await $(`//*[@id='zip']`).setValue(zip[i]);
      //   await $(`//*[@id='description']`).setValue(`User email: ${email[i]}`);
      //   await $(`//*[@id='city']`).setValue(city[i]);
      //   await $(`//*[@type='submit']`).click();
      //   await $$(`//*[@class='nav-link users']`)[1].click();
      // }
    });
    it('should open list of users', async function () {
      //await $(`//a[text()[contains(.,"Create Manager")]]`).click();
      //await $(`//*[@id='email']`).setValue('hello');
      await $(`//a[text()[contains(.,"List of users")]]`).click();
    });
  });
});
