# eslint-plugin-nowlint

plugin to link codeing errors

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-nowlint`:

```
$ npm install eslint-plugin-nowlint --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-nowlint` globally.

## Usage

Add `nowlint` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "nowlint"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "nowlint/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





