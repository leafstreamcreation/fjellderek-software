

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Fjellderek Software",
  description: "The official website of Fjellderek Software",
  navItems: [
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Portfolio",
      href: "/portfolio",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ],
  links: {
    github: "https://github.com/leafstreamcreation",
    linkedin: "https://www.linkedin.com/in/dereknoblesoftware/",
  },
};
