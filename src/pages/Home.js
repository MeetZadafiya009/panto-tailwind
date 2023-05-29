import Client from "../components/Client";
import Experiences from "../components/Experiences";
import Facility from "../components/Facility";
import Main from "../components/Main";
import Material from "../components/Material";
import Product from "../components/Product";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

const Home=()=>{
    return(
        <>
            <Header />
            <Main />
            <Facility />
            <Product />
            <Experiences />
            <Material />
            <Client />
            <Footer />
        </>
    )
}

export default Home;