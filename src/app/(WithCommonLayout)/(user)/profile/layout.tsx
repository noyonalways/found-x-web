interface IProps {
  children: React.ReactNode;
}

const UserLayout: React.FC<IProps> = ({ children }) => {
  return <>{children}</>;
};

export default UserLayout;
