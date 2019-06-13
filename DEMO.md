## Demo steps during presentation

There are 2 ways to approach the initial creation of a PWA. one by using the Angular CLI, the other using the Angular Console (either as a plugin for VS code or directly as Windows client).

### Prerequisites 
- Windows 10 focussed only during this demo!
- http-server / lite-server
- Angular CLI (tested with version; 7.3.6)

````
npm install -g http-server (OR lite-server)
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





