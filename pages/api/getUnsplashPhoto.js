import Unsplash, { toJson } from "unsplash-js";
import fetch from "node-fetch";
global.fetch = fetch;

const unsplash = new Unsplash({
  accessKey: "F2oB-a8D6Mx_Kn0NKuzucRMVCVGDQo4miw-W4kq1A-0",
});

export default async (_, res) => {
  const photo = await unsplash.photos
    .getRandomPhoto({ featured: true, orientation: "portrait" })
    .then(toJson);
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(photo));
};
