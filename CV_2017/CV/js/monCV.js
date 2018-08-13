$(function() {
  // On gère l'affichage du menu responsif pour les écrans inférieurs ou égaux à medium (<992px)
  $('.navbar-responsive').toggle();// toggle() masque l'élément si il est visible

  $('.menu').click(function() {
    $('.navbar-responsive').toggle('slow'); // toggle() affiche l'élément si il est masqué + en paramètre 'slow' qui défini comment il s'affiche
  });

  // Gestion du Scroll vers les différente sections du site
  $('.scroll').click(function() {
    var section = $("." + this.id);
    $("html,body").animate({scrollTop: section.offset().top},'slow');
  });

  // Géstion de l'affichage des progessbar (compétences)
  window.sr = ScrollReveal();
  sr.reveal('.progress-bar', {
    origin: 'left',
    duration: 2000,
    distance: '100%'
  })
//sr.reveal('.bar');
});
