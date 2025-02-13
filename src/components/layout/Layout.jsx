import PropTypes from "prop-types";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-white dark:bg-black text-black dark:text-white transition">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};


export default Layout;
