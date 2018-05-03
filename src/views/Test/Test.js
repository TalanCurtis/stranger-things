import React, {Component} from 'react';
import {TweenLite, TimelineLite, TweenMax, TimelineMax, SteppedEase } from 'gsap';

class Test extends Component{
    constructor(){
        super();
        this.state={
            isUpsideDown:false
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
            .to(".upsideDownWorld", 1, {
            webkitMaskPosition:'100%',
            ease: SteppedEase.config(22),
            repeat:0
            })

        // TweenLite.from('.upsideDownWorld', 1, { webkitMaskPosition:'0px'})
        // TweenLite.to('.upsideDownWorld', 1, { webkitMaskPosition:'100%'})

        
        setTimeout(() => {
            TweenLite.set('.upsideDownWorld', { webkitMaskPosition:'0px'})
        }, 2000);
        this.setState({isUpsideDown: !this.state.isUpsideDown})
    }
    render(){
        return(
            <div className="Test">
                <div className='regularWorld'>
                    
                </div>
                <div className='upsideDownWorld'>

                </div>
                <button onClick={()=>this.changeWorld()} style={{ position:'fixed'} }>Switch</button>
            </div>
        )
    }
}

export default Test;