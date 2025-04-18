import Header from "./components/layouts/header/Header";
import Footer from "./components/layouts/footer/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
