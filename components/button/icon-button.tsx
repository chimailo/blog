import React from "react"
import clsx from "clsx"

type Props = {
  children: React.ReactNode
  classes?: string
  id?: string
  href?: string
  handleClick?: () => void
}

export default function CircledButton(props: Props) {
  const { children, classes, handleClick, id, href } = props

  return (
    <>
      {
        href
          ? <a href={href} rel="noreferrer noopener" target="_blank" className={clsx("group relative border-0 dark:focus:border-slate-300 focus:border-main focus:outline-none h-11 w-11", classes)}>
            <svg className="h-11 w-11" xmlns="http://www.w3.org/2000/svg">
              <g>
                <ellipse ry="21" rx="21" cy="22" cx="22" stroke-width="2" className="circle transition-all ease-in-out duration-700 fill-transparent group-hover:-rotate-90 origin-[50%_50%] -rotate-[90deg] stroke-main dark:stroke-slate-100" />
              </g>
            </svg>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none">{children}</span>
          </a>
          : <button id={id} onClick={handleClick} className={clsx("group relative border-0 dark:focus:border-slate-300 focus:border-main focus:outline-none h-11 w-11", classes)}>
            <svg className="h-11 w-11" xmlns="http://www.w3.org/2000/svg">
              <g>
                {/* <ellipse ry="21" rx="21" cy="22" cx="22" stroke-width="1" className="fill-transparent stroke-slate-400 dark:stroke-slate-600" /> */}
                <ellipse ry="21" rx="21" cy="22" cx="22" stroke-width="2" className="circle transition-all ease-in-out duration-700 fill-transparent group-hover:-rotate-90 origin-[50%_50%] -rotate-[90deg] stroke-main dark:stroke-slate-100" />
              </g>
            </svg>
            <span className="absolute top-1/2 left-1/2 leading-none -translate-x-1/2 -translate-y-1/2">
              {children}
            </span>
          </button>
      }
      <style jsx>{`
        .circle {
          stroke-dasharray: 377;
          stroke-dashoffset: 377;
        }
        .group:hover .circle {
            stroke-dashoffset: 0;
          }
      `}</style>
    </>
  )
}
