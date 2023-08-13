J.A.T.E - Just Another Text Editor
    
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Tests](#tests)
* [Usage](#usage)
* [Contributing](#contributing)
* [Questions](#questions)

## Description
JATE was created as an assignment by UNC Coding Bootcamp using starter code provided. This app utilizes Express and Webpacks to create a database in which users add notes that display whether or not an internet connection is present.

Check out the app here and add a few notes!
https://pwa-text-editor-ja-te-1887c4658bde.herokuapp.com/

## Installation
In order to download this code from the repository, one must have a software such as VS Code or one that's similar. Along with VS Code, it is necessary to download Node.JS.

After downloading Node.JS, it is important to install the packages associated with this app in order to be able to access its full properties.

Before opening this app in VS Code, make sure to Git Clone this project otherwise all packages will have to be installed manually.

Begin by opening the terminal, and typing in "npm init -y" as this will set a basic package.json file. 

Now we can install everything by typing "npm install" and it will install the packages that have been installed into this app.

Lastly before we test this app, we can run "node server.js" or "npm start" in the terminal to connect to the server.

## Tests
Upon installing everything, this app is simply tested by just adding notes! However, the magic happens when we right-click and select "Inspect Element".

The following image shows a few notes being added:
![Demonstration of notes being added to JATE homepage.](./Assets/jate.png)

We can see that the same notes that were added show up in the app's own IndexedDB Storage:
![Demonstration of notes added to jate IndexedDB Storage.](./Assets/jatestorage.png)

This image shows the manifest.json file that was generated:
![Demonstration of manifest file.](./Assets/manifest.png)

This image shows the service workers:
![Demonstration of service workers.](./Assets/serviceworkers.png)

Check out the browser after adding your own notes in the app link here!
https://pwa-text-editor-ja-te-1887c4658bde.herokuapp.com/


## Usage
Anyone can use this app to create to-do lists or reminders or even take notes for school. This app is a very versatile app and can be used for any kind of notes as well as taking these notes with or without an internet connection.

## Contributing
Katrina Gucilatar with guidelines and starter code assigned by UNC Coding Bootcamp

## Questions
Contact me at the following for any questions: 
GitHub: https://github.com/katgucilatar  
Email: katgucilatar@outlook.com