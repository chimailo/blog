type Props = {
    size?: string
}

export default function Spacer({ size }: Props) {
    let classes = ''

    switch (size) {
        case 'small':
            classes = 'sm:min-w-[24px] sm:min-h-[24px]'
            break;
        case 'medium':
            classes = 'sm:min-w-[48px] sm:min-h-[48px]'
            break;
        case 'large':
            classes = 'sm:min-w-[72px] sm:min-h-[72px]'
            break;
        default:
            classes = size
            break;
    }

    return (
        <div className={classes}></div>
    )
}