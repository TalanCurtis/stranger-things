import React, {Component} from 'react';
import './styles/main.css';
import routes from './routes';
import Nav from './components/Nav/Nav';
import {TweenLite, TimelineMax, Linear} from 'gsap';
import $ from 'jquery';
import StrangerThings_Logo from './images/svgs/StrangerThings_Logo/StrangerThings_Logo.js'


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
  constructor(){
    super();
    this.state={
      isUpsideDown:false
    }
  }

  changeWorld(){
    console.log('change')
    if(this.state.isUpsideDown){
      TweenLite.to('.bg-image-upsideDownWorld', 1, { opacity:0})
    }else{
      TweenLite.to('.bg-image-upsideDownWorld', 1, { opacity:1})
    }
    this.setState({isUpsideDown:!this.state.isUpsideDown})
    // let tl = new TimelineMax()
    // tl.from('.MyColor', 1, {opacity:.5});
    // tl.from('.MyColor', 1, {opacity:0});
    // let tl = new TimelineMax()

    // tl
    // .to(".MyColor", 3, {backgroundPosition:1000,
    // repeat:0
    // })


  }
  
  componentDidMount(){
    var tl = new TimelineMax({
      repeat: -1
    });

    tl.to(".MyColor", 2, {
      backgroundPosition: "20px 0px",
      // ease: Linear.easeNone
    });

  }

  render() {
    return (
      <div className="App">
        <div className='bg-image-regularWorld'></div>
        <div className='bg-image-upsideDownWorld'></div>
        <div className='LogoContainer'>
          <div className='softMask'>
            <div className='MyColor' style={{width:'100%', height:'100%'}}></div>
          </div>
          <div className='anothermask'>
          </div>
          {/* <StrangerThings_Logo /> */}

        </div>

        {routes}
        <button onClick={()=>this.changeWorld()} style={{ position:'fixed'} }>Switch</button>
      </div>
    );
  }
}

export default App;
