import React, {Component} from 'react';
import {TimelineMax, SteppedEase } from 'gsap';

class Test extends Component{
    constructor(){
        super();
        this.state={
            isUpsideDown:false,
            isMenuOpen:false
        }
    }

    changeWorld(){
        console.log('world changing')
        if(this.state.isUpsideDown){
            console.log('upsidedown')
        }else{
            console.log('regular world')
        }

        var tl = new TimelineMax();

            tl
            .to(".regularWorld", 3, {
            webkitMaskPosition:'100%',
            // Stepped Ease is how many frames
            ease: SteppedEase.config(82),
            repeat:0
            })

            tl.addPause(2.9)
        // TweenLite.from('.upsideDownWorld', 1, { webkitMaskPosition:'0px'})
        // TweenLite.to('.upsideDownWorld', 1, { webkitMaskPosition:'100%'})

        
        // setTimeout(() => {
        //     // tl.reverse();
        //     // TweenLite.set('.regularWorld', { webkitMaskPosition:'0px'})
        // }, 2000);
        this.setState({isUpsideDown: !this.state.isUpsideDown})
    }


    render(){
        return(
            <div className="Test">
                <div className='upsideDownWorld'>

                </div>
                <div className='regularWorld'>
                    
                </div>
                <button onClick={()=>this.changeWorld()} style={{ position:'fixed'} }>Switch</button>
            </div>
        )
    }
}

export default Test;