# API Auth

An example of API with containerized microservice

## Features

- CORS enabled
- Uses [yarn](https://yarnpkg.com)
- JSON Web Token [JWT]
- Express + MongoDB ([Mongoose](http://mongoosejs.com/))
- Consistent coding styles with [editorconfig](http://editorconfig.org)
- [Docker](https://www.docker.com/) support
- Uses [helmet](https://github.com/helmetjs/helmet) to set some HTTP headers for security
- Load environment variables from .env files with [dotenv](https://github.com/rolodato/dotenv-safe)
- Request validation with [joi](https://github.com/hapijs/joi)
- Gzip compression with [compression](https://github.com/expressjs/compression)
- Linting with [eslint](http://eslint.org)
- Tests with [mocha](https://mochajs.org), [chai](http://chaijs.com) and [sinon](http://sinonjs.org)
- Code coverage with [istanbul](https://istanbul.js.org) and [coveralls](https://coveralls.io)
- Git hooks with [husky](https://github.com/typicode/husky)
- API documentation geratorion with [apidoc](http://apidocjs.com)
- Monitoring with [pm2](https://github.com/Unitech/pm2)

## Requirements

- [Node v7.6+](https://nodejs.org/en/download/current/) or [Docker](https://www.docker.com/)
- [Yarn](https://yarnpkg.com/en/docs/install)

## Getting Started

#### Clone the repo:

```bash
git clone --depth 1 https://github.com/devangelmotta/auth-microservice.git <ANY_FRIENDLIER_NAME>
cd <ANY_FRIENDLIER_NAME>
```

#### Install dependencies:

```bash
yarn
```

## Running Locally

```bash
yarn dev
```

## Running in Production

```bash
yarn start
```

## Lint

```bash
# lint code with ESLint
yarn lint

# try to fix ESLint errors
yarn lint:fix

# lint and watch for changes
yarn lint:watch
```

## Test

```bash
# run all tests with Mocha
yarn test

# run unit tests
yarn test:unit

# run integration tests
yarn test:integration

# run all tests and watch for changes
yarn test:watch

# open nyc test coverage reports
yarn coverage
```

## Validate

```bash
# run lint and tests
yarn validate
```

## Logs

```bash
# show logs in production
pm2 logs
```

## Documentation

```bash
# generate and open api documentation
yarn docs
```

## Docker

```bash
# run container locally
yarn docker:dev

# run container in production
yarn docker:prod

# run tests
yarn docker:test
```

## Deploy

Set your server ip:

```bash
DEPLOY_SERVER=127.0.0.1
```

Replace my Docker username with yours:

```bash
nano deploy.sh
```

Run deploy script:

```bash
yarn deploy
```

## License

[MIT License](README.md) - [@devangelmotta](https://github.com/devangelmotta/)
