let users = [
    { id: 1, name: "Alice Freeman", age: 28, mail: "alice@example.com" },
    { id: 2, name: "Bob Smith", age: 34, mail: "bob@example.com" },
];

let showForm = false;
let nextId = 3;

let formData = {
    name: "",
    age: "",
    mail: ""
};

function userTableApp() {
    function toggleForm() {
        showForm = !showForm;
        render();
    }

    function addUser() {
        if (formData.name && formData.age && formData.mail) {
            users.push({
                id: nextId++,
                name: formData.name,
                age: parseInt(formData.age),
                mail: formData.mail
            });
            formData = { name: "", age: "", mail: "" };
            showForm = false;
            render();
        } else {
            alert("Please fill all fields");
        }
    }

    function deleteUser(id) {
        users = users.filter(u => u.id !== id);
        render();
    }

    return div()
        .$class("m-5")
        .$append(
            div(
                h1("hui user manager").$class("title is-3 mb-1"),
                a("(Source code)").$href("userTable.js").$target("_blank"),
                p("Dynamic table example with row operations and forms.").$class("mb-5")
            ),
            div().$append(
                button(showForm ? "Cancel" : "Add New User")
                    .$class(`button ${showForm ? "is-warning" : "is-link"} mb-4`)
                    .$onClick(toggleForm)
            ),
            showForm ? div()
                .$class("mb-5")
                .$append(
                    div().$class("field").$append(
                        label("Full Name").$class("label"),
                        div().$class("control").$append(
                            input().$class("input")
                                .$placeholder("e.g. John Doe")
                                .$value(formData.name)
                                .$onInput((e) => formData.name = e.target.value)
                        )
                    ),
                    div().$class("field").$append(
                        label("Age").$class("label"),
                        div().$class("control").$append(
                            input().$class("input")
                                .$type("number")
                                .$placeholder("30")
                                .$value(formData.age)
                                .$onInput((e) => formData.age = e.target.value)
                        )
                    ),
                    div().$class("field").$append(
                        label("E-mail Address").$class("label"),
                        div().$class("control").$append(
                            input().$class("input")
                                .$type("email")
                                .$placeholder("john@example.com")
                                .$value(formData.mail)
                                .$onInput((e) => formData.mail = e.target.value)
                        )
                    ),
                    button("Add to table").$class("button is-success").$onClick(addUser)
                ) : div(),
            table()
                .$class("table is-fullwidth is-striped is-hoverable")
                .$append(
                    thead(
                        tr(
                            th("ID").$class("has-text-centered"),
                            th("Name"),
                            th("Age"),
                            th("Email"),
                            th("Actions").$class("has-text-centered")
                        )
                    ),
                    tbody(
                        ...users.map(user => 
                            tr(
                                td(user.id.toString()).$class("has-text-centered"),
                                td(user.name),
                                td(user.age.toString()),
                                td(user.mail),
                                td(
                                    button("Remove")
                                        .$class("button is-danger is-light is-small")
                                        .$onClick(() => deleteUser(user.id))
                                ).$class("has-text-centered")
                            )
                        )
                    )
                )
        );
}

function initUserTable(selector) {
    newApp(userTableApp, selector);
}

