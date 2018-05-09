import React, {Component} from 'react';

class Page1 extends Component{

    render(){
        return(
            <div className="Page1">
                Page1 View
                <button onClick={()=>console.log('clicked')}>push me</button>
            </div>
        )
    }
}

export default Page1;