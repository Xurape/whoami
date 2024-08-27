/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as addAttribute, b as renderHead, e as renderSlot, f as createAstro, g as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DQ3V4glL.mjs';
import 'kleur/colors';
import { $ as $$Image } from '../chunks/_astro_assets_2K9WgrxV.mjs';
import { jsx } from 'react/jsx-runtime';
import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
export { renderers } from '../renderers.mjs';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Separator = React.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsx(
    SeparatorPrimitive.Root,
    {
      ref,
      decorative,
      orientation,
      className: cn(
        "shrink-0 bg-zinc-200 dark:bg-zinc-800",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      ),
      ...props
    }
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="João Ferreira's portfolio and simple biography"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/xuap/Documents/Coding/whoami/src/layouts/Layout.astro", void 0);

const img_hello = new Proxy({"src":"/_astro/hello.BCZAymA2.webp","width":512,"height":512,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/xuap/Documents/Coding/whoami/src/assets/img/hello.webp";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const projects = await fetch(Astro2.url.origin + "/api/projects/get");
  const projectsData = await projects.json();
  const biography = await fetch(Astro2.url.origin + "/api/biography/get");
  const biographyData = await biography.json();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Jo\xE3o Ferreira | Computer Engineer Student" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="container" class="flex flex-col justify-center items-center h-full md:h-screen"> <div class="flex flex-col p-8 md:p-4 gap-8"> <div class="flex flex-col md:flex-row gap-8 justify-center items-center"> <div class="flex flex-col gap-2 h-full justify-center md:justify-start bg-zinc-900/60 border border-zinc-800 shadow-2xl p-8 rounded-lg hover:scale-[1.01] transition-all duration-300"> ${renderComponent($$result2, "Image", $$Image, { "src": img_hello, "alt": "Hello", "class": "w-52 mb-2" })} <h1 class="text-4xl font-bold">Hello there, I'm <span class="text-ipvc animate-pulse">João</span>.</h1> <p class="text-zinc-400">Nice to meet you!</p> ${renderComponent($$result2, "Separator", Separator, { "className": "mt-4 bg-zinc-800" })} <p class="text-zinc-400 mt-4 text-wrap max-w-96">
I'm a third year Computer Engineering student at <a class="underline decoration-wavy decoration-ipvc hover:text-ipvc transition-all duration-300" href="https://www.estg.ipvc.pt/" target="_blank" rel="nofollow noreferrer noopener">Polytechnic Institute of Viana do Castelo</a>, Portugal. 
						I'm passionate about technology and software development, and I'm always looking for new 
						challenges and opportunities to learn and grow. Portuguese native speaker, fluent in English.
</p> </div> <div class="h-8 hidden md:block"> ${renderComponent($$result2, "Separator", Separator, { "className": "w-1 bg-zinc-800 h-full rounded-full" })} </div> <div class="flex flex-col gap-8 md:gap-2"> <div class="flex flex-col gap-2 justify-center md:justify-start bg-zinc-900/60 border border-zinc-800 shadow-2xl p-8 rounded-lg hover:scale-[1.01] transition-all duration-300"> <h2 class="text-2xl font-bold">About me</h2> <p class="text-zinc-400 text-wrap max-w-[34rem]"> ${biographyData.about} </p> <div class="flex flex-col md:flex-row justify-between mt-4 md:mt-6 text-zinc-400 italic text-xs"> <p>Contact me on <span class="text-ipvc">${biographyData.email}</span></p> <p>Last update on <span class="underline">${biographyData.updated_at}</span></p> </div> </div> <div class="flex flex-col gap-2 justify-center md:justify-start bg-zinc-900/60 border border-zinc-800 shadow-2xl p-8 rounded-lg hover:scale-[1.01] transition-all duration-300"> <h2 class="text-2xl font-bold">Projects</h2> <p class="text-zinc-400 max-w-96 flex flex-col md:gap-3"> ${projectsData.map((item) => {
    return renderTemplate`<div class="flex flex-col md:flex-row md:gap-2 justify-start text-start md:text-start md:justify-start items-start md:items-center"> <span class="text-zinc-600 hidden md:block">&#62;</span> <a${addAttribute(item.link, "href")} target="_blank" rel="noreferer noopener nofollow" class="text-zinc-300 hover:text-ipvc transition-all duration-500">${item.name}</a> <p class="hidden md:block">∙</p> <p class="text-zinc-400 text-xs font-thin">${item.description}</p> </div>`;
  })} </p> </div> </div> </div> </div> </div> ` })}`;
}, "/Users/xuap/Documents/Coding/whoami/src/pages/index.astro", void 0);

const $$file = "/Users/xuap/Documents/Coding/whoami/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
