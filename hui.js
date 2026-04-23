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
        for (const child of children) {
            if (Array.isArray(child)) {
                element.append(...child);
            } else {
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

/**
 * @typedef {Object} InputProps
 * @property {(classes: string) => Input} $class
 * @property {(value: string) => Input} $value
 * @property {(value: string) => Input} $placeholder
 * @property {(value: string) => Input} $type
 * @property {(handler: (e: Event) => void) => Input} $onInput
 *
 * @typedef {HTMLInputElement & InputProps} Input
 */

/**
 *
 * @returns {Input}
 */
function input() {
    let element = document.createElement("input");

    element.$class = (value) => {
        element.classList.add(...value.split(" ").filter((x) => x.length > 0));
        return element;
    };

    element.$value = (value) => {
        element.value = value;
        return element;
    };

    element.$placeholder = (value) => {
        element.placeholder = value;
        return element;
    };

    element.$type = (value) => {
        element.type = value;
        return element;
    };

    element.$onInput = (handler) => {
        element.oninput = handler;
        return element;
    };

    return element;
}

/**
 * @typedef {Object} TableProps
 * @property {(classes: string) => Table} $class
 * @property {(...children: HTMLElement[]) => Table} $append
 *
 * @typedef {HTMLTableElement & TableProps} Table
 */

/**
 *
 * @param {...HTMLElement} [children]
 * @returns {Table}
 */
function table(...children) {
    let element = document.createElement("table");

    element.$append = (...children) => {
        for (const child of children) {
            if (Array.isArray(child)) {
                element.append(...child);
            } else {
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

function thead(...children) {
    let element = document.createElement("thead");
    element.$append = (...children) => {
        for (const child of children) {
            if (Array.isArray(child)) {
                element.append(...child);
            } else {
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

function tbody(...children) {
    let element = document.createElement("tbody");
    element.$append = (...children) => {
        for (const child of children) {
            if (Array.isArray(child)) {
                element.append(...child);
            } else {
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

function tr(...children) {
    let element = document.createElement("tr");
    element.$append = (...children) => {
        for (const child of children) {
            if (Array.isArray(child)) {
                element.append(...child);
            } else {
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

function th(text = "") {
    let element = document.createElement("th");
    element.innerText = text;
    element.$class = (value) => {
        element.classList.add(...value.split(" ").filter((x) => x.length > 0));
        return element;
    };
    return element;
}

function td(text = "") {
    let element = document.createElement("td");
    if (text instanceof HTMLElement) {
        element.appendChild(text);
    } else {
        element.innerText = text;
    }
    element.$class = (value) => {
        element.classList.add(...value.split(" ").filter((x) => x.length > 0));
        return element;
    };
    element.$append = (...children) => {
        for (const child of children) {
            if (Array.isArray(child)) {
                element.append(...child);
            } else {
                element.appendChild(child);
            }
        }
        return element;
    };
    return element;
}

function label(text = "") {
    let element = document.createElement("label");
    element.innerText = text;
    element.$class = (value) => {
        element.classList.add(...value.split(" ").filter((x) => x.length > 0));
        return element;
    };
    return element;
}


let apps = [];

/**
 * Creates a new HUI application.
 * @param {() => HTMLElement} component - The root component function.
 * @param {string} selector - The CSS selector for the root element. Defaults to "#app".
 */
function newApp(component, selector = "#app") {
    // Check if an app is already registered for this selector to avoid duplicates
    const existingApp = apps.find(a => a.selector === selector);
    if (existingApp) {
        existingApp.component = component;
    } else {
        apps.push({ component, selector });
    }
    render();
}

/**
 * Re-renders all registered HUI applications.
 */
function render() {
    for (const app of apps) {
        const root = document.querySelector(app.selector);
        if (root == null) {
            console.warn(`HUI Warning: Root element "${app.selector}" not found`);
            continue;
        }

        root.innerHTML = "";
        root.appendChild(app.component());
    }
}

