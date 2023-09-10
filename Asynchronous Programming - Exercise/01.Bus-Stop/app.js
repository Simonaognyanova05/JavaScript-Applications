function getInfo() {
    let stopId = document.getElementById('stopId');
    let url = `http://localhost:3030/jsonstore/bus/businfo/${stopId.value}`;
    let stopName = document.getElementById('stopName');
    let busesList = document.getElementById('buses');

    // fetch(url).then(res => res.json())
    // .then(result => {
    //     stopName.textContent = result.name;
    // })
    // .catch(err => console.log(err));

    async function getNameOfStop() {
        try {
            let response = await fetch(url);
            let char = response.json();


            return char;
        }
        catch (err) {
            console.log(err);
        }
    }
    getNameOfStop().then(char => stopName.textContent = char.name);


    stopId.value = '';

    // fetch(url).then(res => res.json())
    //     .then(result => {
    //         let keys = Object.keys(result.buses);
    //         keys.forEach(key => {
    //             let liElement = document.createElement('li');
    //             liElement.textContent = `Bus ${key} arrives in ${result.buses[key]} minutes`;
    //             busesList.appendChild(liElement);
    //         })
    //     })
    //     .catch(() => stopName.textContent = 'Error');

    async function getStops() {
        try {
            let response = await fetch(url);
            let char = await response.json();

            return char;
        }
        catch(err){
            console.log(err);
        }
        
    }
    getStops().then(char => {
        let keys = Object.keys(char.buses);
            keys.forEach(key => {
                let liElement = document.createElement('li');
                liElement.textContent = `Bus ${key} arrives in ${char.buses[key]} minutes`;
                busesList.appendChild(liElement);
            })
    });


}