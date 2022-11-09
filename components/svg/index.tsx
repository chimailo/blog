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
    // size = "md",
    viewBox = "0 0 24 24",
    ...rest
  } = props;

  return (
    <svg
      viewBox={viewBox}
      color={colorAttr}
      aria-hidden
      className={clsx(
        svgClass,
        // { "w-3 h-3": size === "sm" },
        // { "w-5 h-5": size === "md" },
        // { "w-8 h-8": size === "lg" },
        "select-none inline-block flex-shrink-0 text-inherit fill-current"
      )}
      {...rest}
    >
      {children}
    </svg>
  );
}
