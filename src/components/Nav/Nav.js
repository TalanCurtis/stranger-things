import React, {Component} from 'react';
import {TweenLite, TimelineMax} from 'gsap';

class Nav extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        }
    }

    handleOpenMenu(){
        let animation = new TimelineMax()
        this.setState({isOpen:!this.state.isOpen})
        console.log('open menu', this.state.isOpen, animation.isActive())
        
        if(!this.state.isOpen){
            animation.set('.onBottom' , {opacity: 0, visibility:'visible', width:"0px", height:"0px", borderRadius:'0% 50% 50% 50%' })
            animation.to('.onBottom', 1, {opacity: 1, visibility:'visible', width:"100vw", height:"100vh", borderRadius:'0%'})
        }else{
            animation.to('.onBottom', 1, {opacity:0, visibility:'visible', width:"0px", height:"0px", borderRadius:'0% 50% 50% 50%' })
            .to('.onBottom', .1, {visibility:'hidden'})
        }
    }

    render() {
        return (
            <div className='Nav'>
                    <div>
                        <div className='onBottom'>this is thi</div>
                    </div>
                    <button className='NavButton' onClick={()=>this.handleOpenMenu()}>Open</button>
            </div>
        )
    }
}

export default Nav;