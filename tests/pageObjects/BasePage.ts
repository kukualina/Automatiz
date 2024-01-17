import { Page, test, expect, Locator } from "@playwright/test";

export class BasePage {
    public readonly page: Page;
    public pageUrl: string;


    constructor(page: Page) {
        this.page = page;
        this.pageUrl = '';
    }

    public async open(directUrl?: string): Promise<void> {
        const url = directUrl || this.pageUrl;
        await this.page.goto(url, { waitUntil: "domcontentloaded" });
    }

    async checkCurrentPageUrl(url: RegExp | string, page: Page = this.page): Promise<void> {
        await test.step(`Проверяем, что url страницы (${page.url()}) соответствует "${url}"`, async () => {
           await expect(page).toHaveURL(url)
        })
    }

    async fillElement(element: Locator, text: string, ): Promise<void> {
        await test.step('Заполняем элемент', async () => {
            await element.fill(text)
        })
    }
}