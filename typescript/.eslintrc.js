module.exports = {
    env: {
        node: true,
        browser: true,
    },

    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },

    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
    plugins: ["@typescript-eslint"],

    ignorePatterns: ["dist/**"],

    rules: {
        "@typescript-eslint/no-var-requires": "off",
    },
};
