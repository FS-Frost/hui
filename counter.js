let count = 0;

function counter() {
    return div({
        class: "m-5",
        children: [
            div({
                class: "",
                children: [
                    h1({
                        text: "HUI application",
                        class: "title is-1",
                    }),
                ],
            }),
            div({
                children: [
                    h1({
                        text: "Simple counter",
                        class: "title is-3 mt-3",
                    }),
                    button({
                        text: `Count: ${count}`,
                        class: "button is-primary",
                        onClick: () => {
                            count++;
                            console.log("click!", { count });
                            render();
                        },
                    }),
                ],
            }),
        ],
    });
}

function renderCounter() {
    newApp(counter);
}
