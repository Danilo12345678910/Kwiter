const firebaseConfig = {
    apiKey: "AIzaSyArrW7VfFy4Ahy1VCZeOzRhiNi2h2OEclI",
    authDomain: "kwiter-5d5d9.firebaseapp.com",
    projectId: "kwiter-5d5d9",
    storageBucket: "kwiter-5d5d9.appspot.com",
    messagingSenderId: "161567359758",
    appId: "1:161567359758:web:969c556b866d50a4de8d5f"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


firebase.initializeApp(firebaseConfig);

const nomeUsuario = localStorage.getItem("nomeUsuario");
const nomeSala = localStorage.getItem("nomeSala");

inicializar();

function inicializar() {
    document.getElementById("nomeSala").textContent = '#' + nomeSala;

    getData();
}

function getData() {
    const output = document.getElementById("output");
    firebase.database().ref('/' + nomeSala).on("value", snapshot => {
        output.innerHTML = "";
        snapshot.forEach(childSnapshot => {
            const childKey = childSnapshot.key;
            if(childKey != "purpose") {
                const childMsg = childSnapshot.val();
                const nome = childMsg.nome;
                const msg = childMsg.mensagem;
                const likes = childMsg.likes;

                const chatCard = document.createElement("div");
                chatCard.className = "chatCard";
                const chatNome = document.createElement("h4");
                chatNome.className = "chatNome";
                chatNome.textContent = nome;
                chatCard.appendChild(chatNome);
                const row = document.createElement("div");
                row.className = "row";
                chatCard.appendChild(row);
                const col = document.createElement("div");
                col.className = "col";
                row.appendChild(col);
                const chatMsg = document.createElement("h5");
                chatMsg.className = "chatMsg";
                chatMsg.textContent = msg;
                col.appendChild(chatMsg);
                const colAuto = document.createElement("div");
                colAuto.className = "col-auto";
                row.appendChild(colAuto);
                const botaoLike = document.createElement("button");
                botaoLike.className = "btn btn-info";
                botaoLike.id = childKey;
                botaoLike.value = likes;
                botaoLike.setAttribute("onclick", "likeMsg(this.id)");
                botaoLike.innerHTML = '<i class="fa-regular fa-thumbs-up"></i> ' + likes;
                colAuto.appendChild(botaoLike);
                output.appendChild(chatCard);
            }
        });
    });
}

function send() {
    const txtMsg = document.getElementById("msg");
    const msg = txtMsg.value;

    if (msg.trim()) {
        firebase.database().ref('/' + nomeSala).push({
            nome: nomeUsuario,
            mensagem: msg,
            likes: 0
        });
        txtMsg.value = "";
    }
}

function likeMsg(btnId) {
    let likes = Number(document.getElementById(btnId).value);
    likes++;
    firebase.database().ref('/' + nomeSala).child(btnId).update({
        likes: likes
    })
}

function updateLike(messageId)
{
    console.log("botão like pressionado -" + messageId) ;
    button_id = messageId;
    likes = document.getElementById(button_id).value;
    updatedLikes = Number(likes) + 1;
        console.log(updateLkes);

        firebase.database().ref(roomName).child(messageId).update({
            like : updatedaLikes
        });

        function logout() {
            localStorage.removeItem("userName");
            localStorage.removeItem("roomName");
            window.location.replace("index.html");
        }
}