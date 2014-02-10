# Voxa GSD

### Application Structure

	|-- index.html
	|-- index.php
    |   |-- css
    |		|-- base.css
    |   |-- js
    |		|-- app-start.js
    |		|-- app.js
    |		|-- router.js
    |		|-- collections
    |			|-- employee.js
    |			|-- features.js
    |		|-- models
    |			|-- employee.js
    |			|-- feature.js
    |		|-- views
    |			|-- employee.js
    |			|-- employees.js
    |			|-- feature.js
    |			|-- features.js
    
#### Callouts

1. index.php - This file exists simply to deploy the application to Heroku.
2. app-start.js - This file served as my local data since a backend API was not required for this app.
3. router.js & app.js - Routes the web app to two main views: "/team" and "/features". I defaulted the root route to show the features page similar to [Voxa's website](http://www.voxa.com).