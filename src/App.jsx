import { useDispatch, useSelector } from "react-redux";

import Booking from "./Pages/BookingPage";
import Route from "./components/Route";
import SideNav from "./components/SideNav";
import { selectSidebarExpanded, toggleSideBar } from "./redux/sidebarSlice";

import {
  app,
  main,
  expanded,
  collapsed,
  mainExpanded,
  mainCollapsed,
} from "./App.module.css";

function App() {
  const dispatch = useDispatch();

  const isExpanded = useSelector(selectSidebarExpanded);

  let sideBarStyles = expanded;
  let mainStyles = mainExpanded;

  if (!isExpanded) {
    sideBarStyles = collapsed;
    mainStyles = mainCollapsed;
  }

  const handleSideBarView = () => {
    dispatch(toggleSideBar());
  };

  return (
    <section className={app}>
      <SideNav
        isExpanded={isExpanded}
        toggleExpan={handleSideBarView}
        sideBarStyles={sideBarStyles}
      />
      <main className={`${main} ${mainStyles}`}>
        <Route path="/">
          <Booking />
        </Route>
        <Route path="/booking">
          <Booking />
        </Route>
      </main>
    </section>
  );
}

export default App;
