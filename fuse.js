const { FuseBox, SVGPlugin, CSSPlugin, BabelPlugin } = require("fuse-box");

let fuse = new FuseBox({
    homeDir: "src/",
    sourcemaps: true,
    output: "dist/$name.js",
    plugins: [
        SVGPlugin(),
        CSSPlugin(),
        BabelPlugin()
    ],
    shim: {
        jquery: {
            source: "node_modules/jquery/dist/jquery.min.js",
            exports: "$",
        },
   }
});

fuse.dev();
fuse.bundle("bundle")
    .watch().hmr()
    .instructions("> index.js")

fuse.run();