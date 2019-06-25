## Demo steps during presentation

There are 2 ways to approach the initial creation of a PWA. one by using the Angular CLI, the other using the Angular Console (either as a plugin for VS code or directly as Windows client).

### Prerequisites 
- Windows 10 focussed only during this demo!
- http-server / lite-server (optional)
- Angular CLI (tested with version; 7.3.6)

````
npm install -g http-server (OR lite-server, is not required)
npm install -g @angular/cli
````

> Note; you can check if you've previously installed the CLI by typing 'ng -v' of 'ng version' in command line.

### Angular CLI
To start creating an Angular app as PWA start by using the following steps.

- Create a new Angular project
````
ng new <name>
````

- Navigate into the created application
````
cd <name>
````

- Add Angular PWA Schematic (about schematics; https://blog.angular.io/schematics-an-introduction-dc1dfbc2a2b2)
````
ng add @angular/pwa --project <name>
````
> Note; the --project flag is needed to correctly configure and install the PWA schematics. The service worker will be registering the given project (https://github.com/angular/angular-cli/issues/12914). 

Basically all stuff is now done to transform your new Angular App into a PWA.

- Show added files and dependencies. The service worker and manifest.

- To run the application as PWA you need to use a production build and make use of lite-server or http-server.
````
ng build --prod
cd dist/<name>
lite-server (will run by default on 3000)
````
> Note; It's actually one of the requested features to let the Service worker work correctly with ng serve --prod; https://github.com/angular/angular-cli/issues/9869.

- To run the application on HTTPS using ng serve is also possible
````
ng serve --prod --ssl=true
````

### Angular Console
Due to a bug in the latest version, it is not possible yet to do the creation with the Angular Console; https://github.com/nrwl/angular-console/issues/719. Nevertheless, it is possible to add the VS Code plugin; https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console.

A new project can be created on the same way explained with the CLI.

### Validation

To validate if the app is an PWA, we make use of Lighthouse (https://developers.google.com/web/tools/lighthouse/), a tool from the Google Chrome team that basiccaly audits the application ran in the web on certain standards to comply to be a PWA application. 

For one of the above created applications, here is an example of how the audits looks before and after adding the Angular PWA schematics.

<table>
  <tr>
    <td>
      <p>Before;</p>
    </td>
    <td>
      <p>After;</p>
    </td>  
  </tr>
  <tr>
    <td>
      <img src="https://raw.githubusercontent.com/lmeijdam/rs-pwa-angular-demo/master/images/ngaudit_nopwa.PNG" width="500">
    </td>
    <td>
      <img src="https://raw.githubusercontent.com/lmeijdam/rs-pwa-angular-demo/master/images/ngaudit_pwa.PNG" width="500">
    </td>  
  </tr>
</table>

### Service Worker
To see the Service Worker ; https://blog.ng-book.com/service-workers-and-angular/ 
https://medium.com/google-developer-experts/a-new-angular-service-worker-creating-automatic-progressive-web-apps-part-2-practice-3221471269a1

