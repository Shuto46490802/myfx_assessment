import Footer from "../../comps/Footer";
import Form from "../../comps/Form";

const ClientRegiterForm = () => {
    return (
        <div className="container p-3 vh-100 d-flex flex-column">
            <main className="form__wrapper mt-auto">
                <Form formGroup={"form-group"} formControl={"form-control"} formSelect={"form-select"} button={"btn btn-primary mt-2"} />
            </main>
            <Footer />
        </div>
    );
}

export default ClientRegiterForm;