import test from './buyingOnline.fixture';

const lastName = 'ТестРазработкаRuby'
const name = 'ТестРазработкаRuby'
const surname = 'ТестРазработкаRuby'
const email = 'test@test.ru'
const phone = '+79999999999'

test.only('Заполнение формы на покупку машины', async ({ carPage, buyingOnlinePage }) => {
    await carPage.open("https://freshauto.ru/cars/audi-q7-636403")
    await carPage.clickBuyOnlineButton()
    await buyingOnlinePage.fillElement(buyingOnlinePage.lastNameInput, lastName)
    await buyingOnlinePage.fillElement(buyingOnlinePage.nameInput, name)
    await buyingOnlinePage.fillElement(buyingOnlinePage.surnameInput, surname)
    await buyingOnlinePage.clickUponDeliveryRadioButton()
    await buyingOnlinePage.fillElement(buyingOnlinePage.emailInput, email)
    await buyingOnlinePage.fillElement(buyingOnlinePage.phoneInput, phone)
    await buyingOnlinePage.clickPersonalDataCheckbox()
    await buyingOnlinePage.clickSubmitButton()
    // await buyingOnlinePage.page.pause()
});
//  https://freshauto.ru/cars/audi-q7-595638