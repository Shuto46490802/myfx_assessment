import Footer from "../comps/Footer";
import Form from "../comps/Form";

const Basic = () => {
    return (
        <div className="basic container p-3 vh-100 mx-auto d-flex flex-column">
            <main className="content">
                <Form formGroup={""} formControl={""} formSelect={""} button={""} />
            </main>
            <Footer />
        </div>
    );
}

export default Basic;