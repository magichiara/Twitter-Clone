import "./main-layout.scss";
import { Header } from "../../components/header/Header";

export const MainLayout = ({ children }) => {
  return (
    <div className="MainLayout">
      <Header />
      {children}
    </div>
  );
};
