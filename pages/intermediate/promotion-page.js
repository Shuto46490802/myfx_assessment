import Footer from "../../comps/Footer";
import CashBack from "../../comps/promotion-page/CashBack";
import Hero from "../../comps/promotion-page/Hero";
import Policy from "../../comps/promotion-page/Policy";

const PromotionPage = () => {
    return (
        <div className="app__wrapper pb-3">
            <main className="content promotion-page">
                <Hero />
                <CashBack />
                <Policy />
            </main>
            <Footer />
        </div>
    );
}

export default PromotionPage;