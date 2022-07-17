import Link from "next/link"
import Footer from "../../comps/Footer";

const Intermediate = () => {
    return (
        <div className="home-page container p-3 vh-100 mx-auto d-flex flex-column">
            <main className="content text-center mt-auto">
                <h1>
                    MyFx Assessment(Intermediate)
                </h1>
                <p>
                    Please press the button below to see the exercises.
                </p>
                <div>
                    <Link href="/intermediate/client-register-form" ariaLabel="Client Register Form">
                        <a className="btn btn-primary btn-lg mx-2 my-2">
                            Client Register Form
                        </a>
                    </Link>
                    <Link href="/intermediate/data-tables" ariaLabel="Data Tables">
                        <a className="btn btn-primary btn-lg mx-2 my-2">
                            Data Tables
                        </a>
                    </Link>
                    <Link href="/intermediate/charts" ariaLabel="Charts">
                        <a className="btn btn-primary btn-lg mx-2 my-2">
                            Charts
                        </a>
                    </Link>
                    <Link href="/intermediate/promotion-page" ariaLabel="Promotion Page">
                        <a className="btn btn-primary btn-lg mx-2 my-2">
                            Promotion Page
                        </a>
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Intermediate;