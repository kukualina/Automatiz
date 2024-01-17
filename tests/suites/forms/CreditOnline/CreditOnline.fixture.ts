import { test as base } from '@playwright/test';
import { CarPage } from '../../../pageObjects/CarPage';
import { CreditOnlinePage } from '../../../pageObjects/CreditOnlinePage';

type TestFixtures = {
    carPage: CarPage;
    creditOnlinePage: CreditOnlinePage;
};

const test = base.extend<TestFixtures>({
    carPage: async ({ page }, use) => {
        const carPage = new CarPage(page);
        await use(carPage);
    },

    creditOnlinePage: async ({ page }, use) => {
        const creditOnlinePage = new CreditOnlinePage(page);
        await use(creditOnlinePage);
    },
});

export default test;