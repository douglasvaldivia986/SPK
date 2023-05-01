function mostrar() {
  document.getElementById('articles').style.display = 'block';
  document.getElementById('cont_ver').style.display = 'none';
}

function ocultar() {
  document.getElementById('articles').style.display = 'none';
  document.getElementById('cont_ver').style.display = 'block';
}

/*Cambia el margin cuando haces scroll a la pagina y a la vez desaparece*/
/*el cartel cuando llega cierta medida la pagina*/
window.onscroll = function() {
  if (window.innerWidth < 880) {
    if (window.scrollY > document.getElementById('cartel').offsetTop) {
        document.getElementById('cartel').style.display = "none";
        document.getElementById('margin-cartel').style.margin = '220px 0px 0px 0px';
    } else {
        document.getElementById('cartel').style.display = "block";
        document.getElementById('margin-cartel').style.margin = '260px 0px 0px 0px';
    }
  } else if (window.innerWidth > 880 && window.innerWidth < 1100) {
    if (window.scrollY > document.getElementById('cartel').offsetTop) {
      document.getElementById('cartel').style.display = "none";
      document.getElementById('margin-cartel').style.margin = '220px 0px 0px 0px';
    } else {
      document.getElementById('cartel').style.display = "block";
      document.getElementById('margin-cartel').style.margin = '285px 0px 0px 0px';
    }
  } else if (window.innerWidth > 1100) {
    if (window.scrollY > document.getElementById('cartel').offsetTop) {
        document.getElementById('cartel').style.display = "none";
        document.getElementById('margin-cartel').style.margin = '220px 0px 0px 0px';
    } else {
        document.getElementById('cartel').style.display = "block";
        document.getElementById('margin-cartel').style.margin = '300px 0px 0px 0px';
    }
  }
};

/*funciones responsive*/

function mostraresp() {
  document.getElementById('articles-resp').style.display = 'block';
  document.getElementById('cont_veresp').style.display = 'none';
}

function ocultaresp() {
  document.getElementById('articles-resp').style.display = 'none';
  document.getElementById('cont_veresp').style.display = 'block';
}