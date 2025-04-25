import Booking from "./components/BookingPage";
import Route from "./components/Route";
import SideNav from "./components/SideNav";

import { app, main } from "./App.module.css";

function App() {
  return (
    <div className={app}>
      <SideNav />
      <main className={main}>
        <Route path="/">
          <Booking />
        </Route>
        <Route path="/booking">
          <Booking />
        </Route>
      </main>
    </div>
  );
}

export default App;
