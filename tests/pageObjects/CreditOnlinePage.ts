import { Page, test } from "@playwright/test";
import { BasePage } from "./BasePage";


export class BuyingOnlinePage extends BasePage {
    readonly selectCarInput = this.page.getByPlaceholder('Поиск по базе Fresh')
    readonly lastNameInput = this.page.getByPlaceholder('Фамилия')
    readonly nameInput = this.page.getByPlaceholder('Имя')
    readonly surnameInput = this.page.getByPlaceholder('Город')
    readonly uponDeliveryRadioButton = this.page.locator('[for="online_order_request_online_order_payment_type_upon_delivery"]')
    readonly phoneInput = this.page.getByPlaceholder('Телефон')
    readonly personalDataCheckbox = this.page.locator('.checkbox-icon')
    readonly submitButton = this.page.locator('[type="submit"]')

    constructor(page: Page) {
        super(page);
    }

   
    
        // async clickUponDeliveryRadioButton(): Promise<void> {
        //     await test.step(`Кликаем по радио баттону в способах оплаты`, async () => {
        //         await this.uponDeliveryRadioButton.waitFor({ state: "attached" })
        //         await this.uponDeliveryRadioButton.click();
        //     });
        // }

    async clickPersonalDataCheckbox(): Promise<void> {
        await test.step(`Кликаем по чек-бксу с соглашением`, async () => {
            await this.personalDataCheckbox.click();
        });
    }

    async clickSubmitButton(): Promise<void> {
        await test.step(`Кликаем по кнопке "Отправить"`, async () => {
            await this.submitButton.click();
        });
    }
}
