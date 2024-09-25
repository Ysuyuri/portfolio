import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";

import { motion } from "framer-motion";
import Projetos from "./components/pages/Projetos";
import ScrollToTop from "./components/layout/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <motion.div initial={{opacity: 0, y:-100}} whileInView={{opacity: 1, y:0}} transition={{delay: 0.1, duration: 0.5}} viewport={{once:true}}>
        <Navbar />
      </motion.div>
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/projetos" element={<Projetos />}></Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
