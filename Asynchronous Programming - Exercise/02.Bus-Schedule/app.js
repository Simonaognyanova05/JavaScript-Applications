function solve() {
    let arriveBtn = document.getElementById('arrive');
    let departBtn = document.getElementById('depart');
    let infoElement = document.querySelector('.info');

    let stop = {
        next: 'depot'
    }
    async function depart() {
        departBtn.disabled = true;
        let url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;
        let res = await fetch(url);
        stop = await res.json();

        infoElement.textContent = `Next stop ${stop.name}`;
        arriveBtn.disabled = false;

    }

    function arrive() {
        departBtn.disabled = false;
        arriveBtn.disabled = true;
        infoElement.textContent = `Arriving at ${stop.name}`;

    }

    return {
        depart,
        arrive
    };
}

let result = solve();