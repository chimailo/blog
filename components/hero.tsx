import ArrowLink from "./arrow-link"
import { Button, IconButton } from "./button"
import { EMAIL, GITHUB, LINKEDIN, RESUME, TWITTER } from "../lib/constants"
import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from "./svg/icons"

export default function Hero() {
  const contactLinks = [
    {
      link: `mailto:${EMAIL}`,
      icon: MailIcon
    },
    {
      link: GITHUB,
      icon: GithubIcon
    },
    {
      link: LINKEDIN,
      icon: LinkedinIcon
    },
    {
      link: TWITTER,
      icon: TwitterIcon
    },
  ]

  return (
    <header className="md:h-[calc(100vh_-_80px)] h-[calc(100vh_-_56px)] flex flex-col justify-center items-start">
      <div className='flex items-center gap-2'>
        <span className='w-[min(20vw,_180px)] h-0.5 bg-slate-300 dark:bg-slate-600'></span>
        <div className='flex items-center'>
          {contactLinks.map((contact, i) =>
            <IconButton key={i} href={contact.link}>
              <contact.icon svgClass="dark:text-slate-400 text-slate-600 dark:group-hover:text-slate-100 group-hover:text-main transition-colors duration-700 w-4 h-4 sm:w-5 sm:h-5" />
            </IconButton>
          )}
        </div>
      </div>
      <div className="max-w-4xl my-4 pl-5 sm:pl-10 md:pl-16 lg:pl-20">
        <h1 className='text-[clamp(25px,_5.5vw,_52px)] text-main font-serif font-bold dark:text-slate-50'>
          Hi there, I&apos;m Chima Ilo.
        </h1>
        <h2 className='text-[clamp(25px,_5.5vw,_52px)] text-slate-700 font-serif font-bold dark:text-slate-300'>
          I build excellent user experiences in React, Vue and Typescript.
        </h2>
        <div className="flex items-center gap-6 md:gap-10 mt-6 md:mt-10">
          <Button classes="">view projects</Button>
          <ArrowLink href={RESUME} external>resume</ArrowLink>
        </div>
      </div>
    </header>
  )
}


