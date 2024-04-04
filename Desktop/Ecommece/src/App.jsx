import {
  Home,
  Sale,
  BrowserRouter,
  Route,
  Routes,
  Store,
  Navbar,
} from "./utils/EntryPonit/utils";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/store" element={<Store></Store>}></Route>
          <Route path="/sale" element={<Sale></Sale>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
