import { program } from "commander";
import { exit } from "process";
import lyricsSearcher from "../lib/index";
import pkg from "../../package.json";

const { name, description, version } = pkg;

program
  .name(`npx ${name}`)
  .version(version)
  .arguments("<artist> <song>")
  .description(description, {
    song: "name of the song",
    artist: "name of the artist",
  })
  .action(async (artist, song) => {
    try {
      process.stdout.write(`${await lyricsSearcher(artist, song)}\n`);
    } catch (e: unknown) {
      process.stderr.write(`${(e as { message: string }).message} \n`);
      exit(1);
    }
  })
  .allowExcessArguments(false);

program.parseAsync().catch((e: unknown) => {
  process.stderr.write(`${(e as { message: string }).message} \n`);
  exit(1);
});
