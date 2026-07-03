const fs = require("fs");

const assets = ["style.css", "ogp.png"];

for (const asset of assets) {
  fs.copyFileSync(`src/${asset}`, `docs/${asset}`);
}
