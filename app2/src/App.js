
import React from 'react';
import './App.css';

const App = props => {
  const buttonClick = () => {
    const onClick = props.onClick;
    if (onClick) {
      onClick();
    } else {
      console.log('button is clicked');
    }
  };
  return (
    <>
      <div className="ui small menu">
        <a className="active item" onClick={() => buttonClick()}>Home</a>
        <a className="item">Admin</a>
        <div className="right menu">
          <i className="large icons" style={{ marginRight: "2rem" }} >
            <br />
            <i aria-hidden="true" className="user icon"></i>
          </i>

          <div role="listbox" aria-expanded="false" className="ui item dropdown">
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


      <div className='container'>
        <div className='column'>
          <div><h1 className="ui header ">Service App</h1></div>
          <br />
          <div className="ui four cards">
            <div className="ui card">
              <div className="content">
                <div className="header">Report an issue</div>
                <div className="description">Leverage agile frameworks to
                provide a robust synopsis for high level overviews.
                  </div>
              </div>
            </div>

            <div className="ui card">
              <div className="content">
                <div className="header">FAQs</div>
                <div className="description">Leverage agile frameworks to
                provide a robust synopsis for high level overviews.
                  </div>
              </div>
            </div>


            <div className="ui card">
              <div className="content">
                <div className="header">Share an idea</div>
                <div className="description">Leverage agile frameworks to
                provide a robust synopsis for high level overviews.
                  </div>
              </div>
            </div>

            <div className="ui card">
              <div className="content">
                <div className="header">Learn about ROCC</div>
                <div className="description">Leverage agile frameworks to
                provide a robust synopsis for high level overviews.
                  </div>
              </div>
            </div>

            <div className="ui card">
              <div className="content">
                <div className="header">Clinical education</div>
                <div className="description">Leverage agile frameworks to
                provide a robust synopsis for high level overviews.
                  </div>
              </div>
            </div>


            <div className="ui card">
              <div className="content">
                <div className="header">Subscriptions</div>
                <div className="description">Leverage agile frameworks to
                provide a robust synopsis for high level overviews.
                  </div>
              </div>
            </div>

            <div className="ui card">
              <div className="content">
                <div className="header">Survey</div>
                <div className="description">Leverage agile frameworks to
                provide a robust synopsis for high level overviews.
                  </div>
              </div>
            </div>

            <div className="ui card">
              <div className="content">
                <div className="header">Services</div>
                <div className="description">Leverage agile frameworks to
                provide a robust synopsis for high level overviews.
                  </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default App;
