# AntisocialNetworkFrontend
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses an [Express](http://www.react.express/) backend. The package manager used is NPM.

## Running the app (production mode)

To run the app in production mode, enter `npm run-script build` followed by `npm start`:

### `npm run-script build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm start`

Runs the app in production mode. Use after `npm run-script build`.<br />
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.<br />

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Help me!

### `npm start` doesn't work

Delete the `build` folder and then run `npm run-script build`. Now try `npm start` again.

### Troubleshooting Heroku deployment errors

Heroku deployment is finicky. Try these steps if you see error messages despite a successful build.<br />
First, ensure you are running the app in production mode. To do so, go to `package.json` and check that `scripts` matches the following:

```javascript
"scripts": {
    "start": "node server.js",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

If `"start": "react-scripts start"`, you are in development mode. Please change it to `"start": "node server.js"`.

If you are still seeing errors on Heroku, there might be errors in `package-lock.json`. To fix this, do a fresh install of `npm` in `antisocial-webapp` by running the following in terminal once you are in the `antisocial-webapp` directory:
```
rm -r node_modules
rm package-lock.json
npm install
npm add express express-favicon path
```
Now push to Git (Heroku branch) and try deploying to Heroku again.

### Documentation

See [React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, see [React documentation](https://reactjs.org/).