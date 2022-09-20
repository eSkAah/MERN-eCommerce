import "./App.css";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Container} from "react-bootstrap";
import {HomePage} from "./pages/HomePage";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {ProductPage} from "./pages/ProductPage";
import {CartPage} from "./pages/CartPage";

export const App = () => {
    return (
        <Router>
            <Header/>
            <main className="py-3">
                <Container>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path={"/product"} element={<ProductPage/>}>
                            <Route path={":id"} element={<ProductPage/>}/>
                        </Route>
                        <Route path={"/cart"} element={<CartPage/>}>
                            <Route path={":id"} element={<CartPage/>}/>
                            <Route path={":qty"} element={<CartPage/>}/>
                        </Route>
                    </Routes>
                </Container>
            </main>
            <Footer/>
        </Router>
    );
};
