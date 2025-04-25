import Booking from "./Pages/BookingPage";
import Route from "./components/Route";
import SideNav from "./components/SideNav";

import { app, main } from "./App.module.css";

function App() {
  return (
    <section className={app}>
      <SideNav />
      <main className={main}>
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
