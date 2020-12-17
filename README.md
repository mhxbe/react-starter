# React Starter

![David](https://img.shields.io/david/mhxbe/react-starter)
![David](https://img.shields.io/david/dev/mhxbe/react-starter)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=mhxbe_react-starter&metric=alert_status)](https://sonarcloud.io/dashboard?id=mhxbe_react-starter)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=mhxbe_react-starter&metric=coverage)](https://sonarcloud.io/dashboard?id=mhxbe_react-starter)
[![GitHub](https://img.shields.io/github/license/mhxbe/react-starter)](https://github.com/mhxbe/react-starter/blob/master/LICENSE)

This is an opinionated starter kit for quickly bootstrapping client-side [React](https://reactjs.org/) projects written in [TypeScript](https://www.typescriptlang.org/).

A demo of this starter kit can be found on [https://react-starter.mhx.be](https://react-starter.mhx.be).

## Installation

```bash
git clone git@github.com:mhxbe/react-starter.git
npm install
```

## Usage

### Development server

```bash
npm start
```

### Production build

```bash
npm run build
```

## Structure

### src/

This folder houses our app files and logic.

### dist/

This folder outputs a production-optimized **static build** of our app. It's generated from [src/index.tsx](src/index.tsx).

### node_modules/

This folder contains all of the app's dependencies which are defined in [package.json](package.json)'s `dependencies` & `devDependencies` fields.

## Progressive Web App (PWA)

[Progressive Web Apps (PWA)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) are supported through a **Service Worker** which is present in this starterkit. It's powered by [Google's Workbox](https://developers.google.com/web/tools/workbox) via its [workbox-webpack-plugin](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin). The [`service-worker.ts`](service-worker.ts) will be enriched and copied to `dist/sw.js` by `workbox-webpack-plugin`'s `InjectManifest()` which can be found in [webpack.config.ts](webpack.config.ts). The registration of the **Service Worker** happens in [src/index.tsx](src/index.tsx).

## Routing

[React Router](https://github.com/ReactTraining/react-router) is a collection of navigational components that compose declaratively with your application. This enables us to use routing in our SPA.

We're using a [public/.htaccess](public/.htaccess) file to implement a "Catch All" approach so we can use nice URLs. If you're not using apache but nginx for example, make sure to add rewrites in your config.
If you don't want to use these kind of configurations in your app, you're free to use React Router's [HashRouter](https://reactrouter.com/web/api/HashRouter).

## SEO (react-helmet)

[React Helmet](https://github.com/nfl/react-helmet) is a document head manager for React. This way we can dynamically set meta-tags, title, ... in the document head.

There's a caveat. Every React "Page"-component must make use of a `<Helmet>` to set the **description** meta-tag. This meta-tag is not present in [public/index.html](public/index.html) so each page is responsible for rendering one.

## Open Graph

Some [Open Graph meta-tags](https://ogp.me/) are present in [public/index.html](public/index.html) to make sure your app will look nice when it's shared on Facebook & Twitter.

The images that are used on Facebook & Twitter can be found in `src/images/open-graph/`.

- Facebook: [public/images/open-graph/facebook.open-graph.png](public/images/open-graph/facebook.open-graph.png)
- Twitter: [public/images/open-graph/twitter.open-graph.png](public/images/open-graph/twitter.open-graph.png)

Make sure to respect the following filename pattern:

- `{facebook|twitter}.open-graph.{png|jpg|jpeg}`.

Why? We want to exclude these images in our Service Worker. All images ending with `.open-graph.{png|jpg|jpeg}` will be ignored.

Check out the `exclude`-field in `InjectManifest()` which can be found in [webpack.config.ts](webpack.config.ts).

## Configurations

### webpack ([webpack.config.ts](webpack.config.ts))

[webpack](https://webpack.js.org/) is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.

### TypeScript ([tsconfig.json](tsconfig.json))

[TypeScript](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) is a typed superset of JavaScript that compiles to a backwards compatible version of JavaScript in current and older browsers or environments.It's configured in [tsconfig.json](tsconfig.json)

### Styling

[Emotion](https://emotion.sh/) is a CSS-in-JS library designed for writing css styles with JavaScript. It allows you to style apps quickly with string or object styles.

### Multilinguality

[react-i18next](https://react.i18next.com/) is a powerful internationalization framework for React / React Native which is based on [i18next](https://www.i18next.com/).

It uses translation-files in json format which can be found in [public/locales](public/locales). It's configured in [src/config/i18n.ts](src/config/i18n.ts).

### Testing

[Jest](https://jestjs.io/) is a JavaScript Testing Framework with a focus on simplicity. It's configured in [jest.config.json](jest.config.json).

[React Testing Library](https://testing-library.com/react) is a very light-weight solution for testing React components. It provides light utility functions on top of react-dom and react-dom/test-utils, in a way that encourages better testing practices.

### Linting

[ESLint](http://eslint.org/) is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. It is configured in [.eslintrc.json](.eslintrc.json). Specific files & folders can be ignored by adding them to [.eslintignore](.eslintignore).

[EditorConfig](https://editorconfig.org/) helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs. It is configured in [.editorconfig](.editorconfig).

[stylelint](https://stylelint.io/) is a tool that reports bad code in your CSS files. It helps to enforce the consistent code and prevents you from making errors in your stylesheets. It is configured in [.stylelintrc.json](.stylelintrc.json). Specific files & folders can be ignored by adding them to [.stylelintignore](.stylelintignore).

[Browserslist](https://github.com/browserslist/browserslist) shares target browsers versions between different front-end tools.
Currently it's used in combination with [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat) which will give linting errors/warnings when non-compatible code is written.

### Pre-commit hooks

[Husky](https://github.com/typicode/husky) makes it easy to set up Git hooks. It's configured in [.huskyrc.json](.huskyrc.json).

[Prettier](https://prettier.io/) is an opinionated code formatter which is configured in [.prettierrc.json](.prettierrc.json). Specific files & folders can be ignored by adding them to [.prettierignore](.prettierignore).

[Pretty Quick](https://github.com/azz/pretty-quick) runs Prettier on your changed files when Git's `pre-commit` hook is triggered.

The combination of `husky`, `prettier` & `pretty-quick` makes sure that commits are clean so our code-base stays consistent.

### Sonar

[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=mhxbe_react-starter&metric=bugs)](https://sonarcloud.io/dashboard?id=mhxbe_react-starter)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=mhxbe_react-starter&metric=code_smells)](https://sonarcloud.io/dashboard?id=mhxbe_react-starter)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=mhxbe_react-starter&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=mhxbe_react-starter)

[SonarCloud](https://sonarcloud.io) is an open source cloud platform for continuous inspection of code quality to perform automatic reviews with static analysis of code to detect bugs, code smells, and security vulnerabilities. It is configured in [sonar-project.properties](sonar-project.properties).

A Github Action is used to generate a `test-report.xml` in [Sonar's Generic Test Data](https://docs.sonarqube.org/latest/analysis/generic-test) and upload it to SonarCloud. It is configured in [.github/workflows/sonarcloud.yml](.github/workflows/sonarcloud.yml).

For this project, the **Sonar way recommended** Quality Profile is used.

### Git

[.gitignore](.gitignore) file specifies intentionally untracked files that Git should ignore. Files already tracked by Git are not affected.

## Dependency management

[Renovate](https://renovate.whitesourcesoftware.com/) facilitates automated dependency updates. Make sure to [configure renovate for your project](https://github.com/apps/renovate) if you want to use it. The local project configuration can be found in [.renovaterc.json](.renovaterc.json).

## License

This project is open source and available under the [MIT License](LICENSE).
