import React from "react"
import clsx from "clsx"

type Props = React.ComponentProps<'button'> & {
  classes?: string
}

export default function CircledButton(props: Props) {
  const { children, classes, onClick, id } = props

  return (
    <button id={id} onClick={onClick} className={clsx("capitalize bg-slate-100 rounded tracking-wide dark:bg-main text-main dark:text-slate-100 m-0 leading-none px-6 py-3 border-main border hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors dark:border-slate-400", classes)}>
      {children}
    </button>
  )
}
