# Git Cheatsheet

[![Build Status](https://api.travis-ci.org/kmingulov/git-cheatsheet.svg?branch=master)](https://travis-ci.org/kmingulov/git-cheatsheet)
[![Code Coverage](https://codecov.io/gh/kmingulov/git-cheatsheet/branch/master/graph/badge.svg)](https://codecov.io/gh/kmingulov/git-cheatsheet/)

Interactive comprehensive cheatsheet for the popular version control system [Git](https://git-scm.com/).

**Note.** Work on this project is currently in progress, and not all planned Git commands are added to the cheatsheet.
Star the repo and stay tuned for the updates!

## Build & Run

Make sure you have [node](https://nodejs.org) installed.
Then clone the repo and install all dependencies:

```shell
git clone https://github.com/kmingulov/git-cheatsheet.git
cd git-cheatsheet
npm install
```

### Production build

To run the cheatsheet in **production** mode, install `serve` (`npm install serve -g`) and run:

```shell
npm run build
serve -s build
```

The cheatsheet will be accessible under [http://localhost:5000]().

### Development build

To run the cheatsheet in **development** mode, simply execute:

```shell
npm start
```

The cheatsheet will be available under [http://localhost:3000]().
If you make any changes to the code, it will be recompiled and the server will be restarted.

## Submitting a PR

If you think Git Cheatsheet could be improved, fork the repo and submit a pull-request!

Please note that we use [Travis](https://travis-ci.org/kmingulov/git-cheatsheet) and [Codecov](https://codecov.io/gh/kmingulov/git-cheatsheet/) to track build health.
That said, please run `npm lint` and `npm test` to make sure that your changes follow our code style and don't break any tests.