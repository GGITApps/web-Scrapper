const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.cupo= functions.https.onRequest((req,res)=>{
    let nrc = req.query.nrc;
    let prefix = req.query.prefix;
    res.send(`has ingresado NRC:${nrc} y prefijo ${prefix}`);

})