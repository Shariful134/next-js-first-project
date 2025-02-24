import SideBar from "@/components/shared/SideBar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <SideBar></SideBar>
      {children}
    </div>
  );
};

export default DashboardLayout;
