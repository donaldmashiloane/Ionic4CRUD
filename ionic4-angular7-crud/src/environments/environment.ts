// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyDlyd_N9SWCLwe-FSENAWufOz4oZMxQZ1k",
    authDomain: "ionic4crud-da6e5.firebaseapp.com",
    databaseURL: "https://ionic4crud-da6e5.firebaseio.com",
    projectId: "ionic4crud-da6e5",
    storageBucket: "",
    messagingSenderId: "459393757760",
    appId: "1:459393757760:web:ac268ef29ee85b41"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
