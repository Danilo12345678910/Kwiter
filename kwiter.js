function entrar() {
const nomeUsuario = document.getElementById("nomeUsuario").value;
console.log(nomeUsuario);
if(nomeUsuario)  {
    localStorage.setItem("nomeUsuario", nomeUsuario);
    window.location = "kwiter_room.html";

}
}
function logout() {
    localStorage.removeItem("nomeUsurio");
    localStorage.removeItem("nomeSala");
    
    location = "index.html";
}