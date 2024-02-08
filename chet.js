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

  const nomeUsuario = localStorage.getItem("nomeUusuario");
  const nomeSala = localStorage.getItem("nomeSala");
  
  inicializar();

  function inicializar() {
    document.getElementById("nomeSala").textContent = '#' + nomeSala;
    
    getData();

  } 
  function getData() {
    const output = document.getElementById("Output");
    firebaseConfig.database().ref('/' + nomeSala).on("value",snapshot - {} )
    output.innerHTML = "";
  }
  