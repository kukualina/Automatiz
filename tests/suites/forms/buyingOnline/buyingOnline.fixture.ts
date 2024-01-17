import { test as base } from '@playwright/test';
import { CarPage } from '../../../pageObjects/CarPage';
import { BuyingOnlinePage } from '../../../pageObjects/BuyingOnlinePage';

type TestFixtures = {
    carPage: CarPage;
    buyingOnlinePage: BuyingOnlinePage;
};

const test = base.extend<TestFixtures>({
    carPage: async ({ page }, use) => {
        const carPage = new CarPage(page);
        await use(carPage);
    },

    buyingOnlinePage: async ({ page }, use) => {
        const buyingOnlinePage = new BuyingOnlinePage(page);
        await use(buyingOnlinePage);
    },
});

export default test;