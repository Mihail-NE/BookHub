import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="w-full" >
        {children}
      </div>
    </div>
  );
};

export default Layout;