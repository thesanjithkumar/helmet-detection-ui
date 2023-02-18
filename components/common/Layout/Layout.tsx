import { FC } from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

interface Props {
  children: JSX.Element;
}

const Layout: FC<Props> = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
