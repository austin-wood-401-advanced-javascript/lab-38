# lab-38 Author: Austin Wood

### What this app does: 
* Based on user id and password displays and gives functional access to only pieces of the application that the user has access to.
* Also allows the user to make a todo list if they have a valid username and password. 


#### Roles: 
* user
* editor
* admin


[Code Sandbox](https://codesandbox.io/s/class-34-starter-code-todo-4uqc4)

#### Whats in the works? 
* In the process of switching all context based state over to redux global state. 
* This is being done by moving all state dependent information to the store.js file and replacing all function calls with dispatchers. 
* Also working on using applyMiddleware to allow thunk to handle our asyncrenous calls to get our data. 

### Dependencies: 
* react
* react-dom
* react-jsonschema-form
* react-router-dom
* react-scripts
* uuid
* react-cookies 
* jsonwebtoken
* react-redux
