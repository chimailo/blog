import Svg, { type SvgIconProps } from "..";

export default function MoonIcon(
  props: Omit<SvgIconProps, "children">
): JSX.Element {
  return (
    <Svg {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z" />
    </Svg>
  );
}
