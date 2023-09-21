import Sidebar from "@src/components/sidebar/sidebar";
import MobileNav from "@src/components/mobile-nav/mobile-nav";
import Header from "@src/ui/header/header";
import { FC } from "react";
import { Outlet } from "react-router";
import { useWindowSize } from "@src/utils/utils";

const MainPage: FC = () => {
  const isMobile = useWindowSize(1024);
  return (
    <div className="p-0  lg:px-5 lg:pt-5 flex max-w-[1920px] mx-auto">
      {!isMobile && <Sidebar />}
      <div className=" flex-auto">
        <Header />
        <Outlet />
      </div>
      {isMobile && <MobileNav />}
    </div>
  );
};

export default MainPage;
