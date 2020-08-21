require("chromedriver");
const assert = require("assert");
const {Builder, By, until} = require("selenium-webdriver");

describe("Тестирование React App", () => {
    beforeEach(async function() {
        driver = await new Builder().forBrowser("chrome").build();
        await driver.get("http://localhost:3000");
        await driver.sleep(3000);
        assert.equal(await driver.getTitle(), 'React Index');
    });

    it("Сценарий - нормальная масса тела", async function() {
        let weight = 65,
            height = 175,
            age = 20,
            bmi = 21.2,
            bodyType = "Нормальная масса тела";

        await driver.findElement(By.xpath('//input[@placeholder=\"Вес в кг\"]')).sendKeys(weight);
        await driver.findElement(By.xpath('//input[@placeholder=\"Рост в см\"]')).sendKeys(height);
        await driver.findElement(By.xpath('//input[@placeholder=\"Возраст\"]')).sendKeys(age);
        await driver.findElement(By.xpath('//div[@class="inputs"]/div/div/div[2]/div')).click();
        await driver.findElement(By.xpath('//div[text()="Средняя"]')).click();
        await driver.findElement(By.xpath('//label[@for="man"]')).click();
        await driver.findElement(By.xpath('//button[text() = "Рассчитать"]')).click();

        await driver.wait(await until.elementLocated(By.xpath('//div[@class="result"]/h2'), 5000)).getText()
            .then(async function (pageBmi){
                assert.equal(bmi, pageBmi);
            });
        await driver.wait(await until.elementLocated(By.xpath('//div[@class="result"]/p'), 5000)).getText()
            .then(async function (pageBodyType){
                assert.equal(bodyType, pageBodyType);
            });
    });

    it("Сценарий - Ожирение первой степени", async function() {
        let weight = 90,
            height = 170,
            age = 25,
            bmi = 31.1,
            bodyType = "Ожирение первой степени";

        await driver.findElement(By.xpath('//input[@placeholder=\"Вес в кг\"]')).sendKeys(weight);
        await driver.findElement(By.xpath('//input[@placeholder=\"Рост в см\"]')).sendKeys(height);
        await driver.findElement(By.xpath('//input[@placeholder=\"Возраст\"]')).sendKeys(age);
        await driver.findElement(By.xpath('//div[@class="inputs"]/div/div/div[2]/div')).click();
        await driver.findElement(By.xpath('//div[text()="Минимальная"]')).click();
        await driver.findElement(By.xpath('//label[@for="man"]')).click();
        await driver.findElement(By.xpath('//button[text() = "Рассчитать"]')).click();

        await driver.wait(await until.elementLocated(By.xpath('//div[@class="result"]/h2'), 5000)).getText()
            .then(async function (pageBmi){
                assert.equal(bmi, pageBmi);
            });
        await driver.wait(await until.elementLocated(By.xpath('//div[@class="result"]/p'), 5000)).getText()
            .then(async function (pageBodyType){
                assert.equal(bodyType, pageBodyType);
            });
    });

    afterEach(() => driver.quit());
})