/**
 * iconos:
devicon:vuejs
devicon:nuxtjs
devicon:react
cib:next-js
vscode-icons:file-type-astro
devicon:html5
devicon:css3
devicon:javascript
devicon:typescript
vscode-icons:file-type-firebase
mdi:github
devicon:tailwindcss
devicon:figma
 */

const projects = [
  {
    name: "HKanime",
    description: "Web para visualizar animes",
    image: "images/portfolio/hkanime.webp",
    github: "https://github.com/JCruzMi/hkanime",
    link: "https://hkanime.vercel.app",
    tags: [
      "devicon:vuejs",
      "devicon:tailwindcss",
      "vscode-icons:file-type-firebase",
    ],
  },
  {
    name: "Luma",
    description: "Wep para guardar y compartir todas tus redes",
    image: "images/portfolio/luma.webp",
    link: "https://luma-huan.vercel.app/",
    github: "https://github.com/JCruzMi/ShareProfile",
    tags: [
      "devicon:vuejs",
      "devicon:tailwindcss",
      "vscode-icons:file-type-firebase",
    ],
  },
  {
    name: "Inkoms",
    description: "Marketplace de Inversiones",
    image: "images/portfolio/inkoms.webp",
    link: "https://www.inkoms.com",
    // github: "https://github.com/JCruzMi/ShareProfile",
    tags: ["cib:next-js", "devicon:tailwindcss", "devicon:typescript"],
  },
];

export default projects;
