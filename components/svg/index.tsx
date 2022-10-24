import clsx from "clsx";

export type SvgIconProps = React.ComponentProps<"svg"> & {
  viewBox?: string;
  size?: "sm" | "md" | "lg";
  svgClass?: string; // Class attribute on the child
  colorAttr?: string; // Applies a color attribute to the SVG element.
  children: React.ReactNode; // Node passed into the SVG element.
};

export default function Svg(props: SvgIconProps): JSX.Element {
  const {
    svgClass,
    colorAttr,
    children,
    color = "inherit",
    size = "md",
    viewBox = "0 0 24 24",
    ...rest
  } = props;

  const sizeClass = () => {};

  return (
    <svg
      viewBox={viewBox}
      color={colorAttr}
      aria-hidden
      className={clsx(
        svgClass,
        { "w-4 h-4": size === "sm" },
        { "w-6 h-6": size === "md" },
        { "w-8 h-8": size === "lg" },
        "select-none inline-block flex-shrink-0 text-inherit fill-current"
      )}
      {...rest}
    >
      {children}
    </svg>
  );
}
