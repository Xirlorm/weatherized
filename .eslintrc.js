module.exports = {
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["eslint:recommended", "plugin:prettier/recommended"],
    "plugins": ["prettier"],
    "rules": {
        "no-console": "off",
        "indent": ["error", 2],
        "prettier/prettier": "error"
    }
}
