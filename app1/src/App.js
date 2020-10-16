import React from 'react';

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
        <a className="active item">Home</a>
        <a className="item">Admin</a>
        <div className="right menu">
          <i className="large icons" style={{ marginRight: "2rem" }} onClick={() => buttonClick()}>
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
      <div style={{ padding: '50px 12px', display: 'flex' }}>

        <br />
        <div className="ui celled grid">

          <div><h1 className="ui header ">Rocc App</h1></div>
          <div className="row"><div className="three wide column"><img src="https://react.semantic-ui.com/images/wireframe/image.png" className="ui image" /></div><div className="thirteen wide column"><img src="https://react.semantic-ui.com/images/wireframe/centered-paragraph.png" className="ui image" /></div></div><div className="row"><div className="three wide column"><img src="https://react.semantic-ui.com/images/wireframe/image.png" className="ui image" /></div><div className="ten wide column"><img src="https://react.semantic-ui.com/images/wireframe/paragraph.png" className="ui image" /></div><div className="three wide column"><img src="https://react.semantic-ui.com/images/wireframe/image.png" className="ui image" /></div></div></div>

      </div>
    </>
  );
};

export default App;
