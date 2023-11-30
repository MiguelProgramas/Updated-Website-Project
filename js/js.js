function validateForm() {
    let a = document.forms["form"]["primeirissimo"].value;
    let b = document.forms["form"]["segundissimo"].value;
    let c = document.forms["form"]["e-mail"].value;
    let d = document.forms["form"]["mensagem"].value;
    if (a == "") {
        alert("O seu nome deve ser apresentado.");
        return false;
    }
    if (b == "") {
        alert("O sobrenome deve ser apresentado.");
        return false;
    }
    if (c == "") {
        alert("O seu e-mail deve ser apresentado.");
        return false;
    }
    if (d == "") {
        alert("A sua mensagem deve ser apresentado.");
        return false;
    }
    return alert("Obrigado pela atenção!");
}

/* A função usada para validar os muitos campos do formulário no final da página. Ela 
verifica, especificamente, se os campos permanacem vazios ou não após o envio do 
formulário. */

function esconderHabilidades() {
    var x = document.getElementById("habilidadesInteiras");
    if (x.style.display === "none") {
    x.style.display = "block";
    } else {
    x.style.display = "none";
    }
}

/* Essa função mostra e oculta a seção de "habilidades". */

function opacidadeSobre() {
    document.getElementById("linguagens").style.opacity = "0.2";
    setTimeout(() => {     document.getElementById("linguagens").style.opacity = "1";}, 1000);
}

/* A função muda a opacidade da "tag": "linguagens", e depois traz a mesma de volta. */

function opacidadeHabilidades() {
    document.getElementById("habilidadesInteiras").style.opacity = "0.2";
    setTimeout(() => {     document.getElementById("habilidadesInteiras").style.opacity = "1";}, 1000);
}

/* A função muda a opacidade da "tag": "habilidadesInteiras", e depois traz a mesma de volta. */


function opacidadeContato() {
    document.getElementById("contatos").style.opacity = "0.2";
    setTimeout(() => {     document.getElementById("contatos").style.opacity = "1";}, 1000);
}

/* A função muda a opacidade da "tag": "contatos", e depois traz a mesma de volta. */
