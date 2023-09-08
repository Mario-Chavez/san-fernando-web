import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
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
