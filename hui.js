const classOptions = {
    class: "",
};

const textOptions = {
    text: "",
};

const divOptions = {
    children: [],
    ...classOptions,
};

function div(options = divOptions) {
    let element = document.createElement("div");

    for (const child of options.children) {
        element.appendChild(child);
    }

    if (options.class) {
        element.classList.add(
            ...options.class.split(" ").filter((x) => x.length > 0)
        );
    }

    return element;
}

const h1Options = {
    ...classOptions,
    ...textOptions,
};

function h1(options = h1Options) {
    let element = document.createElement("h1");
    element.innerText = options.text;

    if (options.class) {
        element.classList.add(
            ...options.class.split(" ").filter((x) => x.length > 0)
        );
    }

    return element;
}

const pOptions = {
    ...classOptions,
    ...textOptions,
};

function p(options = pOptions) {
    let element = document.createElement("p");
    element.innerText = options.text;

    if (options.class) {
        element.classList.add(
            ...options.class.split(" ").filter((x) => x.length > 0)
        );
    }

    return element;
}

const buttonOptions = {
    ...classOptions,
    ...textOptions,
    onClick: () => {},
};

function button(options = buttonOptions) {
    let element = document.createElement("button");
    element.innerText = options.text;

    if (options.class) {
        element.classList.add(
            ...options.class.split(" ").filter((x) => x.length > 0)
        );
    }

    element.onclick = options.onClick;
    return element;
}

let appComponent = null;

function newApp(component) {
    appComponent = component;
    render();
}

function render() {
    let app = document.querySelector("#app");
    if (app == null) {
        console.error("ERROR: #app element not found");
        return;
    }

    app.innerHTML = "";
    app.appendChild(appComponent());
}
