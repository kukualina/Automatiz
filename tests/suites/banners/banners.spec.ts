import test from './banners.fixture';

test('При клике на баннер "Ответ на любой вопрос" редерект на страницу new.freshauto.ru', async ({ mainPage }) => {
    await mainPage.clickBannerBlock(0)
    await mainPage.checkCurrentPageUrl("https://.freshauto./app/?utm_source=site&utm_medium=main_banner&utm_campaign=app")
});

test('При клике на баннер "Клуб Тайных Агентов" редерект на страницу club.freshauto.ru', async ({ mainPage }) => {
    await mainPage.clickBannerBlock(1)
    await mainPage.checkCurrentPageUrl("https://club.freshauto.ru/?utm_source=main_site")
});

test('При клике на баннер "Классные авто в новом салоне" редерект на страницу freshauto.ru/dealers/moskva/fresh-mo-zelenograd', async ({ mainPage }) => {
    await mainPage.clickBannerBlock(2)
    await mainPage.checkCurrentPageUrl("https://freshauto.ru/dealers/moskva/fresh-mo-zelenograd?utm_source=main&utm_medium=referal&utm_campaign=salon")
});

test('При клике на баннер "Огромный выбор проверенных авто" редерект на страницу freshauto.ru/cars', async ({ mainPage }) => {
    await mainPage.clickBannerBlock(3)
    await mainPage.checkCurrentPageUrl("https://freshauto.ru/cars?utm_source=main&utm_medium=referal&utm_campaign=catalog")
});

test('При клике на баннер "Безопасно быстро " редерект на страницу freshauto.ru/services_for_sales', async ({ mainPage }) => {
    await mainPage.clickBannerBlock(4)
    await mainPage.checkCurrentPageUrl("https://freshauto.ru/services_for_sales?utm_source=main&utm_medium=referal&utm_campaign=sale")
});

test('При клике на баннер "Онлайн запись" редерект на страницу service.freshauto.ru', async ({ mainPage }) => {
    await mainPage.clickBannerBlock(5)
    await mainPage.checkCurrentPageUrl("https://service.freshauto.ru/?utm_source=freshauto&utm_medium=referal&utm_campaign=service")
});

