import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">TechScribe!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          TechScribe is your ultimate solution for managing tasks and
          collaborating with your team. Designed for Employees, Managers, and
          Admins, TechScribe helps you stay organized and boost productivity.
        </p>
        <p>Get started today and take control of your workflow with ease!</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};

export default Public;
