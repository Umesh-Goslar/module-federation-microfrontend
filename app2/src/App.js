
import React from 'react';
import './App.css';

const App = props => {
  // const buttonClick = () => {
  //   const onClick = props.onClick;
  //   if (onClick) {
  //     onClick();
  //   } else {
  //     console.log('button is clicked');
  //   }
  // };
  return (
    <>
      <div className='container'>
        <div className='column'>
          <div><h1 className="ui header ">Service app</h1></div>
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
