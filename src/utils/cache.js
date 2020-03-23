let cachedData = {};

const setCache = (code, value) => {
    cachedData[code] = value;
}

const getCache = (code) => {
    if (!cachedData[code])
        cachedData[code] = {
            confirmed: -1,
            deaths: -1,
            recovered: -1
        };

    return cachedData[code];
}

const isDifferent = (code, value) => {
    let old = getCache(code);

    return old.confirmed !== value.confirmed || old.deaths !== value.deaths || old.recovered !== value.recovered;
}

module.exports = {
    setCache,
    getCache,
    isDifferent
}