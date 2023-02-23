import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}


// Le fichier _document.js avec Next.js est un fichier spécial qui permet de définir le code HTML qui sera utilisé pour le rendu de toutes les pages de votre application. Il est exécuté côté serveur lors de la génération de la page HTML pour chaque route, et peut être utilisé pour ajouter des balises meta, des liens CSS, des scripts JavaScript, ou pour effectuer toute autre opération qui doit être effectuée avant que la page ne soit rendue côté client.


// Ici nous pouvons  importer et utiliser les composants Html, Head, Main et NextScript. Il exporte ensuite une fonction par défaut nommée "Document" qui renvoie du JSX qui inclut ces composants. Le composant Html définit l'attribut de langue sur "en" et les composants Head, Main et NextScript sont rendus à l'intérieur d'un élément body. Le composant Head est utilisé pour définir les métadonnées de la page, le composant Main rend le contenu principal de la page et le composant NextScript rend les scripts nécessaires pour la page.

// La déclaration import { Html, Head, Main, NextScript } from 'next/document' importe quatre composants spécifiques du module next/document. Ces composants font partie du framework Next.js et sont utilisés pour définir la structure du document HTML qui est rendu sur le navigateur.

// Le composant Html définit l'élément racine du document HTML et peut être utilisé pour définir des attributs sur l'élément <html>, comme l'attribut lang qui est défini sur "en" dans ce code.
// Le composant Head est utilisé pour définir les métadonnées de la page, telles que le titre, la description et d'autres balises meta. Il est rendu à l'intérieur de l'élément <head> du document HTML.
// Le composant Main est utilisé pour rendre le contenu principal de la page. Il est rendu à l'intérieur de l'élément <body> du document HTML.
// Le composant NextScript est utilisé pour rendre les scripts nécessaires pour la page. Il est également rendu à l'intérieur de l'élément <body>, et il doit être le dernier enfant de body pour que les scripts soient exécutés après le chargement du contenu.
// La fonction exportée Document utilise ces composants pour renvoyer du JSX qui définit la structure du document HTML. Le composant <Html> est l'élément racine, et les composants <Head>, <Main> et <NextScript> sont rendus en tant qu'enfants. Ce JSX est transpilé en HTML et envoyé au navigateur, où il est rendu en tant que page web finale.