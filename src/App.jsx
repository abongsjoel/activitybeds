import Booking from "./components/BookingPage";
import Route from "./components/Route";
import SideNav from "./components/SideNav";

function App() {
  return (
    <>
      <SideNav />
      <div>
        <Route path="/">
          <Booking />
        </Route>
        <Route path="/booking">
          <Booking />
        </Route>
      </div>
    </>
  );
}

export default App;
