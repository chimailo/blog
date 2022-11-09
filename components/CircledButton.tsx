import React from "react"
import clsx from "clsx"

type Props = React.ComponentProps<"button"> & {
  classes?: string
}

export default function CircledButton(props: Props) {
  const { children, classes, ...rest } = props
  return (
    <button
      className={clsx("overflow-hidden border-2 focus:border-slate-700 focus:outline-none border-slate-300 dark:border-slate-700 inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center hover:border-slate-700 dark:hover:border-slate-300 rounded-full transition-colors", classes)}
      {...rest}
    >
      {children}
    </button>
  )
}
