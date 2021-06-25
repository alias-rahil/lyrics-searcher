<h1 align="center">Welcome to lyrics-searcher 👋</h1>

<p>
  <a href="https://www.npmjs.com/package/lyrics-searcher" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/lyrics-searcher.svg" />
  </a>
  <a href="https://github.com/alias-rahil/lyrics-searcher#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/alias-rahil/lyrics-searcher/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/alias-rahil/lyrics-searcher/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/alias-rahil/lyrics-searcher" />
  </a>
</p>

> A Simple Lyrics Finder That Just Works

> It scrapes the lyrics from [Google](https://www.google.com/) so no seperate API key is needed.

## Programmatic usage:

### Installation

```sh
npm install --save lyrics-searcher
```

### Usage

```js
import lyricsSearcher from "lyrics-searcher";

(async(artist, title) => {
    try {
        const lyrics = await lyricsSearcher(artist, title);

        console.log(lyrics);
    } catch (error) {
        console.error(error.message);
    }
})("poets of fall", "carnival of rust");
```

## Command line usage:

### Using without installation

```sh
npx lyrics-searcher "a r rahman" "kun faya kun"
```

> Note: Use this method only if you plan to use lyrics-searcher for one time, installing lyrics-searcher globally (see-below) is recommended for multiple time usages.

### Installation

```sh
npm install lyrics-searcher -g
```

> Note for Linux & MacOS users: **DO NOT** use sudo to install global packages! The correct way is to tell npm where to install its global packages: `npm config set prefix ~/.local`. Make sure `~/.local/bin` is added to `PATH`.

### Usage after installation

```sh
lyrics-searcher "prateek kuhad" "cold mess"
```

# Screenshot

<p align="center">
  <img align="center" src="https://raw.githubusercontent.com/alias-rahil/lyrics-searcher/main/screenshots/all-i-want-kodaline.png" alt="all-i-want-kodaline.png" />
</p>

# API

For CLI usage, see the help option:

```sh
npx lyrics-searcher --help
```

For programmatic usage, use the default exported module. It takes two arguments. Artist name and Song name. It returns a promise which resolves into a string containing the lyrics if found, otherwise it will throw an exception (with an error message). 

## Author

👤 **Rahil Kabani**

* Website: https://alias-rahil.github.io/
* Github: [@alias-rahil](https://github.com/alias-rahil)
* Email: rahil.kabani.4@gmail.com

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/alias-rahil/lyrics-searcher/issues). You can also take a look at the [contributing guide](https://github.com/alias-rahil/lyrics-searcher/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## Lyrics-Searcher

🏠 [Homepage](https://alias-rahil.github.io/lyrics-searcher)

## 📝 License

Copyright © 2021 [Rahil Kabani](https://github.com/alias-rahil).<br />
This project is [MIT](https://github.com/alias-rahil/lyrics-searcher/blob/master/LICENSE) licensed.
