# HUI

Reactive HTML UI renderer for simple layout web applications.

## Usage

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Counter</title>
        <script src="./hui.js"></script>
    </head>

    <body>
        <div id="app"></div>

        <script>
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

            newApp(counter);
        </script>
    </body>
</html>
```
