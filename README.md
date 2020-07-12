## Step by Step frontend app creation
- `yarn init -y` for custom create
- `yarn add parcel-bundler -D`
- `yarn add react react-dom`
- `yarn add prettier`
- `command on terminal yarn format`
- ` "scripts": {
    "start": "parcel index.html",
    "format": "prettier --write app.js" 
    "format": "prettier --write \"src/**/*.{js, jsx}\"
  }`
- move script file into src folder - `"format": "prettier --write \"src/app.js\""`
- `"format": "prettier --write \"src/**/*.{js, jsx}\""`
- `yarn start`

### Eslint configure 

- `yarn add eslint -D`
- `yarn eslint`
- `yarn eslint --init` choose `To check syntax and find problems` then `Javascript modules (import/export)` then `React` `browser node` `JSON` `eslint-plugin-react@latest` install yes
- if problem to install manually then run command into terminal `yarn add eslint-plugin-react -D`
- add package.json file into script `"lint": "eslint \"src/**/*.{js,jsx}\""`
- check eslint `yarn lint`
- for warning remove for eslint into `.eslintrc.json` file `"extends": [
        "eslint:recommended",
        "plugin: import/errors",
        "plugin:react/recommended"
    ],
"plugins": [
        "react", "import", "jsx-a11y"
    ],
"settings": {
        "react": {
            "version": "detect"
        }

`
- `yarn add eslint-plugin-jsx-a11y -D`  (https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
- `yarn add eslint-plugin-import -D` (https://www.npmjs.com/package/eslint-plugin-import)
- `yarn add eslint-config-prettier - D` (https://www.npmjs.com/package/eslint-config-prettier)


- or `npm i -g create-react-app`
- Step 1 : `create-react-app react-practice`
- Step 2 : `create css folder and added style.css file`
- Step 3 : `import style.css & js script` file into `public > index.html` file
- Step 4 : `Create single Component like Skills`


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
