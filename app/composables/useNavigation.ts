import type { NavigationLink } from "~/types/navigationLink";

const links = ref([
  { title: "Home", href: "/", type: "route" },
  { title: "Solutions", type: "popover", fetchPath: "/solutions" },
  { title: "Documentation", href: "http://help.magify.com/", type: "external" },
  { title: "Blog", href: "/blog", type: "route" },
  { title: "About", href: "/about", type: "route" },
] as NavigationLink[]);

export { links };
