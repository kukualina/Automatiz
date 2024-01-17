import { Page, test } from "@playwright/test";
import { BasePage } from "./BasePage";

export class MainPage extends BasePage {
    readonly bannerBlock = this.page.locator(".banner-content figure")

    constructor(page: Page) {
        super(page);
        this.pageUrl = "https://freshauto.ru/";
    }

    async clickBannerBlock(index = 0): Promise<void> {
        await test.step(`Кликаем по баннеру`, async () => {
            await this.bannerBlock.nth(index).click();
        });
    }
}