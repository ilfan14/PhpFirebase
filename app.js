var admin = require("firebase-admin");

var serviceAccount = require("./private/nodejsproject-bd033-firebase-adminsdk-xo06r-b25fc48882.json");
var refreshToken; // Get refresh token from OAuth2 flow

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://nodejsproject-bd033.firebaseio.com",
    databaseAuthVariableOverride: {
        uid: "screet-id-auth-088"
    }
});

var db = admin.database();
var ref = db.ref("Users");


// retrive all value
// ref.on("value", function(snapshot) {
//     console.log(snapshot.val());
//     console.log("event value jalan");
// }, function (errorObject) {
//     console.log("The read failed: " + errorObject.code);
// });

ref.on("child_added", function(snapshot, prevChildKey) {
    var newPost = snapshot.val();
        console.log("Nama: " + newPost.nama)
        console.log("Alamat: " + newPost.alamat)
        console.log("Previous Post ID: " + prevChildKey)
        console.log("event child_added")
});