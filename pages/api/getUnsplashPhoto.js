import Unsplash, { toJson } from "unsplash-js";
import fetch from "node-fetch";
global.fetch = fetch;

const unsplash = new Unsplash({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
});

export default async (_, res) => {
  const photo = await unsplash.photos
    .getRandomPhoto({ featured: true, orientation: "portrait" })
    .then(toJson);
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(photo));
};
