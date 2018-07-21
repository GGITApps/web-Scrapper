var scrapper = require('./scrapper.js')

setInterval(()=>{
    scrapper.scrappearValores("ADMI");
    scrapper.scrappearValores("ANTR");
    scrapper.scrappearValores("ARQU");
    scrapper.scrappearValores("ARTE");
    scrapper.scrappearValores("BIOL");
    scrapper.scrappearValores("CBCO");
    scrapper.scrappearValores("CBCA");
    scrapper.scrappearValores("CIDE");
    scrapper.scrappearValores("CPOL");
    
}, 60 * 1000);





