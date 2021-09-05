const puppeteer = require('puppeteer');


(async() => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://unsplash.com/');

    //! Acessa a página de login
    await page.click('[href="/login"]');

    //! Preencher o campo email e senha
    await page.type('[name="user[email]"]', 'gui.resende@hotmail.com')
    await page.type('[name = "user[password]"]', '0101digicard21')

    await page.click('[type="submit"]')

    //! Código para deixar o processo de navegação terminar para assim poder ir para outra url
    await page.waitForNavigation();

    //! Acessar essa página da foto
    await page.goto('https://unsplash.com/photos/LzWXPcJg7lk')

    //! Dar o Like na foto
    await page.click('[title="Like photo"]')



    //await browser.close();
})();