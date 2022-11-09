export const EXAMPLE_PATH = 'blog-starter'
export const CMS_NAME = 'Markdown'
export const HOME_OG_IMAGE_URL =
  'https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg'

export type Navlink = {
  name: string;
  link: string;
  external?: boolean;
}

export const NAVLINKS: Navlink[] = [
  {
    name: "blog",
    link: "/blog",
  },
  {
    name: "projects",
    link: "/projects",
  },
  {
    name: "contact",
    link: "/#contact",
  },
  {
    name: "resume",
    link: "/#",
    external: true
  },
];
