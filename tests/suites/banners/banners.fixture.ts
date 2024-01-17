import { test as base } from '@playwright/test';
import { MainPage } from '../../pageObjects/MainPage';

type TestFixtures = {
    mainPage: MainPage;
};

const test = base.extend<TestFixtures>({
    mainPage: async ({ page }, use) => {
        const mainPage = new MainPage(page);
        await mainPage.open()
        await use(mainPage);
    },
});

export default test;