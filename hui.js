/**
 * @typedef {Object} DivProps
 * @property {(classes: string) => Div} $class
 * @property {(...children: HTMLElement[]) => Div} $append
 *
 * @typedef {HTMLDivElement & DivProps} Div
 */

/**
 *
 * @param {...HTMLElement} [children]
 * @returns {Div}
 */
function div(...children) {
    let element = document.createElement("div");

    element.$append = (...children) => {
        if (Array.isArray(children)) {
            for (const child of children) {
                element.appendChild(child);
            }
        }

        return element;
    };

    element.$append(...children);

    element.$class = (value) => {
        element.classList.add(...value.split(" ").filter((x) => x.length > 0));
        return element;
    };

    return element;
}

/**
 * @typedef {Object} HeadProps
 * @property {(classes: string) => Head} $class
 *
 * @typedef {HTMLHeadElement & HeadProps} Head
 */

/**
 *
 * @param {string} text
 * @returns {Head}
 */
function h1(text = "") {
    let element = document.createElement("h1");
    element.innerText = text;

    element.$class = (value) => {
        element.classList.add(...value.split(" ").filter((x) => x.length > 0));
        return element;
    };

    return element;
}

/**
 * @typedef {Object} ParagraphProps
 * @property {(classes: string) => Paragraph} $class
 *
 * @typedef {HTMLParagraphElement & ParagraphProps} Paragraph
 */

/**
 *
 * @param {string} text
 * @returns {Paragraph}
 */
function p(text = "") {
    let element = document.createElement("p");
    element.innerText = text;

    element.$class = (value) => {
        element.classList.add(...value.split(" ").filter((x) => x.length > 0));
        return element;
    };

    return element;
}

/**
 * @typedef {Object} AnchorProps
 * @property {(classes: string) => Anchor} $class
 * @property {(value: string) => Anchor} $href
 * @property {(value: string) => Anchor} $target
 *
 * @typedef {HTMLAnchorElement & AnchorProps} Anchor
 */

/**
 *
 * @param {string} text
 * @returns {Anchor}
 */
function a(text = "") {
    let element = document.createElement("a");
    element.innerText = text;

    element.$class = (value) => {
        element.classList.add(...value.split(" ").filter((x) => x.length > 0));
        return element;
    };

    element.$href = (value) => {
        element.href = value;
        return element;
    };

    element.$target = (value) => {
        element.target = value;
        return element;
    };

    return element;
}

/**
 * @typedef {Object} ButtonProps
 * @property {(classes: string) => Button} $class
 * @property {(handler: () => void) => Button} $onClick
 *
 * @typedef {HTMLButtonElement & ButtonProps} Button
 */

/**
 *
 * @param {string} text
 * @returns {Button}
 */
function button(text = "") {
    let element = document.createElement("button");
    element.innerText = text;

    element.$class = (value) => {
        element.classList.add(...value.split(" ").filter((x) => x.length > 0));
        return element;
    };

    element.$onClick = (handler) => {
        element.onclick = handler;
        return element;
    };

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
