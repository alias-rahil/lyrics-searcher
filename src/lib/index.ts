import mime from "mime-types";
import iconv from "iconv-lite";
import axios, { AxiosResponse } from "axios";
import { htmlToText } from "html-to-text";
import Joi from "joi";

const decode = (response: AxiosResponse<string>) => {
  const charset = mime.charset(
    response.headers as { "content-type": string }["content-type"]
  );

  const c = charset && iconv.encodingExists(charset) ? charset : "UTF-8";

  response.data = iconv.decode(Buffer.from(response.data), c);

  return response;
};

axios.interceptors.response.use(decode);

const getShuffledArr = <T extends unknown[]>(arr: T) => {
  const newArr = arr.slice() as T;
  for (let i = newArr.length - 1; i > 0; i -= i) {
    const rand = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
  }
  return newArr;
};

const delims = [
  '</div></div></div></div><div class="hwc"><div class="BNeawe tAd8D AP7Wnd"><div><div class="BNeawe tAd8D AP7Wnd">',
  '</div></div></div><div><span class="hwc"><div class="BNeawe uEec3 AP7Wnd">',
];

const getSearchQueries = (artist: string, song: string) =>
  getShuffledArr([
    encodeURIComponent(`${artist} ${song} song`),
    encodeURIComponent(`${artist} ${song} lyrics`),
    encodeURIComponent(`${artist} ${song} song lyrics`),
    encodeURIComponent(`${artist} ${song}`),
  ]);

const url = "https://www.google.com/search?q=";

const validateInput = (args: unknown[]) => {
  return Joi.attempt(
    args,
    Joi.array().items(Joi.string()).length(2).required()
  ) as [string, string];
};

async function lyricsSearcher(artist: string, song: string): Promise<string>;

async function lyricsSearcher(...args: unknown[]): Promise<string> {
  const [artist, song] = validateInput(args);
  const searchQueries = getSearchQueries(artist, song);

  const lyricsArr = await Promise.all(
    searchQueries.map(async (searchQuery) => {
      try {
        const { data: searchResult }: { data: string } = await axios.get(
          `${url}${searchQuery}`
        );

        return searchResult.split(delims[0])[1].split(delims[1])[0];
      } catch {
        return "";
      }
    })
  );

  const lyrics = lyricsArr.find((l) => l);

  if (lyrics === undefined) {
    throw new Error("Could not find the lyrics");
  }

  const lines = lyrics.split("\n").map((line: string) => htmlToText(line));

  return lines.join("\n").trim();
}

export = lyricsSearcher;
