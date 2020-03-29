# React Starter

This is an opinionated starter-kit for quickly bootstrapping client-side [React](https://reactjs.org/) projects written in [TypeScript](https://www.typescriptlang.org/).

## Structure

### src/

This folder houses our app files and logic.

### dist/

This folder outputs a production-optimized **static build** of our app. It's generated from [src/index.tsx](src/index.tsx).

### node_modules/

This folder contains all of the app's dependencies which are defined in [package.json](package.json)'s `dependencies` & `devDependencies` fields.

## Progressive Web App (PWA)

[Progressive Web Apps (PWA)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) are supported through a **Service Worker** which is present in this starterkit. It's powered by [Google's Workbox](https://developers.google.com/web/tools/workbox) via its [workbox-webpack-plugin](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin). The [`src/service-worker.ts`](src/service-worker.ts) will be enriched and copied to `dist/sw.js` by `workbox-webpack-plugin`'s `InjectManifest()` which can be found in [webpack.config.ts](webpack.config.ts). The registration of the **Service Worker** happens in [src/index.tsx](src/index.tsx).

## Open Graph

Some [Open Graph meta-tags](https://ogp.me/) are present in [src/index.html](src/index.html) to make sure your app will look nice when it's shared on Facebook & Twitter.

The images that are used on Facebook & Twitter can be found in `src/images/open-graph/`.

- Facebook: [src/images/open-graph/facebook.open-graph.png](src/images/open-graph/facebook.open-graph.png)
- Twitter: [src/images/open-graph/twitter.open-graph.png](src/images/open-graph/twitter.open-graph.png)

Make sure to respect the following filename pattern:

- `{facebook|twitter}.open-graph.{png|jpg|jpeg}`.

Why? We want to exclude these images in our Service Worker. All images ending with `.open-graph.{png|jpg|jpeg}` will be ignored.

Check out the `exclude`-field in `InjectManifest()` which can be found in [webpack.config.ts](webpack.config.ts).

## Configurations

### webpack ([webpack.config.ts](webpack.config.ts))

[webpack](https://webpack.js.org/) is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.

### TypeScript ([tsconfig.json](tsconfig.json))

[TypeScript](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) is a typed superset of JavaScript that compiles to a backwards compatible version of JavaScript in current and older browsers or environments.

### Styling

[Emotion](https://emotion.sh/) is a CSS-in-JS library designed for writing css styles with JavaScript. It allows you to style apps quickly with string or object styles. [`@emotion/styled`](https://emotion.sh/docs/@emotion/styled) is used whose API is heavily inspired from [`styled-components`](https://www.styled-components.com/).

### Testing

[Jest](https://jestjs.io/) is a JavaScript Testing Framework with a focus on simplicity. It's configured in [jest.config.json](jest.config.json).

### Linting

[ESLint](http://eslint.org/) is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. It is configured in [.eslintrc.json](.eslintrc.json). Specific files & folders can be ignored by adding them to [.eslintignore](.eslintignore).

[EditorConfig](https://editorconfig.org/) helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs. It is configured in [.editorconfig](.editorconfig).

[stylelint](https://stylelint.io/) is a tool that reports bad code in your CSS files. It helps to enforce the consistent code and prevents you from making errors in your stylesheets. It is configured in [.stylelintrc.json](.stylelintrc.json). Specific files & folders can be ignored by adding them to [.stylelintignore](.stylelintignore).

### Pre-commit hooks

[Husky](https://github.com/typicode/husky) makes it easy to set up Git hooks. It's configured in [.huskyrc.json](.huskyrc.json).

[Prettier](https://prettier.io/) is an opinionated code formatter which is configured in [.prettierrc.json](.prettierrc.json). Specific files & folders can be ignored by adding them to [.prettierignore](.prettierignore).

[Pretty Quick](https://github.com/azz/pretty-quick) runs Prettier on your changed files when Git's `pre-commit` hook is triggered.

The combination of `husky`, `prettier` & `pretty-quick` makes sure that commits are clean so our code-base stays consistent.

### Git

[.gitignore](.gitignore) file specifies intentionally untracked files that Git should ignore. Files already tracked by Git are not affected.

## Dependency management

[Renovate](https://renovate.whitesourcesoftware.com/) facilitates automated dependency updates. Make sure to [configure renovate for your project](https://github.com/apps/renovate) if you want to use it. The local project configuration can be found in [.renovaterc.json](.renovaterc.json).
