# MyFirstProject

To run angular app:

	npm install --legacy-peer-deps && npm start
	ng serve

To make you angular app responsive and CSS stype use bootsrap with Angular:
 
	npm install bootstrap

    package.json will add this after install
      "bootstrap": "^5.3.2",
  
	
Install jquery you will see this all in package.json file automatically :

	npm install jquery	
    package.json will add this after install
      "jquery": "^3.7.1",

To generate new component      

    ng generate component mycomponent/todo

    *.spec.ts files are for test cases
 To generate new component         
 
myFirstAngularUIapp> ng generate component mycomponent/todo-items

    CREATE src/app/mycomponent/todo-items/todo-items.component.html    -----------------------------> HTML 
    CREATE src/app/mycomponent/todo-items/todo-items.component.spec.ts -----> For test cases
    CREATE src/app/mycomponent/todo-items/todo-items.component.ts      -----------------------------> Logic typescript 
    CREATE src/app/mycomponent/todo-items/todo-items.component.css     -----> CSS
    
    But only 2 files are HTML and .ts we are modifying most of the time as beginner. Change to .ts are auto populated to HTML using {{Object}}     

How to deploy/packge angular app
    ng build --prod
Command will package your angular app and now you can deploy it any server/container.
     
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
