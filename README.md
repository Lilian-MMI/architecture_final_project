# Architecture Logicielle TP Final

Après le clone de ce repository, executer la commande suivante à la racine du projet :

```
docker-compose up
```

Cette commande initialisera 3 microservices: un premier dédié au "user", un second pour les "games", et un troisème pour les "scores". Les 3 microservices tourneront respectivement sur le port 8080, 8081, 8082.

L'API Gateway, la passerelle entre le client et les microservices se lance à partir des commandes suivantes, dans le dossier "API Gateway" :

```
npm i 
node
```

Ce serveur est lancé sur le port 3001.

Le client quant à lui se lance en executant la suite de commandes suivantes:

```
npm i
npm run serve
```
