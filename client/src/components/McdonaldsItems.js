import { Button } from 'semantic-ui-react'

import logo1 from '../assets/images/Big-Mac.png'
import logo2 from '../assets/images/Cheeseburger.png'
import logo3 from '../assets/images/Coke-Classic_0.png'
import logo4 from '../assets/images/Fries.png'
import logo5 from '../assets/images/McNuggets-6.png'
import logo6 from '../assets/images/OREO-Cookies.png'


export const McdonaldsItems = () => {

    function addItem(e) {
        console.log(e);
      }

    return (
    <div className='ui three stackable grid centered'>
    <div className='ui card' style={{margin: '2em', padding:'0.5em', backgroundColor: 'black'}}>
        <div className="image">
            <img src={logo1} alt='logo'/>
        </div>
        <div className="content">
            <span className="header" style={{color:'white'}}>BigMac</span>
            <div>
            <span style={{color:'white'}}>$8</span>
            </div>
                <Button primary style={{ margin: '1em 0 0 0', padding: '1em 1em' }} onClick={addItem}>
                    Add to Cart
                </Button>
        </div>
    </div>
    <div className='ui card' style={{margin: '2em', padding:'0.5em', backgroundColor: 'black'}}>
        <div className="image">
            <img src={logo2} alt='logo'/>
        </div>
        <div className="content">
            <span className="header" style={{color:'white'}}>CheeseBurger</span>
            <div>
            <span style={{color:'white'}}>$4</span>
            </div>
                <Button primary style={{ margin: '1em 0 0 0', padding: '1em 1em' }} onClick={addItem}>
                    Add to Cart
                </Button>
        </div>
    </div>
    <div className='ui card' style={{margin: '2em', padding:'0.5em', backgroundColor: 'black'}}>
        <div className="image">
            <img src={logo3} alt='logo'/>
        </div>
        <div className="content">
            <span className="header" style={{color:'white'}}>Coke</span>
            <div>
            <span style={{color:'white'}}>$3</span>
            </div>
                <Button primary style={{ margin: '1em 0 0 0', padding: '1em 1em' }} onClick={addItem}>
                    Add to Cart
                </Button>
        </div>
    </div>
    <div className='ui card' style={{margin: '2em', padding:'0.5em', backgroundColor: 'black'}}>
        <div className="image">
            <img src={logo4} alt='logo'/>
        </div>
        <div className="content">
            <span className="header" style={{color:'white'}}>Fries</span>
            <div>
            <span style={{color:'white'}}>$3</span>
            </div>
                <Button primary style={{ margin: '1em 0 0 0', padding: '1em 1em' }} onClick={addItem}>
                    Add to Cart
                </Button>
        </div>
    </div>
    <div className='ui card' style={{margin: '2em', padding:'0.5em', backgroundColor: 'black'}}>
        <div className="image">
            <img src={logo5} alt='logo'/>
        </div>
        <div className="content">
            <span className="header" style={{color:'white'}}>McNuggets</span>
            <div>
            <span style={{color:'white'}}>$4</span>
            </div>
                <Button primary style={{ margin: '1em 0 0 0', padding: '1em 1em' }} onClick={addItem}>
                    Add to Cart
                </Button>
        </div>
    </div>
    <div className='ui card' style={{margin: '2em', padding:'0.5em', backgroundColor: 'black'}}>
        <div className="image">
            <img src={logo6} alt='logo'/>
        </div>
        <div className="content">
            <span className="header" style={{color:'white'}}>McFlurry-Oreo</span>
            <div>
            <span style={{color:'white'}}>$4</span>
            </div>
                <Button primary style={{ margin: '1em 0 0 0', padding: '1em 1em' }} onClick={addItem}>
                    Add to Cart
                </Button>
        </div>
    </div>
    </div>
    )
}