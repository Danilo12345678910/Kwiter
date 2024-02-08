const firebaseConfig = {
    apiKey: "AIzaSyArrW7VfFy4Ahy1VCZeOzRhiNi2h2OEclI",
    authDomain: "kwiter-5d5d9.firebaseapp.com",
    projectId: "kwiter-5d5d9",
    storageBucket: "kwiter-5d5d9.appspot.com",
    messagingSenderId: "161567359758",
    appId: "1:161567359758:web:969c556b866d50a4de8d5f"
  };
  
 
  const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

inicializar();

function inicializar() {
    const nomeUsuario = localStorage.getItem("nomeUsuario");
    // console.log(nomeUsuario);
    document.getElementById("nomeUsuario").textContent = "Olá, " + nomeUsuario + "!";

    getData();
}

function addSala() {
    const nomeSala = document.getElementById("nomeSala").value;
    console.log(nomeSala);
    if (nomeSala) {
        firebase.database().ref('/').child(nomeSala).set({
            purpose: "sala criada"
        });

        carregaSala(nomeSala);
    }
}

function getData() {
    firebase.database().ref('/').on("value", snapshot => {
        let salas = [];
        snapshot.forEach(childSnapshot => {
            const childKey = childSnapshot.key;
            const html = '<div class="nomeSala" id="'
                + childKey
                + '" onclick="carregaSala(this.id)">#'
                + childKey
                + '</div>'
            salas.push(html);
        });
        document.getElementById("output").innerHTML = salas.join("");
        // const output = document.getElementById("output");
        // output.innerHTML = salas.join("");
    });
}

function carregaSala(sala) {
    localStorage.setItem("nomeSala", sala);
    location = "chat.html";
}

function logout () {
    localStorage.removeItem ("UserName") ;
    localStorage.removeItem ("roomName");
    Window.location = "index.html"; 

}
 
function redirectToRoomName (name) 
{
    console.log (name);
    localStorage.setItem ("roomName",name);
window.location = "Kiwiter_page.html"
}
//function getData () {
    //firebase.database (). ref ("/"). on('value', function(snapshot)(document.getElementById)("output").innerHTML = "";snapshot  roomName = childKey;)

//} ) ;
firebase.database().ref(roomName).push({
    name: userName, 
    message:msg,
    like:0 
}) ;
function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(roomName).push({
        name:userName,
        message:msg,
        like:0
    });
    document.getElementById ("msg").value = "";
}
function updatelike (messageId){
    console.log("botao de like pressionado " + massegeId);
    buttonId = massegeId;
    likes =  document .getElementById (buttonId).value;
    updatedlike = Number (likes) + 1;
    console.log (updatedlike);
    firebase.database ().ref;(roomName).child(massegeId).update({
        like:updatedlike
    });
}