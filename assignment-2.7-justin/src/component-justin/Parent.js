import React from 'react'; 
import lightOff from './assets/images/light-off.png';
import lightOn from './assets/images/light-on.png';


class LightBulb extends React.Component {
    constructor() {
        super();
        this.state = {
            index: 0,
            imgList: [lightOff, lightOn,]
        };

        this.toggleImage = this.toggleImage.bind(this);
    }

    toggleImage(){
        if (this.state.index + 1 === this.state.imgList.length) {
            this.setState({
                index: 0
            }) // if last item in array iterated, reset index to 0.
        }
        else {
            this.setState({
                index: this.state.index + 1
            })
        }
    }

    render() {
        return(
            <>
            <div>
            <img src={this.state.imgList[this.state.index]} />
            <input type='button' onClick={this.toggleImage} value='toggle' />
            </div> 
            </>
        );
      }      
}

export default LightBulb;