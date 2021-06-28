import { program } from "commander";
import { readFile } from "fs";
import { join } from "path";
import { exit } from "process";
import lyricsSearcher from "../lib/index";

readFile(join(__dirname, "..", "..", "package.json"), (err, pkg) => {
  if (err) {
    process.stderr.write(`${err.message}\n`);
    exit(1);
  }

  const { name, description, version } = JSON.parse(pkg.toString()) as {
    name: string;
    description: string;
    version: string;
  };

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
});
