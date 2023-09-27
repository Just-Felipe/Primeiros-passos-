function logar(){

    var usuario1 = document.getElementById ("usuario");
    var senha1 = document.getElementById ("senha");

    if (usuario.value == "admin" && senha.value == "acess"){
        localStorage.setItem("acesso", true);
        alert("Bem vindo de volta.");
        window.location.href = "./Portal/Portal.html";
    } else{
        alert("login ou senha invalidos");
    }
    
    
}