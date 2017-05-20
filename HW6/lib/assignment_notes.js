// routes.js

// This exposes the MongoDB methods. 

// will invoke your model, instead of the methods, in the get, delete, etc. 

// asynchronous method. 

// find methid will have a callback function. The template rendering will be wrapped in that callback. 

// new version of this is in lib/lead.js. 

// lib/routes.js is the model I should use, they used models/lead.js as a model. 

// routes.js will be the index.js. 

// On school, can only connect via my wireless hotspot, and then not in the Tutoring Lab.

/* To connect to the mongo db via mLab: 
1. connect to either an unblocked wifi or to my phone via the hotspot. 
2. input this line in the terminal: mongo ds133231.mlab.com:33231/spinifex -u spinifex1 -p Mlabraigi1!
3. Now, you should be able to connect! Might get a timeout error; if so, move. 
*/ 

/* REST API - good to have on the resume. Server exposes some functionality. Stateless connection between client and server. 
more info: https://en.wikipedia.org/wiki/Representational_state_transfer

*/ 