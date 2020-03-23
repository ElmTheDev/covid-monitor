const Cache = require("./src/utils/cache");
const Notify = require("./src/utils/notify");
const Country = require("./src/monitors/country");
const Config = require("./config.json");

(async () => {
    for(let country of Config.countries) {
        setInterval(async () => {
            let oldData = Cache.getCache(country.code);
            let lastData = await Country.fetchCountry(country.code);
            lastData = lastData[Object.keys(lastData)[Object.keys(lastData).length - 1]];
        
            let isDifferent = Cache.isDifferent(country.code, lastData);
            console.log(isDifferent)
        
        
            if(isDifferent) {
                Cache.setCache(country.code, lastData);
                Notify.SendNotification(country.webhook, oldData, lastData)
            }
            isDifferent = Cache.isDifferent(country.code, lastData);
        }, 15000)
    }
})();