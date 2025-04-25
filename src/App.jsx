import Booking from "./components/BookingPage";
import Route from "./components/Route";
import SideNav from "./components/SideNav";

import { sidebar, main } from "./App.module.css";

function App() {
  return (
    <div>
      <nav className={sidebar}>
        <SideNav />
      </nav>
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
