export default class WeatherApi {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
        this._apiKey = options.apiKey;
        this._initialLon = options.initialLon;
        this._initialLat = options.initialLat;
    }

    _checkRes(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
    }

    test () {
        console.log(this._baseUrl);
        console.log(this._headers);
        console.log(this._apiKey);
        console.log(this._initialLat);
        console.log(this._initialLon);
    }

getWeatherData() {
    return fetch(`${this._baseUrl}lat=${this._initialLat}&lon=${this._initialLon}&units=imperial&appid=${this._apiKey}`, {
        method: 'GET',
    }).then(this._checkRes).then((res) => {console.log((res))});
}

setWeatherType(temp) {
    if(temp >= 80) {
        return 'hot';
    }
    else if (temp >= 60) {
        return 'warm';
    }
    else if (temp >= 45) {
        return 'chilly'
    }
    else {
        return 'cold';
    }
}

}