let count = 0;

function counter() {
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

    let list = [];
    for (let i = 1; i <= count; i++) {
        list.push(p(`Item ${i}`));
    }

    for (let i = -1; i >= count; i--) {
        list = [p(`Item ${i}`), ...list];
    }

    return div()
        .$class("m-5")
        .$append(
            div(
                h1("hui demo").$class("title is-1"),
                p("Reactive HTML UI framework for simple web applications"),
                a("(hui source code)").$href("hui.js").$target("_blank")
            ),
            div(
                h1("hui component").$class("title is-3 mt-3"),
                a("(Source code)").$href("counter.js").$target("_blank"),
                p(`Count: ${count}`),
                button("+").$class("button is-success").$onClick(increaseCounter),
                button("-").$class("button is-danger").$onClick(decreaseCounter)
            ),
            div(...list)
        );
}

function huiCounter() {
    newApp(counter);
}
