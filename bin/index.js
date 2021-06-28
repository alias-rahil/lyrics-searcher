#!/usr/bin/env node

const { program } = require('commander');
const lyricsSearcher = require('../dist/index');
const pkg = require('../package');

const { version, description, name } = pkg;

program
  .name(`npx ${name}`)
  .version(version)
  .arguments('<artist> <song>')
  .description(description, {
    song: 'name of the song',
    artist: 'name of the artist',
  })
  .action(async (artist, song) => {
    try {
      process.stdout.write(`${await lyricsSearcher(artist, song)}\n`);
    } catch (e) {
      process.stderr.write(`${e.message}\n`);
    }
  })
  .allowExcessArguments(false);

program.parseAsync();
