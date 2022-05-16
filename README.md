# Code Retreat JavaScript Skeleton

## Installation

First, install [Node.js](http://nodejs.org/), if you don’t have it. You can use [NVM](https://github.com/nvm-sh/nvm) to ensure you have the expected version.

Then, run

```
$ npm install
```

in the repository directory.

You can confirm it’s working by running:

```
$ npm test
```

## Writing Tests

This primer uses [Jest](https://jestjs.io/). The project website has good and consice documentation about how it works.

The game of life code is short enough so that it’s fine if we write both the code and the tests in the same file.

## Running Tests

```
$ npm test
```

Or watch tests for changes with:

```
npm test:watch
```

## Starting a New Session

Deleting code is hard on the mind, but not hard on the console. Just run:

```
$ npm run-script reset
```

**WARNING:** This will **permanently** delete all modifications after the previous commit.
