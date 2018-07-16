import precss from "precss";
import postcss from "postcss";
import fs from "fs";
import path from "path";
import { get as getAppRootDir } from "app-root-dir";
import { argv } from "yargs";

const outfile = argv["out-file"];

const appRootDir = getAppRootDir();
const srcCssPath = path.join(appRootDir, "src/styles.pcss");
const distCssPath = path.join(appRootDir, outfile);

fs.readFile(srcCssPath, (err, css) => {
  postcss([precss])
    .process(css, { from: srcCssPath, to: distCssPath })
    .then(result => {
      fs.writeFile(distCssPath, result.css, () => true);
    });
});
