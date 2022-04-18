// REMOVE THE BELOW CODE BEFORE START THE EXERCISE
describe('Create Manager', function () {
  context('Fill Form', function () {
    it('should login', async function () {
      await browser.url('https://viktor-silakov.github.io/course-sut');
      await $('#login').setValue('walker@jw.com');
      await $('#password').setValue('password');
      await $('button').click();
    });

    it('should check spinner', async function () {
      await $('#spinner').waitForDisplayed({
        reverse: true,
      });
    });

    it('should click btn', async function () {
      await $(`//a[text()[contains(.,"Create Manager")]]`).click();
      await $(`//*[@id='email']`).setValue('hello');
    });
    const email = ['user1@gmail.com', 'user2@gmail.com'];
    const password = ['123', '345'];
    const address1 = ['test1 street1', 'test1 street2'];
    const address2 = ['test2 street1', 'test2 street2'];
    const zip = ['111', '222'];
    const city = ['city1', 'city2'];
    it('should fill form', async function () {
      for (let i = 0; i < 2; i++) {
        await $(`//*[@id='email']`).setValue(email[i]);
        await $(`//*[@id='password']`).setValue(password[i]);
        await $(`//*[@id='address1']`).setValue(address1[i]);
        await $(`//*[@id='address2']`).setValue(address2[i]);
        await $(`//*[@id='state']`).selectByVisibleText('India');
        await $(`//*[@id='zip']`).setValue(zip[i]);
        await $(`//*[@id='description']`).setValue(`User email: ${email[i]}`);
        await $(`//*[@id='city']`).setValue(city[i]);
        await $(`//*[@id='autoComplete_result_0']`).click();
        await $(`//*[@type='submit']`).click();
        await $$(`//*[@class='nav-link users']`)[1].click();
      }
    });
    it('should open list of users', async function () {
      await $$(`//*[@class='nav-link users']`)[3].click();
    });
    it('should check users', async function () {
      for (let i = 2; i < 4; i++) {
        const row = await $(`//*[@id="users-table"]/div[2]/div/div[1]`);
        const email = row.$(`../div[${i}]/div[1]`).getText();
        if (email == email[i - 2]) {
          for (let k = 3; k < 9; k++) {
            const cell = row.$(`../div[${i}]/div[${k}]`).getText();
            if (cell !== address1[k - 3]) {
              throw new Error(cell, 'address1 incorrect');
            } else if (cell !== address2[k - 3]) {
              throw new Error(cell, 'address2 incorrect');
            } else if (cell !== city[k - 3]) {
              throw new Error(cell, 'city incorrect');
            } else if (cell !== zip[k - 3]) {
              throw new Error(cell, 'zip incorrect');
            }
          }
          const state = await expect(row.$(`../div[${i}]/div[6]`)).toHaveText(
            'India'
          );
          const descr = await expect(row.$(`../div[${i}]/div[8]`)).toHaveText(
            `User email: ${email[i - 2]}`
          );
          if (!state) {
            throw new Error(state, 'state incorrect');
          }
          if (!descr) {
            throw new Error(descr, 'description incorrect');
          }
        }
      }
    });
  });
});
