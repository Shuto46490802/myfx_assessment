import Link from "next/link"
import Footer from '../comps/Footer'

const Home = () => {
  return (
    <div className="home-page container p-3 vh-100 mx-auto d-flex flex-column">
      <main className="content text-center mt-auto">
        <h1>
          MyFx Assessment
        </h1>
        <p>
          Please press the button below to see the exercises.
        </p>
        <div>
          <Link href="/basic" ariaLabel="basic">
            <a className="btn btn-primary btn-lg mx-2 my-2">
              Basic
            </a>
          </Link>
          <Link href="/intermediate" ariaLabel="intermediate">
            <a className="btn btn-primary btn-lg mx-2 my-2">
              Intermediate
            </a>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home;

