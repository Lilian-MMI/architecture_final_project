
# __TP Framework/CLI__ 
![Image](./cli2.jpg "Title")
__ __
## Introduction
Le Framework/CLI suivant, permet dans sa version de base de créer un projet afin de d appliquer des transformations à un texte issue d un fichier, et de produire un fichier de résultat en sortie.
>Dans la suite de cette documentation, il vous est expliqué comment installer, utiliser l application.
__ __
## Getting started
### Installation :

Le framework TP Framework/CLI requière [Node.js](https://nodejs.org/) v10+ pour fonctionner.

Ci-dessous, les étapes pour l installation de l application sous Windows:

Ouvrir une invite de commande cmd.exe dans le dossier de votre choix

Puis créer un dossier avec les commande suivantes :
```sh
mkdir 'nomDuDossierProjet'
```
Se déplacer dans le répertoire dossier projet nouvellement créé :
```sh
cd 'nomDuDossierProjet'
```
Créer un projet avec :
```sh
ppft new 'nomDuProjet'
```
Se déplacer dans le répertoire projet nouvellement créé :
```sh
cd 'nomDuProjet'
```
Installer les dépendances :
```sh
npm i -g
```
### Exemple d exécution de l application pour appliquer un filtre helloworld basique:

Pour démarrer le projet, utiliser la commande suivante :
(Un fichier d'exemple fichierExemple.txt est à la racine du projet. Il faut donner un nom de fichier de sortie et le numéro du premier filtre à appliquer.)
```sh
node app fichierExemple.txt fichierSortie.txt 1
```
Cela affichera le massage "Hello World" dans le console pour l'exemple.

__ __
## API

Un fichier de configuration, conf-filters.json, est situé à la racine du projet. Il contient les différentes steps pour traiter le fichier passé en première argument avec la commance CLI. Ce fichier se manipule avec la CLI dont les principales commandes sont détaillés ci-après:


| Command | Action | Description | Exemple d'utilisation
| ------ | ------ | ------ | ------ |
| ppft new | Initier un nouveau projet | Créé l'arborescence projet avec un fichier de configuration vierge, et éventuellement un template de filter de type hello world. | ppft new mon_super_projet : créé un nouveau projet appelé “mon_super_projet” |
| ppft add_filter | Ajouter un filtre | Créé un nouveau filter dans un projet existant | ppft add_filter capitalize créé un nouveau filter de nom “capitalize”
| ppft _del_filter | Supprimer un filtre | Supprimer un filter existant. ⚠ La suppression ne doit être possible qu’à condition qu’il ne soit pas utilisé dans le fichier de configuration. | ppft del_filter capitalize supprimer le filter de nom “capitalize”
| ppft add_step | Ajouter une step au fichier de configuration | Ajoute une step au fichier de configuration. Cette commande prend les paramètres suivants : - id de step unique. - nom de filter - id step suivante (si nécessaire)| ppft add_step 10 capitalize 15 ajoute une step avec l’id « 10 » avec le filter « capitalize » et la « next step 15 »
| ppft del_step | Supprimer une step au fichier de configuration | Supprime  une step du fichier de configuration. Cette commande prend les paramètres suivants : - id de step unique. | ppft del_step 10 Supprime la step d’id 10 Les steps “orphelines” seront à gérer manuellement par le développeur

__ __
#### Error

>Les erreurs sont gérées par le framework et sont affichées dans la CLI.
Chaque message d erreur affiche le nom du fichier ou s est produit le problème avec une brève explication.
>>
>>Pour de plus amples détails sur les messages d'erreurs, consultez la documentation complète à cette adresse : [Documentation officiel: gestion des erreurs](https://nodejs.org/)

__ __
## Tools
### Exemple d utilisation pour ajouter des filtres au projet avec la CLI :
Vous pouvez créer vous même des filtres. Ils sont à placer dans le dossier filters du projet: racineDuProjet/filterFolder.

Pour créer un nouveau filtre il suffit de copier coller un filtre existant et de renommer le nom du fichier et le code du fichier.
__ __
Dans l exemple qui suit, on va ajouter les filtres nécessaires pour lire un fichier passé en paramètres et appliquer les filtres suivants:
- read.js, va lire le fichier passé en paramètre
- capitalize.js, va formater le texte en majuscule
- reverse.js, va inverser l'ordre des mots du fichier.
- write.js, va écrire le contenu du fichier transformé dans le fichier de sorti passé en paramètre.
---
Ouvrir une invite de commande cmd.exe à la racine du dossier du projet et se déplacer dans le répertoire dossier projet nouvellement créé :
```sh
cd 'nomDuDossierProjet'
```
Supprimer le filtre par défaut du projet :
```sh
ppft del_step 1
```
Puis, insérer les filtres les uns à la suite des autres:
Ici on souhaite inserer le filtre à la position 1, le fitre sera read.js, et l'étape suivante sera la 2.
```sh
ppft add_step 1 read 2
```
Puis inserer le filtre à la position 2, le fitre sera capitalize.js, et l'étape suivante sera la 3.
```sh
ppft add_step 2 capitalize 3
```
Puis inserer le filtre à la position 3, le fitre sera reverse.js, et l'étape suivante sera la 4.
```sh
ppft add_step 3 reverse 4
```
Enfin, inserer le filtre à la position 4, le fitre sera write.js, et l étape suivante sera la 0. 0 signifie qu'il n'y a pas de filtre suivant.
```sh
ppft add_step 4 write 0
```
Il suffit ensuite de lancer l'exécution de l'application.
```sh
node app fichierExemple.txt fichierSortie.txt 1
```
Le fichier fichierSortie.txt généré en sortie sera situé à la racine du projet.

## License

**Licence Creative Commons**
E=MC<sup>2</sup>

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - )

[dill]: <https://github.com/joemccann/dillinger>
[git-repo-url]: <https://github.com/joemccann/dillinger.git>
[john gruber]: <http://daringfireball.net>
[df1]: <http://daringfireball.net/projects/markdown/>
[markdown-it]: <https://github.com/markdown-it/markdown-it>
[Ace Editor]: <http://ace.ajax.org>
[node.js]: <http://nodejs.org>
[Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
[jQuery]: <http://jquery.com>
[@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
[express]: <http://expressjs.com>
[AngularJS]: <http://angularjs.org>
[Gulp]: <http://gulpjs.com>

[PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
[PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
[PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
[PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
[PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
[PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>

