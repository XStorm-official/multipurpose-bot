<h1 align="center">🔗 Multipurpose Bot V1 🚀</h1>

---
## <a id="menu"></a>🔱 » Menu

- [🔰・Fonctionnalitées](#features)
- [🌌・Discord](https://discord.gg/SW5gzcW4Ux)
- [🎉・Lancement](#setup)
- [⚙・Config](#config)

## <a id="features"></a>🛠 » Fonctionnalitées

```
> Commandes Admin
> Commandes Modération
> Commandes Gestion
> Commandes Anti Raid
> Commandes Jeux
> Commandes Utilitaires
> Commandes Logs
> Commandes Owners
> Système de Tickets
> Système de Pfp
> Système de Soutien
```

## <a id="setup"></a> 📁 » Lancement

1. Installez [Nodejs](https://nodejs.org/ko/blog/release/v16.19.0/)
2. Ouvrez le fichier [config.js](https://github.com/xanero-studio/multipurpose-bot/blob/main/config.js) avec le bloc-note ou autre
3. Ouvrez un terminal dans le répertoire des fichiers
4. Entrez la commande `npm i && node index`

# <a id="config"></a>⚙ » Config

Pour configurer le fichier [config.js](https://github.com/xanero-studio/multipurpose-bot/blob/main/config.js), vous pouvez suivre l'exemple ci-dessous:

```js
module.exports = {
    app: {
        px: '+',
        token: 'MTEyNjU4NzAzNTQyODM0Mzg5OQ.GURjOX.z3Qh3N8BZlj8CYsIdHOg7GglBFQ8-KFxiErefo',
        owners: '1096572738606469171',
        color: '#FF0000',
        footer: 'Multipurpose Bot',
        maxserver: '1',
        maxVol: '150',
        everyoneMention: false,
        hostedBy: true,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
}
```
