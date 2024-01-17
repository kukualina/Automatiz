import { Page } from "@playwright/test";
import { test } from '@playwright/test';
import { BasePage } from "./BasePage";


export class CarPage extends BasePage{
    // readonly page: Page
    readonly buyOnlineButton = this.page.locator('[data-yandex-goal="buyonline_tscardup"]').getByText('Купить онлайн').nth(0)


    //  constructor(page: Page) {
    //     this.page = page
    //     this.buyOnlineButton = this.page.locator('[data-yandex-goal="buyonline_tscardup"]').getByText('Купить онлайн').nth(0)
        
    // }
    constructor(page: Page) {
        super(page);
        // this.buyOnlineButton = this.page.locator('[data-yandex-goal="buyonline_tscardup"]').getByText('Купить онлайн').nth(0)
       }
   
    async clickBuyOnlineButton(): Promise<void> {
        await test.step(`Кликаем по кнопке "Купить онлайн"`, async () => {
            await this.buyOnlineButton.click();
        });
    }
}