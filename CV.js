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

// ******* LE SWITCH (utile pour le dark mode)*******

const theme = document.querySelectorAll(".theme");
// on veut tous les éléments de la class theme

// pour determiner quel théme à été cliqué
theme.forEach((item) => {
  item.addEventListener("click", (event) => {
    console.log(event.target.id);
    document.body.classList.remove("whiteTheme", "darkTheme");
    // il faut qu'on demande à ce que les thémes soient enlever afin de switcher à l'infini entre les thémes : mettre cette lmigne en commentaire si pas compris et test
    switch (event.target.id) {
      case "dark":
        document.body.classList.add("darkTheme");
        break;
      // IMPORTANT de mettre "break" afin que l'action se termine ici et ne lise pas la suite pour appliquer les autres thémes
      case "white":
        document.body.classList.add("whiteTheme");
        break;
      default:
        null; // dans le cas où les thémes ne fonctionnent pas
    }
    // traduction du switch : suivant le event.target.id, je veux que tu fasse la chose suivant
  });
  // on créé un même événement sur les trois thémes contenus dans "théme" via la fonction fléchée
});

// Pour créer le même évenement sur plusieurs éléments :
// 1) mettre la même class sur chaque et ensuite un id différent ou autre class
// 2) nommer la class unique en constante
// 3) attribuer la même action "for each" (ligne 68)
