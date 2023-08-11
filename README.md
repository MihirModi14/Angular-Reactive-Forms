# Angular Reactive Forms

Here, I have covered `Angular Reactive Forms` which includes classes like `Form Control`, `Form Group` and `Form Array` to create form, Also convered `Form Builder` which create the instance of this classes.

#### This project contains four components listed below,
##### 1) app component
##### 2) form-control component
##### 3) form-group component 
##### 4) form-array component
app component is the root component and inside other components you can see the examples of different form class.

### ---------------------- Form Classes and Services ----------------------

`Form Control` - Class that represents a single input field of a form.
`Form Group` - Class that represents a collection of form controls that belong together as a single unit.
`Form Array` - Class that represents an array of form controls or from group.
`Form Builder` - Service that provides a convenient way to create instances of Form Group, Form Control, and Form Array objects.

#### Note : Below method and properties are implemented inside form-group component.
### ---------------------- Difference Between Set Value and patch Value ----------------------

`Set Value` - used to set the complete value of a form control or form group. This method expects the entire value of the control or group to be passed as an argument.

`Patch Value` - used to update the value of a form control or form group with a subset of the control or group's properties.

### ---------------------- Methods ----------------------

1) `addControl()` and `removeControl()` - add or remove control from form group
2) `disable()` - make form control disable
3) `getRawValue()` - get value of form control, which includes disabled field also
4) `reset()` - reset the form. (Note that if nonNullable property is set to true then only it will reset to the default value otherwise value will be null)
5) `markAllAsTouch()` - mark all the field as touched once triggered

### ---------------------- Conditional and Custom Validation ----------------------

I have created custom validator for using regex for validating firstName field.

Also implemented below methods of for modifying validators dynamically.
1) `setValidators` - replace previous validators with new validators
2) `addValidators` - add give validators to previous validators
3) `removeValidators` - remove given validators from previous validators
4) `clearValidators` - clear all the validators

### ---------------------- Form Events ----------------------

1) `ValueChanges` - event trigger when form control value changes
2) `StatusChanges` - event trigger when form control status changes (status contains INVALID, VALID, PENDING values)

##### --------- This is all about content of project, below you can find the configuration setting for the project --------

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.5.

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

## Contact

If you have any questions or suggestions, please feel free to reach out to me at:

- Email: mihir.modi@smartsensesolutions.com
- LinkedIn: [Mihir Modi](https://www.linkedin.com/in/mihir-modi-015124197/)

