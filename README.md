# wallaby-js-session

## Prerequisites
1. Install [Node.js](http://nodejs.org)
	- on OSX use [homebrew](http://brew.sh) `brew install node`
	- on Windows use [chocolatey](https://chocolatey.org/) `choco install nodejs`

2. Install these NPM packages globally
```
npm install -g gulp typescript typings ts-node
```

## Dependencies
1. Navigate to your project folder to install all dependencies
```
npm install
typings install
```

## Scripts / Commands

| Scripts from package.json | Description   |
|:------------------------- |:------------- |
| `npm install`             | Installs all the dependencies and all the typings |
| `npm run start`           | Starts a local server and watches for changes to rebuild the app |
| `npm run test`            | Runs all written unit-tests |

