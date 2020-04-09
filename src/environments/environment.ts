// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Environment } from './environment.interface';

export const environment: Environment = {
  production: false,
  apiKeyFB: 'AIzaSyD6KbKkaLkOmyAIC7EorHmMqUtPR8I-_uU',
  apiKeyYT: 'AIzaSyC1A3p46pdcXqAgl2nRCc6u7i3apegwI8o',
  apiUrlFB: 'https://identitytoolkit.googleapis.com/v1/accounts:',
  apiUrlYT: 'https://www.googleapis.com/youtube/v3/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
