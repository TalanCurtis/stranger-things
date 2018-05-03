import React, {Component} from 'react';
import './styles/main.css';
import routes from './routes';
import Nav from './components/Nav/Nav';
import $ from 'jquery';

$(document).ready(function ($) {

  // set the variables
  var timer;
  var mouseX = 0,
    mouseY = 0;
  var xp = 0,
    yp = 0;
  var circle = $("#circle");

  function mouseStopped() {
    // if mouse stop moving remove class moving it will hide the circle with opacity
    // transition
    circle.removeClass('moving');
  }

  $(document)
    .mousemove(function (e) {
      // if mouse start moving add class moving it will show the circle with opacity
      // transition
      circle.addClass('moving');
      // get the mouse position minus 160px to center the circle
      mouseX = e.pageX - 16;
      mouseY = e.pageY - 16;
      // if mouse stop moving clear timer and call mouseStopped function
      clearTimeout(timer);
      timer = setTimeout(mouseStopped, 3000);
    });

  // set the momentum with setInterval function
  var loop = setInterval(function () {
    // change 12 to alter damping higher is slower
    xp += ((mouseX - xp) / 6);
    yp += ((mouseY - yp) / 6);
    circle.css({
      left: xp + 'px',
      top: yp + 'px'
    }); //
  }, 30);

});

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Particals */}
        <div id="particle-container">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        <Nav/> {/* {routes} */}

        {/* BackGround Masking */}
        <div className="wrapper full-size">
          {/* <!-- This div handle the background color --> */}
          <div className="mask-bg-color full-size"></div>
          {/* <!-- This div  wrap all other elements with blend-mode multiply apply --> */}
          <div className="blend-multiply full-size">
            {/* <!-- This div handle the background element (could be an image, a video or in that case a gif) --> */}
            <div className="animated-bg full-size"></div>
            {/* <!-- This div wrap the masked element with blend-mode screen apply and background-color set as #ffffff = white background --> */}
            <div className="blend-screen element-mask full-size">
              {/* <!-- This span display the masked element--> */}
              <span id="circle" className="circle-follow"></span>
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default App;
