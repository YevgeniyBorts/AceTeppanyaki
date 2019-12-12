const form = document.querySelector('.form');

const inputName = form.querySelector('#name');
const inputEmail = form.querySelector('#email');
const inputMsg = form.querySelector('#msg');

const config = {
    apiKey: "AIzaSyDzV3cnPDt-kvgf-BJwIFgGIc-MHhQxEYg",
    authDomain: "aceteppanyaki.firebaseapp.com",
    databaseURL: "aceteppanyaki.firebaseio.com",
    projectId: "aceteppanyaki",
    storageBucket: "aceteppanyaki.appspot.com",
    messagingSenderId: "1006382122380"
};


//create a functions to push
    function firebasePush(email, name, msg) {


        //prevents from braking
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }

        //push itself
        var mailsRef = firebase.database().ref('emails').push().set(
            {
                mail: email.value,
                name: name.value,
                msg: msg.value
            }
        );

    }

//push on form submit
    if (form) {
        form.addEventListener('submit', function (evt) {
            evt.preventDefault();
            firebasePush(inputEmail, inputName, inputMsg);

            //shows alert if everything went well.
            document.getElementById("output").innerHTML = 'Your submission was successful.';
        })
    }