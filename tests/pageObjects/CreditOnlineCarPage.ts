import { Page } from "@playwright/test";
import { test } from '@playwright/test';
import { BasePage } from "./BasePage";
//import { CreditOnlinePage } from "./BasePage";



export class CarPage extends BasePage{
    // readonly page: Page
    readonly carOnlineButton = this.page.locator('[data-yandex-goal="credit_tscardup"]').getByText('Рассчитать кредит').nth(0)


    //  constructor(page: Page) {
    //     this.page = page
    //     this.buyOnlineButton = this.page.locator('[data-yandex-goal="buyonline_tscardup"]').getByText('Купить онлайн').nth(0)
        
    // }
    constructor(page: Page) {
        super(page);
        // this.buyOnlineButton = this.page.locator('[data-yandex-goal="buyonline_tscardup"]').getByText('Купить онлайн').nth(0)
       }
   
    async clickCarOnlineButton(): Promise<void> {
        await test.step(`Кликаем по кнопке "Рассчитать кредит"`, async () => {
            await this.carOnlineButton.click();
        });
    }
}