# Nextify

Smart and simple Next.js starter kit for complex apps based on React.

## Main libs

 - Next.js
 - React
 - Ant Design
 - PostCSS
 - Jest & Enzyme
 - SEO & analytics

## Get started

```sh
yarn install
```

## Development build

```bash
# Development build with hot reloading
yarn dev
```

## Production build

#### Serve with server

```bash
# Build app for production
yarn build
```

#### Export static HTML

```bash
# Export static html to the out folder
yarn build
yarn export
```

## Tests

```bash
# Tests with Jest and Enzyme
yarn test
yarn test:watch
yarn test:coverage
```

## Configuration SEO, Sentry etc

* Set SEO & analytics variables: `globals/env.js`

## Ant Design documentation

* [Doc](https://ant.design/docs/react/introduce)

## Deploy to Now

[now](https://zeit.co/now) offers a zero-configuration single-command deployment.

1.  Install the `now` command-line tool either via the recommended [desktop tool](https://zeit.co/download) or via node with `npm install -g now`.

2.  Run `now` from your project directory. You will see a **now.sh** URL in your output like this:

    ```
    > Ready! https://your-project-dirname-tpspyhtdtk.now.sh (copied to clipboard)
    ```

    Paste that URL into your browser when the build is complete, and you will see your deployed app.

You can find more details about [`now` here](https://zeit.co/now).
