import test from './CreditOnline.fixture';

const lastName = 'ТестРазработкаRuby'
const name = 'ТестРазработкаRuby'
const city = 'ТестРазработкаRuby'
// const email = 'test@test.ru'
const phone = '+79999999999'

test.only('Заполнение формы на покупку машины', async ({ carPage, creditOnlinePage }) => {
    await carPage.open("https://freshauto.ru/cars/audi-q7-636403")
    await carPage.clickBuyOnlineButton()
    await creditOnlinePage.fillElement(creditOnlinePage.lastNameInput, lastName)
    await creditOnlinePage.fillElement(creditOnlinePage.nameInput, name)
    await creditOnlinePage.fillElement(creditOnlinePage.cityInput, city)
    await creditOnlinePage.clickUponDeliveryRadioButton()
    // await buyingOnlinePage.fillElement(buyingOnlinePage.emailInput, email)
    await creditOnlinePage.fillElement(creditOnlinePage.phoneInput, phone)
    await creditOnlinePage.clickPersonalDataCheckbox()
    await creditOnlinePage.clickSubmitButton()
    // await buyingOnlinePage.page.pause()
});
//  https://freshauto.ru/cars/audi-q7-595638