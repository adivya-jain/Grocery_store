document.getElementById("LOGIN").addEventListener("submit", (event) => {
    event.preventDefault()
})



function LogIn() {
    // const Name = document.getElementById("name").value;

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password);

    // .catch(error){
    //     document.getElementById("error").innerHTML=error.message;
    // };
    // saveMessage(Name, email, password);
    // document.getElementById('SIGNUP').reset();
}
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        location.replace("index.html");
    }
})


// function saveMessage(Name, email, password) {
//     var newMessageRef = messagesRef.push();
//     newMessageRef.set({
//         name: Name,
//         email: email,
//         pass: password
//     });
// }