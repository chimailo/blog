import ArrowLink from "./arrow-link";
import { Button, IconButton } from "./button";
import { EMAIL, GITHUB, LINKEDIN, RESUME, TWITTER } from "../lib/constants";
import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from "./svg/icons";

export default function Hero() {
  const contactLinks = [
    {
      link: `mailto:${EMAIL}`,
      icon: MailIcon,
    },
    {
      link: GITHUB,
      icon: GithubIcon,
    },
    {
      link: LINKEDIN,
      icon: LinkedinIcon,
    },
    {
      link: TWITTER,
      icon: TwitterIcon,
    },
  ];

  return (
    <header className="md:py-16 py-8 sm:grid sm:grid-cols-2">
      {/* <div className='flex items-center gap-2'>
        <span className='w-[min(20vw,_180px)] h-0.5 bg-slate-300 dark:bg-slate-600'></span>
        <div className='flex items-center'>
          {contactLinks.map((contact, i) =>
            <IconButton key={i} href={contact.link}>
              <contact.icon svgClass="dark:text-slate-400 text-slate-600 dark:group-hover:text-slate-100 group-hover:text-main transition-colors duration-700 w-4 h-4 sm:w-5 sm:h-5" />
            </IconButton>
          )}
        </div>
      </div> */}
      <div className="my-4">
        <h1 className="text-[clamp(32px,_5.5vw,_44px)] mb-6 md:mb-9 text-primary-400 font-serif font-bold dark:text-slate-50">
          Hello, I&apos;m Chima.
        </h1>
        <p className="text-slate-700 dark:text-secondary-100 text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        {/* <div className="flex items-center gap-6 md:gap-10 mt-6 md:mt-10">
          <Button classes="">view projects</Button>
          <ArrowLink href={RESUME} external>resume</ArrowLink>
        </div> */}
      </div>
    </header>
  );
}
