
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
      <div class="ui small menu">
        <a class="active item" onClick={() => buttonClick()}>Home</a>
        <a class="item">Admin</a>
        <div class="right menu">
          <i class="large icons" style={{ marginRight: "2rem" }} >
            <br />
            <i aria-hidden="true" class="user icon"></i>
          </i>

          <div role="listbox" aria-expanded="false" class="ui item dropdown" tabindex="0">
            <div aria-atomic="true" aria-live="polite" role="alert" class="divider text">Language</div>
            <i aria-hidden="true" class="dropdown icon"></i>
            <div class="menu transition">
              <div role="option" class="item">English</div>
              <div role="option" class="item">Russian</div>
              <div role="option" class="item">Spanish</div>
            </div>
          </div>
          <div class="item"><button class="ui primary button">Logout</button></div>
        </div>
      </div>


      <div className='container'>
        <div className='column'>
          <div><h1 class="ui header ">Service App</h1></div>
          <br />
          <div class="ui four cards">
            <div class="ui card">
              <div class="content">
                <div class="header">Report an issue</div>
                <div class="description">Leverage agile frameworks to
                provide a robust synopsis for high level overviews.
                  </div>
              </div>
            </div>

            <div class="ui card">
              <div class="content">
                <div class="header">FAQs</div>
                <div class="description">Leverage agile frameworks to
                provide a robust synopsis for high level overviews.
                  </div>
              </div>
            </div>


            <div class="ui card">
              <div class="content">
                <div class="header">Share an idea</div>
                <div class="description">Leverage agile frameworks to
                provide a robust synopsis for high level overviews.
                  </div>
              </div>
            </div>

            <div class="ui card">
              <div class="content">
                <div class="header">Learn about ROCC</div>
                <div class="description">Leverage agile frameworks to
                provide a robust synopsis for high level overviews.
                  </div>
              </div>
            </div>

            <div class="ui card">
              <div class="content">
                <div class="header">Clinical education</div>
                <div class="description">Leverage agile frameworks to
                provide a robust synopsis for high level overviews.
                  </div>
              </div>
            </div>


            <div class="ui card">
              <div class="content">
                <div class="header">Subscriptions</div>
                <div class="description">Leverage agile frameworks to
                provide a robust synopsis for high level overviews.
                  </div>
              </div>
            </div>

            <div class="ui card">
              <div class="content">
                <div class="header">Survey</div>
                <div class="description">Leverage agile frameworks to
                provide a robust synopsis for high level overviews.
                  </div>
              </div>
            </div>

            <div class="ui card">
              <div class="content">
                <div class="header">Services</div>
                <div class="description">Leverage agile frameworks to
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
