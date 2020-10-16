import React from 'react';

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
      <div style={{ padding: '50px 12px', display: 'flex' }}>
        <br />
        <div className="ui grid">
          <div><h1 className="ui header ">Rocc app</h1></div>
          <div className="row"><div className="three wide column">
            <img src="https://react.semantic-ui.com/images/wireframe/image.png" className="ui image" />
          </div>
            <div className="thirteen wide column">
              <img src="https://react.semantic-ui.com/images/wireframe/centered-paragraph.png" className="ui image" />
            </div>
          </div>
          <div className="row">
            <div className="three wide column">
              <img src="https://react.semantic-ui.com/images/wireframe/image.png" className="ui image" />
            </div>
            <div className="ten wide column">
              <img src="https://react.semantic-ui.com/images/wireframe/paragraph.png" className="ui image" />
            </div>
            <div className="three wide column">
              <img src="https://react.semantic-ui.com/images/wireframe/image.png" className="ui image" />
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default App;
