# 19-20_TWOIng4_Projet

Hélène Carlier-Gubler<br>
Daniel Ikka<br>
ING4 OCRES TD2<br>

# Description

>Objectifs

Créer une application Web, avec comme contrainte de format un Dashboard. Les données à traiter proviennent de trois collections/tables : Users, Sensors, measures. Les users représentent les foyers/habitations, ces derniers possèdent des capteurs de meusure (temperature, air pollution...) et ces derniers enregistre des mesures.

- Le dashboard doit permettre de visualiser des statistiques sur l'ensemble du park de capteurs déployés. Un Views gestion admin BDD est apréciée.

- Implémentation front
- Implémentation back (mise en place d'une API - communication indirecte avec la BDD noSQL)
- Génération de documentations

>Techno

Fullstack Js (ReactJs / ExpressJs), noSQL (mongoDB)

# Get started

1. Ouvrir une invite de commande sur le repository local du projet
2. taper ```cd api ```
3. taper ```npm start```
4. Dans une autre invite de commande, ouvrir le repository
5. taper ```cd website```
6. taper ```npm start```
7. Une page web va s'ouvrir
8. Vous pouvez naviguer sur la page web entre le dashboard et la page admin accessible grâce au bouton "settings"
> Pour plus d'information, regarder la vidéo suivante (à mettre en x2 :stuck_out_tongue_winking_eye: )
<p align="center">
<a href=https://www.loom.com/share/999913ae31f04bfe8aacb635f0fd1b07>Lien vidéo loom</a> 
</p>


# Fonctionnalités

>Back
- BDD sur Atlas 
- Api connectée au port 3030
- CRUD implémenté 
- <a href="https://documenter.getpostman.com/view/9518575/SWE83Gwy">Documentation POSTMAN</a> 
- Delete en cascade (User delete ses Sensors et Sensor delete ses Measures)

> Front
- connecté au port 3000
- local
- bouton refresh (en haut à droite) qui permet de rafraichir la page
- widget d'attente lorsque l'API cherche les données de la BDD
- Possibilité de passer d'un mode dark à un mode light grâce au bouton en haut à droite dans le header
- Responsive

> Dashboard
- Visibilité des 3 dernières mesures prises par l'ensemble des capteurs (température, pollution de l'air et humidité)
- Widget qui affiche l'heure (qui s'incremente automatiquement)
- Widget Report qui montre la proportion des users par rapport au pays/nombre de personne dans la maison/taille de la maison
- Possibilité de changer les statistiques du widget report grâce à un selecteur
- Lorsque l'on passe la souris sur le PieChart, on peut voir les différents groupes du selecteur
- tableau de l'ensemble des valeurs du report en fonction du selecteur
- bouton "settings" qui permet d'accéder à la page de l'admin

> Admin
- 3 widgets qui affiches respectivements le nombre de clients, le nombre de capteurs et le nombre de mesures
- Lorsque l'on clique sur l'un de ces widget, un tableau apparait avec la liste de type qu'on veut afficher (clients, capteurs, mesures)
- On peut supprimer l'un de nos utilisateurs, capteurs ou mesures en cliquant sur la poubelle en rouge à droite de chacune des lignes dans le tableau précisé ci dessus
- 3 boutons "+", lorsque l'on clique dessus affiche un widget formulaire qui nous permet de créer un utilisateurs,capteurs ou mesures en fonction du bouton sur lequel on clique
- Refresh dès qu'on ajoute ou supprime une des données



# Comment nous avons travaillé
> AirTable
Lien vers la vue de l'ensemble des tâches classé par jalon (définit dans une autres view)
<p>
<a href="https://airtable.com/shrVc9Rygnx5MfxAF/tblORFBiyjI8KVIwe?backgroundColor=yellow&viewControls=on&blocks=hide">Milestones Grid View</a> 
</br><a href=https://airtable.com/shr3VvyR4sihMAWSm/tblORFBiyjI8KVIwe?backgroundColor=yellow&viewControls=on&blocks=hide>Kaban view</a>
</br>Kanban view by person : <a href=https://airtable.com/shr89HOipO9SWsX0V/tblORFBiyjI8KVIwe?blocks=hide>Hélène</a> |
<a href=https://airtable.com/shriyHvGBBohKTE3h>Daniel</a> 
</p>

Lien vers la "Spec" de l'API : <a href=https://airtable.com/shrGcSnJxLpiU0xDF>STC</a> 
  


>Figma
<a href="https://www.figma.com/file/83MoU9jIldFIingAPOiYmi/ProjetReact?node-id=85%3A200">Lien Figma</a> 

- Zooning
- Wareframe
- UI

Tout ca en réfléchissant en 2 modes : ordinateur et téléphone


# Pistes d'amélioration
- Création d'un fichier javascript qui permet l'ouverture des deux ports en même temps sans avoir besoin de faire npm start sur deux invites de commande différentes
- Mise en production des sites
- Creation d'un capteur ou d'une mesure pas à partir de l'ID brut mais à partir d'un click
- graphe qui montre la moyenne des différentes type de valeur (humidité, température, pollution de l'air) en fonction du temps ou des pièces où les capteurs sont placés (prévu dans le rendu principal mais manque de temps pour le faire)
- respect de la vie privée des utilisateurs (discussion avec Netatmo)
- avoir un graphisme en mode sombre plus agréable dans la page admin

# Sources
<a href="https://lodash.com/">Documentation Lodash</a><br>
<a href="https://mongoosejs.com/docs/guide.html">Documentation Mongoose</a><br>
<a href="https://stackoverflow.com/questions/14348516/cascade-style-delete-in-mongoose">Stackoverflow : suppression en cascade</a><br>
<a href="https://material.io/resources/icons/?style=baseline">icons</a><br>
<a href="https://www.w3schools.com/react/react_forms.asp">w3schools : Forms React</a><br>
<a href="https://jsfiddle.net/alidingling/3Leoa7f4/">Pie Chart</a><br>
<a href="https://react-select.com/home">Select React</a><br>
<a href="https://www.markdownguide.org/">Documentation Markdown</a><br>
