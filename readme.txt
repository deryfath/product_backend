A. HOW TO MAKE API

1. download and install node.js package
2. make folder project in your directory and run command : npm init, and then npm install express --save
3. create google cloud account and make project using google function cloud API
4. download and install google cloud sdk and follow installation until finish, after that, will show command prompt which will asking for google account for google cloud api, and then choose project that you make before.
5. follow instruction from this tutorial for further information : https://itnext.io/google-cloud-functions-node-js-and-express-aea4a2a9ba3a

B. HOW TO MAKE API EFFECTIVE AND EFFICIENT

1. for data query, just select important field when join table to improve response performance
2. for response data, one api can handle one flow UI process till process resend back.
3. for url suffix naming, use the module name first to prevent misuse.

C. HOW TO SECURE THE API
1. using oauth2.0 when using google platform login to get access token and put as header authorization api
2. using basic authentication, access token generated inside backend, when user first login, backend will make generated access token will save in database, and resend back to user as a response, and it will use as header authorization. 