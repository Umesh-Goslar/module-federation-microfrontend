import React from 'react';

const RoccAPP = React.lazy(() => import('app1/App'));
const ServiceAPP = React.lazy(() => import('app2/App'));

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: 1 };
    this.serviceApp = this.serviceApp.bind(this);
    this.roccApp = this.roccAPP.bind(this);
  }

  serviceApp() {
    this.setState({ view: 2 });
  }
  roccAPP() {
    this.setState({ view: 1 });
  }

  render() {
    const { view } = this.state;
    let component = (
      <React.Suspense fallback='Loading app1'>
        <RoccAPP />
      </React.Suspense>
    );
    if (view === 2) {
      component = (
        <React.Suspense fallback='Loading app2'>
          <ServiceAPP />
        </React.Suspense>
      );
    }
    return (
      <>
        <div id={"parentApp"} style={{ border: "1px solid red", margin: "10px 5px" }}>
          Parent app
        <div className="ui small menu">
            <a className="active item" onClick={this.roccApp} >Home</a>
            <a className="item">Admin</a>
            <div className="right menu">
              <i className="large icons" style={{ marginRight: "2rem", cursor: "pointer" }} onClick={this.serviceApp}>
                <br />
                <i aria-hidden="true" className="user icon"></i>
              </i>

              <div role="listbox" aria-expanded="false" className="ui item dropdown" >
                <div aria-atomic="true" aria-live="polite" role="alert" className="divider text">Language</div>
                <i aria-hidden="true" className="dropdown icon"></i>
                <div className="menu transition">
                  <div role="option" className="item">English</div>
                  <div role="option" className="item">Russian</div>
                  <div role="option" className="item">Spanish</div>
                </div>
              </div>
              <div className="item"><button className="ui primary button">Logout</button></div>
            </div>
          </div>
        </div>
        <div id={"parentApp"} style={{ color: "red", border: "1px solid red", margin: "10px 5px" }}>Child app
          {component}
        </div>
      </>
    );
  }
}
