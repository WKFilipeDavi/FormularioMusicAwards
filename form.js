
// ================ Estilos Iniciais ==================

//Declaração de variáveis
let bodY = document.body;
let bwhite = document.getElementsByClassName("bwhite");

//Estilizando Var com JS
bodY.style.backgroundColor = "rgb(188, 195, 246)";
//bodY.style.fontFamily = ""

//Função anonima que se alto invoca e deixa fundo dos blocos brancos
(function () {
    let i;
    for (i = 0; i < bwhite.length; i++) {
        bwhite[i].style.backgroundColor = "white";
        //bwhite[i].className += " rounded";
        bwhite[i].style.borderRadius = "8px";
        //bwhite[i].style.padding
    }

})();

bwhite[0].style.borderTop = "blue 12px solid";

// =============== Validações Formulário ====================

var blocoErros = document.getElementById("warning");
var listaErros = document.getElementById("warninglist");
var contadorErros = 0;

function alreadyexists(id){
    let i;
    for(i = 0; i < listaErros.childNodes.length; i++)
    {
        if(listaErros.childNodes[i].id == id)
        {
            return true;
        }
    }
    return false;
}


function inRed(campo, texto, id, preenchido) {
    
    let jaExiste = alreadyexists(id);
    
    if (preenchido == false && jaExiste == false) {
        contadorErros++;
        campo.style.border = "5px solid red";
        let aviso = document.createElement("li");
        aviso.id = id;
        aviso.innerHTML = texto;
        listaErros.appendChild(aviso);
    }


    if (contadorErros > 0) blocoErros.style.display = "block";
    else blocoErros.style.display = "none";


}

function inWhite(idLI, idBloco)
{
    let jaExiste = alreadyexists(idLI);
    if(contadorErros > 0 && jaExiste == true){
        let bloco = document.getElementById(idBloco);
        let li = document.getElementById(idLI);
        console.log(li);
        //console.log(contadorErros);
        listaErros.removeChild(li);
        bloco.style.border = "none";
        contadorErros--;
    }

    if (contadorErros > 0) blocoErros.style.display = "block";
    else blocoErros.style.display = "none";

}

function validateName() {
    var nameField = document.forms["formname"]["nome"].value;

    if (nameField == "" || nameField == null) //(nameField.trim() !== "" && isNaN(nameField))
    {
        inRed(document.getElementById("nomecampo"), "Campo nome não preenchido", "nomeAviso", false);
        return false;
    }

    else {
        //inRed(document.getElementById("nomecampo"), "Campo nome não preenchido", "nomeAviso", true);
        inWhite("nomeAviso","nomecampo");
    }
    return true;
}

function validateRadios(nameRadio, campoID, texto, id) {
    let radio = document.getElementsByName(nameRadio);
    let blocoNotificado = document.getElementById(campoID);
    let i = 0;

    while (i < radio.length) {
        if (radio[i].checked) {
            inRed(blocoNotificado, texto, id, true);
            inWhite(id,campoID);
            return true;
        }
        i++;
    }
    inRed(blocoNotificado, texto, id, false);
    return false;

}


function validateForm() {

    let nameBool = validateName();
    let ageBool = validateRadios("age", "idadecampo", "Campo Idade não preenchido", "idadeAviso");
    let genBool = validateRadios("gender", "generocampo", "Campo Gênero não selecionado", "generoAviso");
    let albBool = validateRadios("album", "albumcampo", "Campo Álbum do ano não selecionado", "albumAviso");
    let artbool = validateRadios("art", "artistacampo", "Campo Artista do ano não selecionado", "artistaAviso");
    let mscbool = validateRadios("msc", "musicacampo", "Campo Música do ano não selecionado", "musicaAviso");
    let vidbool = validateRadios("video", "videocampo", "Campo Clipe do ano não selecionado", "videoAviso");
    var formValid;
    console.log("Nome: " + nameBool + "  Age: " + ageBool + " Genero: " + genBool);

    if (nameBool == true && ageBool == true && genBool == true && albBool == true && artbool == true 
        && mscbool == true && vidbool == true) {
        return true;
    }

    else {
        return false;
    }
    //return formValid;
}

// =================== Cards configuração ==================
var cards = document.getElementsByClassName("card");
var radiosAlbum = document.getElementsByName("album");

(function (){
    cards[0].addEventListener("click", function(){
        radiosAlbum[0].checked = true;
    });
    cards[1].addEventListener("click", function(){
        radiosAlbum[1].checked = true;
    });
    cards[2].addEventListener("click", function(){
        radiosAlbum[2].checked = true;
    });
    cards[3].addEventListener("click", function(){
        radiosAlbum[3].checked = true;
    });

    cards[4].addEventListener("click", function(){
        radiosAlbum[3].checked = true;
    });
    
})();

