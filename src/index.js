import toastr from 'toastr';

document.addEventListener("DOMContentLoaded", () => {

    toastr.options = {
        "debug": false,
        "positionClass": "toast",
        "onclick": null,
        "fadeIn": 300,
        "fadeOut": 1000,
        "timeOut": 5000000,
        "extendedTimeOut": 100000
      }
    function writeUserData(name, email, comment) {
        firebase.database().ref('submitters/' + name).set({
          name: name,
          email: email,
          comment: comment
        });
    }

    function submitForm(e) {
        e.preventDefault();
        console.log(toastr);
        // e.currentTarget[0-2].value = ""
        writeUserData(e.currentTarget[0].value, e.currentTarget[1].value, e.currentTarget[2].value);

        for (let i = 0; i < 3; i++) {
            e.currentTarget[i].value = "";
        }
        // toastr.success("Submitted Successfully");
    }   

    document.getElementById("contactform").addEventListener("submit", submitForm);

    let config = {
        apiKey: "AIzaSyAJxUlJmYbjDOb5unWuPWAx8IWWnrNTBs8",
        authDomain: "portfoliodata-4701c.firebaseapp.com",
        databaseURL: "https://portfoliodata-4701c.firebaseio.com",
        projectId: "portfoliodata-4701c",
        storageBucket: "portfoliodata-4701c.appspot.com",
        messagingSenderId: "340172598042"
      };
      firebase.initializeApp(config);


});