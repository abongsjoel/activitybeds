import { useState } from "react";
import Booking from "./Pages/BookingPage";
import Route from "./components/Route";
import SideNav from "./components/SideNav";

import {
  app,
  main,
  expanded,
  collapsed,
  mainExpanded,
  mainCollapsed,
} from "./App.module.css";

function App() {
  const [isExpanded, setIsExpanded] = useState(true);

  let sideBarStyles = expanded;
  let mainStyles = mainExpanded;

  if (!isExpanded) {
    sideBarStyles = collapsed;
    mainStyles = mainCollapsed;
  }

  const handleSideBarView = () => {
    setIsExpanded((prevView) => !prevView);
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
