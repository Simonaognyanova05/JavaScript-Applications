function attachEvents() {
    let submitBtn = document.getElementById('submit');
    let url = 'http://localhost:3030/jsonstore/forecaster/locations';
    let location = document.getElementById('location');
    let forecastElement = document.getElementById('forecast');
    let currentElement = document.getElementById('current');


    submitBtn.addEventListener('click', () => {
        forecastElement.style.display = 'block';
        let divForecast = document.createElement('div');
        divForecast.classList.add('forecasts');

        fetch(url)
            .then(res => res.json())
            .then(result => {
                result.forEach(x => {
                    if (x.name === location.value) {
                        let url1 = `http://localhost:3030/jsonstore/forecaster/today/${x.code}`;

                        fetch(url1)
                            .then(res => res.json())
                            .then(result => {
                                if (result.forecast.condition === 'Sunny') {
                                    let symbol = document.createElement('span');
                                    symbol.classList.add('symbol');
                                    symbol.innerHTML = '&#x2600;';
                                    divForecast.appendChild(symbol)

                                    let spanCondition = document.createElement('span');
                                    spanCondition.classList.add('condition');

                                    let city = document.createElement('span');
                                    city.classList.add('forecast-data');
                                    city.textContent = result.name;

                                    let temperature = document.createElement('span');
                                    temperature.classList.add('forecast-data');
                                    temperature.innerHTML = result.forecast.low + '&#176;' + '/' + result.forecast.high + '&#176;';

                                    let condition = document.createElement('span');
                                    condition.classList.add('forecast-data');
                                    condition.textContent = result.forecast.condition;

                                    spanCondition.appendChild(city);
                                    spanCondition.appendChild(temperature);
                                    spanCondition.appendChild(condition);
                                    divForecast.appendChild(spanCondition);

                                } else if (result.forecast.condition === 'Rain') {
                                    let symbol = document.createElement('span');
                                    symbol.classList.add('symbol');
                                    symbol.innerHTML = '&#x2614;';
                                    divForecast.appendChild(symbol)

                                    let spanCondition = document.createElement('span');
                                    spanCondition.classList.add('condition');

                                    let city = document.createElement('span');
                                    city.classList.add('forecast-data');
                                    city.textContent = result.name;

                                    let temperature = document.createElement('span');
                                    temperature.classList.add('forecast-data');
                                    temperature.innerHTML = result.forecast.low + '&#176;' + '/' + result.forecast.high + '&#176;';

                                    let condition = document.createElement('span');
                                    condition.classList.add('forecast-data');
                                    condition.textContent = result.forecast.condition;

                                    spanCondition.appendChild(city);
                                    spanCondition.appendChild(temperature);
                                    spanCondition.appendChild(condition);
                                    divForecast.appendChild(spanCondition);
                                } else if (result.forecast.condition === 'Overcast') {
                                    let symbol = document.createElement('span');
                                    symbol.classList.add('symbol');
                                    symbol.innerHTML = '&#x2601;';
                                    divForecast.appendChild(symbol)

                                    let spanCondition = document.createElement('span');
                                    spanCondition.classList.add('condition');

                                    let city = document.createElement('span');
                                    city.classList.add('forecast-data');
                                    city.textContent = result.name;

                                    let temperature = document.createElement('span');
                                    temperature.classList.add('forecast-data');
                                    temperature.innerHTML = result.forecast.low + '&#176;' + '/' + result.forecast.high + '&#176;';

                                    let condition = document.createElement('span');
                                    condition.classList.add('forecast-data');
                                    condition.textContent = result.forecast.condition;

                                    spanCondition.appendChild(city);
                                    spanCondition.appendChild(temperature);
                                    spanCondition.appendChild(condition);
                                    divForecast.appendChild(spanCondition);
                                } else if (result.forecast.condition === 'Partly sunny') {
                                    let symbol = document.createElement('span');
                                    symbol.classList.add('symbol');
                                    symbol.innerHTML = '&#x26C5;';
                                    divForecast.appendChild(symbol)

                                    let spanCondition = document.createElement('span');
                                    spanCondition.classList.add('condition');

                                    let city = document.createElement('span');
                                    city.classList.add('forecast-data');
                                    city.textContent = result.name;

                                    let temperature = document.createElement('span');
                                    temperature.classList.add('forecast-data');
                                    temperature.innerHTML = result.forecast.low + '&#176;' + '/' + result.forecast.high + '&#176;';

                                    let condition = document.createElement('span');
                                    condition.classList.add('forecast-data');
                                    condition.textContent = result.forecast.condition;

                                    spanCondition.appendChild(city);
                                    spanCondition.appendChild(temperature);
                                    spanCondition.appendChild(condition);
                                    divForecast.appendChild(spanCondition);
                                }
                            })
                            .catch(err => console.log(err));

                        let url2 = `http://localhost:3030/jsonstore/forecaster/upcoming/${x.code}`;


                        fetch(url2)
                            .then(res => res.json())
                            .then(result => {
                                result.forecast.forEach(x => {
                                    let upcomingElement = document.getElementById('upcoming');
                                    let spanUpcoming = document.createElement('span');
                                    spanUpcoming.classList.add('symbol');
                                    if (x.condition === 'Rain') {
                                        spanUpcoming.innerHTML += '&#x2614;';
                                    }else if (x.condition === 'Overcast') {
                                        spanUpcoming.innerHTML = '&#x2601;';
                                    }else if (x.condition === 'Partly sunny') {
                                        spanUpcoming.innerHTML += '&#x26C5;';
                                    }else if (x.condition === 'Sunny') {
                                        spanUpcoming.innerHTML += '&#x2600;';
                                    }
                                    let spanDegrees = document.createElement('span');
                                    spanDegrees.classList.add('forecast-data');
                                    spanDegrees.innerHTML = x.low + '&#176;' + '/' + x.high + '&#176;';

                                    let spanCondition = document.createElement('span');
                                    spanCondition.classList.add('forecast-data');
                                    spanCondition.innerHTML = x.condition;

                                    upcomingElement.appendChild(spanUpcoming);
                                    upcomingElement.appendChild(spanDegrees);
                                    upcomingElement.appendChild(spanCondition);
                                })


                            })
                            .catch(err => console.log(err));
                    }
                })

            })
        currentElement.appendChild(divForecast);

    })
}

attachEvents();