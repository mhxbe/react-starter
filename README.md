# React Starter

This is an opinionated starter-kit for quickly bootstrapping [React](https://reactjs.org/) projects.

## Structure

### src/

This folder houses our app files and logic.

### dist/

This folder outputs a production-optimized **static build** of our app. It's generated from [src/index.js](src/index.js).

### node_modules/

This folder contains all of the app's dependencies which are defined in [package.json](package.json)'s `dependencies` & `devDependencies` fields.

## Configurations

### Webpack ([webpack.config.babel.js](webpack.config.babel.js))

@todo: add documentation

### Babel ([babel.config.js](babel.config.js))

@todo: add documentation

### Linting

[ESLint](http://eslint.org/) is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. It is configured in [.eslintrc.json](.eslintrc.json). Specific files & folders can be ignored by adding them to [.eslintignore](.eslintignore).

[lint-staged](https://github.com/okonet/lint-staged) runs linters on git staged files. It's configure in [.lintstagedrc.json](.lintstagedrc.json).

[EditorConfig](https://editorconfig.org/)
helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs. It is configured in [.editorconfig](.editorconfig).

### Pre-commit hooks

[Husky](https://github.com/typicode/husky) makes it easy to set up Git hooks. It's configured in [.huskyrc.json](.huskyrc.json).

[Prettier](https://prettier.io/) is an opinionated code formatter which is configured in [.prettierrc.json](.prettierrc.json). Specific files & folders can be ignored by adding them to [.prettierignore](.prettierignore).

The combination of `husky`, `prettier` & `lint-staged` makes sure that commits are clean so our code-base stays consistent.

### Git

[.gitignore](.gitignore) file specifies intentionally untracked files that Git should ignore. Files already tracked by Git are not affected.

### Dependency management

[Renovate](https://renovate.whitesourcesoftware.com/) facilitates automated dependency updates. Make sure to [configure renovate for your project](https://github.com/apps/renovate) if you want to use it. The local project configuration can be found in [.renovaterc.json](.renovaterc.json).
