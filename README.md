# PortCMS

PortCMS est un CMS simple et léger, basé sur VueJS.

## Table des matières

- [PortCMS](#portcms)
  - [Table des matières](#table-des-matières)
  - [Prérequis](#prérequis)
  - [Installation](#installation)
  - [Utilisation](#utilisation)
    - [Mode Développement](#mode-développement)
    - [Mode Production](#mode-production)
  - [Auteurs](#auteurs)
  - [License](#license)

## Prérequis

- git
- nodejs
- npm

## Installation

```bash
git clone https://github.com/JoshuaVandaele/MiniCMS.git
cd PortCMS
npm i
```

## Utilisation

### Mode Développement

Pour lancer le serveur de développement, utilisez la commande suivante :

```bash
npm run dev
```

### Mode Production

Pour build le projet, utilisez la commande suivante :

```bash
npm run build
```

Cette commande va créer un dossier `dist` contenant les fichiers nécessaires au serveur de production.

Pour lancer le serveur de production, utilisez la commande suivante :

```bash
npm run serve
```

Serve est un serveur de production basé sur [Express](https://expressjs.com/), mais vous pouvez utiliser n'importe quel serveur de votre choix.

## Auteurs

- [Joshua Vandaele](https://vandaele.software)
- [Jeremy Bodart](https://github.com/SilverSdt)
- [Kevin Sailly](https://github.com/LJ5O)
- [Camille Vasseur](https://github.com/IchiyaGentleman)

## License

Le projet est sous la license [GPL](./LICENSE).
