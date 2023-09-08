import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./page/HomePage";

function App() {
    return (
        <>
            <Header />
            <section>
                <HomePage />
            </section>
            <Footer />
        </>
    );
}

export default App;
