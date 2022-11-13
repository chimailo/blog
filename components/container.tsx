type Props = {
  children?: React.ReactNode
}

export default function Container({ children }: Props) {
  return <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-screen-xl">{children}</div>
}
