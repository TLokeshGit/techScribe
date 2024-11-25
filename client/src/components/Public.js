import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">techScribe!</span></h1>
            </header>
            <main className="public__main">
                <p>Based in San Francisco, techScribe offers expert tech repair services with a dedicated and trained staff to meet all your technological needs efficiently.</p>
                <address className="public__addr">
                    Lokesh T<br />
                    123 Parkmerced Drive<br />
                    San Francisco, CA 94132<br />
                    <a href="tel:+15555555555">(555) 555-5555</a>
                </address>
                <br />
                <p>Owner: Lokesh T</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public