    var firebaseConfig = {
   apiKey: "AIzaSyC2uNPUUGybA4x6eMfFKF9dxEXHzqP7ov8",
  authDomain: "signup-5da45.firebaseapp.com",
databaseURL: "https://signup-5da45-default-rtdb.firebaseio.com",
  projectId: "signup-5da45",
  storageBucket: "signup-5da45.appspot.com",
  messagingSenderId: "396460310259",
  appId: "1:396460310259:web:81cab7947896559a2e8186",
  measurementId: "G-3EQEZ96QEE"
};
   firebase.initializeApp(firebaseConfig);
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

  var datab = firebase.database().ref('forms');
  function UserRegister(){
      var email = document.getElementById('eemail').value;
      var password = document.getElementById('lpassword').value;
      firebase.auth().createUserWithEmailAndPassword(email.value,password.value).then(function(){

      }).catch(function (error) {
          var errorcode = error.code;
          var errormsg = error.message;
      });
    }
    const auth = firebase.auth();
    function SignIn(){
        var email = document.getElementById('eemail').value;
        var password = document.getElementById('lpassword').value;
        const promise = auth.signInWithEmailAndPassword(email.value,password.value);
        promise.catch( e => alert(e.msg));
            window.open("https://www.youtube.com/watch?v=lgEXfCNAexw","_self");
    }
  document.getElementById('form').addEventListener("submit", (e) => {
e.preventDefault();
var userInfo = datab.push();
userInfo.set({
    name: getId("fname"),
    email : getId("eemail"),
    password : getId('lpassword')
});
alert("Sucessfully Sent");
console.log('Sent');
document.getElementById('form').reset();
});
function getId(id){
    return document.getElementById(id).value;
}