import Logo from './assets/logo.svg';

import Form from './components/form';

function App() {
  return (
    <main>
      <section className="hero-section-root">
        <div className="logo-container">
          <img src={Logo} alt="logo" className="logo" />
        </div>
        <div className="content-and-background">
          <div className="background">
            <div className="pattern"></div>
            <div className="hero-bg"></div>
          </div>
          <div className="content">
            <header>
              <h1 className="title">
                <strong>WE'RE</strong> <span>COMING SOON</span>
              </h1>
              <p className="description">
                Hello fellow shoppers! We're currently building our new fashion
                store. Add your email below to stay up-to-date with
                announcements and our launch deals.
              </p>
            </header>
            <Form />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
