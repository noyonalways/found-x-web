interface IProps {
  children: React.ReactNode;
}

const Container: React.FC<IProps> = ({ children }) => {
  return (
    <div className="container mx-auto max-w-7xl px-6 flex-grow">{children}</div>
  );
};

export default Container;
