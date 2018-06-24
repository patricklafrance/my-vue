// *** IMPORTANT: Everytime you change a rule, restart VSCode ***
module.exports = {
    root: true,
    parserOptions: {
        parser: "babel-eslint"
    },
    env: {
        node: true,
        browser: true,
        es6: true
    },
    extends: ["plugin:vue/essential", "eslint:recommended", "eslint-config-prettier"],
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
    }
};
