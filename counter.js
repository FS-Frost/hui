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

    function resetCounter() {
        count = 0;
        render();
    }

    function generateList(count) {
        let list = [];

        for (let i = 1; i <= count; i++) {
            list.push(p(`${i > 1 ? "," : ""}${i}`));
        }

        for (let i = -1; i >= count; i--) {
            list.unshift(p(`${i}${i < -1 ? "," : ""}`));
        }

        return list;
    }

    return div()
        .$class("m-5")
        .$append(
            div(
                h1("hui demo").$class("title is-1 mb-1"),
                p("Reactive HTML UI framework for simple web applications"),
                a("(hui source code)").$href("hui.js").$target("_blank")
            ),
            div(
                h1("hui component").$class("title is-3 mt-3 mb-1"),
                a("(Source code)").$href("counter.js").$target("_blank"),
                p(`Count: ${count}`),
                button("+").$class("button is-success mr-1").$onClick(increaseCounter),
                button("-").$class("button is-danger mr-1").$onClick(decreaseCounter),
                button("Reset").$class("button is-info mr-1").$onClick(resetCounter)
            ),
            div(...generateList(count)).$class("list")
        );
}

function huiCounter() {
    newApp(counter);
}
