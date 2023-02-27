import { Link } from 'react-router-dom';

import logo1 from '../assets/images/kfc.jpg'
import logo2 from '../assets/images/Mcdonalds.jpg'
import logo3 from '../assets/images/mexican.jpg'
import logo4 from '../assets/images/pizzahut.jpg'
import logo5 from '../assets/images/subway.jpg'
import logo6 from '../assets/images/wraps.jpg'


export const Card = () => {
    return (
    <div className='ui three stackable grid centered'>
    <Link to="/mcdonalds" className='ui card' style={{margin: '2em', padding:'0.5em', backgroundColor: 'black'}}>
        <div className="image">
            <img src={logo2} alt='logo'/>
        </div>
        <div className="content">
            <span className="header" style={{color:'white'}}>McDonalds</span>
            <div className="meta">
            <span style={{color:'grey'}}>$5 Delivery fee * Approx 10min Delivery</span>
            </div>
        </div>
    </Link>
    <Link to="/" className='ui card' style={{margin: '2em', padding:'0.5em', backgroundColor: 'black'}}>
        <div className="image">
            <img src={logo1} alt='logo'/>
        </div>
        <div className="content">
            <span className="header" style={{color:'white'}}>KFC</span>
            <div className="meta">
            <span style={{color:'grey'}}>$4 Delivery fee * Approx 15min Delivery</span>
            </div>
        </div>
    </Link>
    <Link to="/" className='ui card' style={{margin: '2em', padding:'0.5em', backgroundColor: 'black'}}>
        <div className="image">
            <img src={logo5} alt='logo'/>
        </div>
        <div className="content">
            <span className="header" style={{color:'white'}}>Subway</span>
            <div className="meta">
            <span style={{color:'grey'}}>$6 Delivery fee * Approx 25min Delivery</span>
            </div>
        </div>
    </Link>
    <Link to="/" className='ui card' style={{margin: '2em', padding:'0.5em', backgroundColor: 'black'}}>
        <div className="image">
            <img src={logo4} alt='logo'/>
        </div>
        <div className="content">
            <span className="header" style={{color:'white'}}>Pizza Hut</span>
            <div className="meta">
            <span style={{color:'grey'}}>$5 Delivery fee * Approx 20min Delivery</span>
            </div>
        </div>
    </Link>
    <Link to="/" className='ui card' style={{margin: '2em', padding:'0.5em', backgroundColor: 'black'}}>
        <div className="image">
            <img src={logo6} alt='logo'/>
        </div>
        <div className="content">
            <span className="header" style={{color:'white'}}>Safavi</span>
            <div className="meta">
            <span style={{color:'grey'}}>$8 Delivery fee * Approx 25min Delivery</span>
            </div>
        </div>
    </Link>
    <Link to="/" className='ui card' style={{margin: '2em', padding:'0.5em', backgroundColor: 'black'}}>
        <div className="image">
            <img src={logo3} alt='logo'/>
        </div>
        <div className="content">
            <span className="header" style={{color:'white'}}>Osos Mexican</span>
            <div className="meta">
            <span style={{color:'grey'}}>$4 Delivery fee * Approx 15min Delivery</span>
            </div>
        </div>
    </Link>
    </div>
    )
}