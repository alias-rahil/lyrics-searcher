#!/usr/bin/env node

/* eslint-disable no-console */

import { program } from "commander";
import lyricsSearcher from "../lib/index";
import pkg from "../../package.json";

const { name, description, version } = pkg;

program
  .name(`npx ${name}`)
  .version(version)
  .allowExcessArguments(false)
  .arguments("<artist> <song>")
  .description(description, {
    song: "name of the song",
    artist: "name of the artist",
  })
  .action(async (artist, song) => {
    try {
      console.log(await lyricsSearcher(artist, song));
    } catch (e: unknown) {
      console.error((e as { message: string }).message);
      process.exit(1);
    }
  });

program.parseAsync().catch((e: unknown) => {
  console.error((e as { message: string }).message);
  process.exit(1);
});
