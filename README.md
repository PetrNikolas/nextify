# Nextify

Smart and simple Next.js starter kit for complex apps based on React.

## Main libs

 - Next.js
 - React
 - Ant Design
 - Prettier
 - LESS, PostCSS
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
yarn export
```

## Tests

```bash
# Tests with Jest and Enzyme
yarn test
yarn test:watch
yarn test:coverage
```

## With Docker

### How to use

#### Using `create-next-app`

Execute [`create-next-app`](https://github.com/segmentio/create-next-app) with [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) or [npx](https://github.com/zkat/npx#readme) to bootstrap the example:

```bash
npx create-next-app --example with-docker with-docker-app
# or
yarn create next-app --example with-docker with-docker-app
```

#### Download manually

Download the example:

```bash
curl https://codeload.github.com/zeit/next.js/tar.gz/canary | tar -xz --strip=2 next.js-canary/examples/with-docker
cd with-docker
```

Build it with docker:

```bash
# build
docker build -t next-app .
# or, use multi-stage builds to build a smaller docker image
docker build -t next-app -f ./Dockerfile.multistage .
```

Run it:

```bash
docker run --rm -it \
  -p 3000:3000 \
  -e "API_URL=https://example.com" \
  next-app
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
now --docker -e API_URL="https://example.com"
```

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
