# Boilerplate-Angular-UIRouter-Node-Express-Gulp
A Boilerplate for Angular1-UIRouter front end with Node/Express Backend that uses Gulp

To Run this Boilerplate, 
1. First run the shell script init.sh in your shell. This will transpile all files from ES6, creating dist folders inside Backend and Frontend.

2. Finally, run the server.js inside Backend/dist using 'node server.js' and your server will be up and running, listening at the default port specified in Backend/ServerEnv.js 

NOTE: Make all changes inside the src directories under Frontend and Backend. You can run 'sudo gulp' in your shell to constantly watch for changes. I also like to use nodemon, which keeps watching for changes in the transpiled file so you don't constantly need to restart your server upon changes. You may need to install nodemon using npm for this purpose.

The rest is simple enough to follow but if any troubles please bring it up in issues!
