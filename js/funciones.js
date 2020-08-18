var usuariologeado = document.getElementById("usuariologeado");
var iniciasesion = document.getElementById("iniciasesion");
var btnlogout = document.getElementById("btnlogout");


function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    this.profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
    mostrarmenuUsuario();

}

function mostrarmenuUsuario() {
    document.getElementById("usuario").innerHTML = profile.getName();
    document.getElementById("imgUsuario").setAttribute("src", profile.getImageUrl() );

    document.getElementById("usuariologeado").style.display = "block";
    document.getElementById("opPerfil").style.display = "none";

    document.getElementById("oplogin").style.display = "none";
    document.getElementById("iniciasesion").style.display = "none";
}
function mostrarmenuLogin() {
    document.getElementById("usuariologeado").style.display = "none";
    document.getElementById("opPerfil").style.display = "none";

    document.getElementById("oplogin").style.display = "block";
    document.getElementById("iniciasesion").style.display = "block";
}
mostrarmenuLogin();

usuariologeado.addEventListener("click", function(){
    var x = document.getElementById("opPerfil");
    if (x.style.display === "none") x.style.display = "block";
    else x.style.display = "none";
});
iniciasesion.addEventListener("click", function(){
    var x = document.getElementById("oplogin");
    if (x.style.display === "none") x.style.display = "block";
    else x.style.display = "none";
});

btnlogout.addEventListener("click", function(){
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
        mostrarmenuLogin();
    });

});



FB.getLoginStatus(function(response) {
    alert("response"+response);
    console.log("response"+response);
    statusChangeCallback(response);
});
