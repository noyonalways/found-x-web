interface IProps {
  children: React.ReactNode;
  recentPosts: React.ReactNode;
}

const HomeLayout: React.FC<IProps> = ({ children, recentPosts }) => {
  return (
    <>
      {children}
      {recentPosts}
    </>
  );
};

export default HomeLayout;
