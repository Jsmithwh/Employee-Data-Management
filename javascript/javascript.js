var config = {
    apiKey: "AIzaSyAwYpagUwzjZTgD81AQLfG7htCRExdfXNI",
    authDomain: "saturday-data-form.firebaseapp.com",
    databaseURL: "https://saturday-data-form.firebaseio.com",
    projectId: "saturday-data-form",
    storageBucket: "saturday-data-form.appspot.com",
    messagingSenderId: "388883978030"
  };
  firebase.initializeApp(config);

var db = firebase.database();
var formRef = db.ref("/message");

$("#submit-form").click(function (event) {
event.preventDefault()
   var name = $("#employee-name").val();
   var role = $("#role").val();
   var startYear = $("#start-year").val();
   var rate = $("#monthly-rate").val();
   formRef.push({
       name: name,
       role: role,
       startYear: startYear,
       rate: rate
   });
   console.log(name);
   console.log(role);
   console.log(startYear);
   console.log(rate);
})



// messageRef.on('child_added', function (data) {
//    // addCommentElement(postElement, data.key, data.val().text, data.val().author);
//    var message = data.val().text;
//    var messageElement = $("<p>").text(message);
//    $("#message-container").append(messageElement);
// });