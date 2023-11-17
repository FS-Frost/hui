let vanillaCounter = function (selector) {
    let app = document.querySelector(selector);
    if (app == null) {
        console.error(`ERROR: root element not found: '${selector}'`);
        return;
    }

    let count = 0;

    function increaseCounter() {
        count++;
        console.log("up it goes!", { count });
        render();
    }

    function decreaseCounter() {
        count--;
        console.log("and down it went!", { count });
        render();
    }

    function render() {
        app.innerHTML = "";
        app.classList.add("m-5");

        let h1 = document.createElement("h1");
        h1.innerText = "Vanilla JS component";
        h1.classList.add("title", "is-3");
        app.appendChild(h1);

        let link = document.createElement("a");
        link.innerText = "(Source code)";
        link.href = "vanillaCounter.js";
        link.target = "_blank";
        app.appendChild(link);

        let p = document.createElement("p");
        p.innerText = `Count: ${count}`;
        app.appendChild(p);

        let buttonIncreaseCounter = document.createElement("button");
        buttonIncreaseCounter.classList.add("button", "is-success");
        buttonIncreaseCounter.textContent = "+";
        buttonIncreaseCounter.onclick = increaseCounter;
        app.appendChild(buttonIncreaseCounter);

        let buttonDecreaseCounter = document.createElement("button");
        buttonDecreaseCounter.classList.add("button", "is-danger");
        buttonDecreaseCounter.textContent = "-";
        buttonDecreaseCounter.onclick = decreaseCounter;
        app.appendChild(buttonDecreaseCounter);
    }

    render();
};
