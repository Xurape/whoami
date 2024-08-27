import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BUvDUMrK.mjs';
import { manifest } from './manifest_EQ1Vph2r.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/biography/get.astro.mjs');
const _page2 = () => import('./pages/api/projects/get.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/biography/get.ts", _page1],
    ["src/pages/api/projects/get.ts", _page2],
    ["src/pages/index.astro", _page3]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "61b989ee-d570-4ea9-b576-5608fc85e352",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
