
/*=========== ==========*/
function afficherAlerte() {
    alert("Bonjour! Vous avez appuyé sur le bouton.");
}
/*==================== Bouton Download ====================*/
function verifierHumain() {
    var nombre1 = Math.floor(Math.random() * 10) + 1;
    var nombre2 = Math.floor(Math.random() * 10) + 1;

    var reponseUtilisateur = prompt("To verify that you are human, solve the following CAPTCHA: " + nombre1 + " + " + nombre2);

    var sommeAttendue = nombre1 + nombre2;
    var reponseUtilisateurNombre = parseInt(reponseUtilisateur);

    if (reponseUtilisateurNombre === sommeAttendue) {
        alert("Video Has Been Downloaded Successfully");
    } else {
        alert("CAPTCHA failed. Please try again.");
    }
}

/*==================== Bouton Send message ====================*/
function envoyerMessage() {
  var Name = document.getElementById('Name').value;
  var Email = document.getElementById('Email').value;
  var Produit = document.getElementById('Produit').value;
  var Message = document.getElementById("Message").value;

  if (Name.trim() === '' || Message.trim() === "" || Produit.trim() === "" || Email.indexOf('@') === -1) {
      alert("Veuillez remplir tous les champs correctement!");
  } else {
      // Ici, vous pouvez ajouter le code pour envoyer le message
     // alert("Message envoyé avec succès!");
    document.write(' Bonjour MR/Mme, email envoyé avec succès'); 
  }
}





