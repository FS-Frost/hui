let vanillaCounter = function (selector) {
    let app = document.querySelector(selector);
    if (app == null) {
        console.error("ERROR: #app element not found");
        return;
    }

    let counter = 0;

    function render() {
        app.innerHTML = "";

        let p = document.createElement("p");
        p.innerText = counter;

        app.appendChild(p);

        let buttonIncreaseCounter = document.createElement("button");
        buttonIncreaseCounter.textContent = "+";

        buttonIncreaseCounter.onclick = function () {
            counter++;
            render();
        };

        app.appendChild(buttonIncreaseCounter);

        let buttonDecreaseCounter = document.createElement("button");
        buttonDecreaseCounter.textContent = "-";

        buttonDecreaseCounter.onclick = function () {
            counter--;
            render();
        };

        app.appendChild(buttonDecreaseCounter);
    }

    render();
};
