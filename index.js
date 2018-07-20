// const puppeteer = require('puppeteer');



const HCCrawler = require('headless-chrome-crawler');
 
(async () => {
  const crawler = await HCCrawler.launch({
    // Function to be evaluated in browsers
    evaluatePage: (() => ({
      title: $('.main-container'),
    })),
    // Function to be called with evaluated results from browsers
    onSuccess: (result => {
      console.log(result);
    }),
  });
  // Queue a request
  await crawler.queue('https://registroapps.uniandes.edu.co/oferta_cursos/index.php/courses?prefix=CBCO&term=201820&ptrm=1');
  await crawler.onIdle(); // Resolved when no queue is left
  await crawler.close(); // Close the crawler
})();














/* 
let scrape = async (suburl) => {
    // const browser = await puppeteer.launch({headless: false});
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://registroapps.uniandes.edu.co/oferta_cursos/index.php/courses?prefix='+suburl+"&term=201820&ptrm=1");
    const result = await page.evaluate(() => {

        const data = [];
        const elements = document.querySelectorAll('#main-container > div.row');
        return elements; // PARA DEBUGGING 
        for (let element of elements){
            const capacidad = element.childNodes[1].textContent;
            const disponible = element.childNodes[3].textContent;

            data.push({capacidad, disponible});
        }

        return data;
    });

    browser.close();
    return result;
};

scrape("CBCO").then((value) => {
    console.log(value);
}); */