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
        <RoccAPP onClick={this.serviceApp} />
      </React.Suspense>
    );
    if (view === 2) {
      component = (
        <React.Suspense fallback='Loading app2'>
          <ServiceAPP onClick={this.roccApp} />
        </React.Suspense>
      );
    }
    return (
      <>
        {component}
      </>
    );
  }
}
