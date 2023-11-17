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

    function resetCounter() {
        count = 0;
        render();
    }

    function render() {
        app.innerHTML = "";
        app.classList.add("m-5");

        let h1 = document.createElement("h1");
        h1.innerText = "Vanilla JS component";
        h1.classList.add("title", "is-3", "mb-1");
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
        buttonIncreaseCounter.classList.add("button", "is-success", "mr-1");
        buttonIncreaseCounter.textContent = "+";
        buttonIncreaseCounter.onclick = increaseCounter;
        app.appendChild(buttonIncreaseCounter);

        let buttonDecreaseCounter = document.createElement("button");
        buttonDecreaseCounter.classList.add("button", "is-danger", "mr-1");
        buttonDecreaseCounter.textContent = "-";
        buttonDecreaseCounter.onclick = decreaseCounter;
        app.appendChild(buttonDecreaseCounter);

        let buttonResetCounter = document.createElement("button");
        buttonResetCounter.classList.add("button", "is-info", "mr-1");
        buttonResetCounter.textContent = "Reset";
        buttonResetCounter.onclick = resetCounter;
        app.appendChild(buttonResetCounter);

        let listContainer = document.createElement("div");
        listContainer.classList.add("list");
        app.appendChild(listContainer);

        for (let i = 1; i <= count; i++) {
            const item = document.createElement("p");
            item.textContent = `${i > 1 ? "," : ""}${i}`;
            listContainer.appendChild(item);
        }

        let list = [];

        for (let i = -1; i >= count; i--) {
            const item = document.createElement("p");
            item.textContent = `${i}${i < -1 ? "," : ""}`;
            list.unshift(item);
        }

        for (const item of list) {
            listContainer.appendChild(item);
        }
    }

    render();
};
