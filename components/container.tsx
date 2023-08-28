type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
      {children}
    </div>
  );
};

export default Container;
