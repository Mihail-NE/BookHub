import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full ml-64 p-14  flex flex-col gap-10" >
        {children}
      </div>
    </div>
  );
};

export default Layout;