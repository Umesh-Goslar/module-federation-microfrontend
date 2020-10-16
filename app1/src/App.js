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
      <div class="ui small menu">
        <a class="active item">Home</a>
        <a class="item">Admin</a>
        <div class="right menu">
          <i class="large icons" style={{ marginRight: "2rem" }} onClick={() => buttonClick()}>
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
      <div style={{ padding: '50px 12px', display: 'flex' }}>

        <br />
        <div class="ui celled grid">

          <div><h1 class="ui header ">Rocc App</h1></div>
          <div class="row"><div class="three wide column"><img src="https://react.semantic-ui.com/images/wireframe/image.png" class="ui image" /></div><div class="thirteen wide column"><img src="https://react.semantic-ui.com/images/wireframe/centered-paragraph.png" class="ui image" /></div></div><div class="row"><div class="three wide column"><img src="https://react.semantic-ui.com/images/wireframe/image.png" class="ui image" /></div><div class="ten wide column"><img src="https://react.semantic-ui.com/images/wireframe/paragraph.png" class="ui image" /></div><div class="three wide column"><img src="https://react.semantic-ui.com/images/wireframe/image.png" class="ui image" /></div></div></div>

      </div>
    </>
  );
};

export default App;
