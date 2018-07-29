# play-with-webpack

This repo is to play with webpack and understand its important take-aways and to explore various techniques in simplifying the builds.

## steps to run webpack

* Clone/Download this repo
* Install webpack locally in your current project directory with this command - `npm install -S webpack`
* Install webpack globally - `npm install -g webpack`
* You have to install the webpack-cli for running webpack commands from your terminal or command prompt. For that - `npm install webpack-cli -g`
* Now, you are almost ready for working with webpack
* You need a config file in your project root which sets all the configuration for your webpack. So, create a file `webpack.config.js`. (In this repo this file already exists with basic config set).
* You can run webpack without having a config file as defined above. But you have to run a command like this `webpack <input-file-name-with-location> <output-file-name-with-location>` ex: `webpack './scripts.js' 'scripts.min.js'`
* Going forward, we might be having a lot of complexity involved in building the code depending on many factors. So, better make a `webpack.config.js` file instead of manually running above mentioned command.
* Now, run the command `webpack` from your project root directory.