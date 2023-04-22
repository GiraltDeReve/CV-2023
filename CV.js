const onglets = document.querySelectorAll(".onglets");
const contenu = document.querySelectorAll(".contenu");
let index = 0;

onglets.forEach((onglet) => {
  onglet.addEventListener("click", () => {
    if (onglet.classList.contains("active")) {
      return;
      // on ne fait rien, on ne veut pas qu'en recliquant sur le même "onglets", ça nous fasse un toggle, on doit changer de contenu uniquemenet si on clique sur autre "onglets"
    } else {
      onglet.classList.add("active");
      // on rajoute la classe active lorsqu'on clique sur "onglets" mais pour l'instant plusieurs "onglets" peuvent etre "actif", on n'en veut qu'un
    }

    //  for loop pour retirer ici une classe (active)
    index = onglet.getAttribute("data-anim");
    for (i = 0; i < onglets.length; i++) {
      // formulation type pour loop qui retire éléments
      // onglets.lenght : de façon à prendre tous les onglets
      if (onglets[i].getAttribute("data-anim") != index) {
        // si la valeur data anim de l'élément "onglets" (titre boutton) est différente de la valeur data anim de l'onglet sur lequel on a cliqué,
        onglets[i].classList.remove("active");
        // retirer la classe active de l'lément "onglets" (titre boutton)
      }
    }

    // for loop pour ajouter classe "activeContenu" ou pour la retirer
    for (j = 0; j < contenu.length; j++) {
      if (contenu[j].getAttribute("data-anim") == index) {
        // si la valeur de data anim du contenu est identique à celui de l'index
        contenu[j].classList.add("activeContenu");
        // on garde la classe "activeContenu"
      } else {
        contenu[j].classList.remove("activeContenu");
        // sinon on la retire
      }
    }
  });
});
