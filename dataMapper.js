const data = require("./data");

// Je suis fatigué je commenterais demain
// WTF ! T'es viré !
// const sf = (n, i, t, s2) => !!s2 ? !n.toLowerCase().includes(s2) ? (lk = e => e == s2) & !![...i, ...t].filter(lk)[0] ? 1 : 0 : 1 : 1;
const searchCocktail = (
    cocktailName,
    cocktailIngredients,
    cocktailTags,
    searchString
  ) => {
      // si pas de chaîne de recherche, on veut renvoyer tous les cocktails
      // Rappel : Pour JS une chaine de caractère vide est falsy
      // c'est également le cas de : undefined, null, 0, NaN, "", false
      if(!searchString){
          return true;
      }
      // on vérifie que la chaine de recherche est une partie du nom d'un cocktail
      if(cocktailName.toLowerCase().includes(searchString)){
          return true;
      }
      // maintenant on vérfie que la chaine de recherche est un match exact d'un ingrédient
      // ou d'un tag
      // l'opérateur spread (...) permet d'étendre un itérable (par exemple une expression
      // de tableau ou une chaîne de caractères) en lieu et place de plusieurs arguments
      // exemple : ..."salut" devient "s","a","l","u","t"
      // exemple : ...[1,2,3,4] devient 1,2,3,4
      const mergedList = [...cocktailIngredients, ...cocktailTags];
      const matchFound = mergedList.find(elem => elem === searchString);
      // si find trouve un résultat, il est placé dans la variable matchFound(valeur truthy)
      // sinon matchFound vaudra undefined (valeur falsy)
      return matchFound;
  };


const dataMapper = {
  search(searchString) {
    return data.filter((cocktail) => searchCocktail(cocktail.name, cocktail.ingredients, cocktail.tags, searchString ));
  },
  getCocktailById(cocktailId) {
    const cocktail = data.find(({ id }) => id == cocktailId);
    return cocktail;
  },
};

module.exports = dataMapper;
