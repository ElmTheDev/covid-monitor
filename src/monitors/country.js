const Request = require("request-curl");

const fetchCountry = async (code) => {
    let done = false;
    while(!done) {
        try {
            let response = await Request({
                url: `https://covidapi.info/api/v1/country/${code}`,
                json: true
            });
        
            const data = response.body;
        
            done = true;
            return data.result;
        } catch(e) {
            await new Promise(resolve => setTimeout(resolve, 100));
        }
    }
}

module.exports = {
    fetchCountry    
};