import logo from '../assets/images/logo-social.png'

export const Card = () => {
    return (
    <div className='ui card'>
        <div className="image">
            <img src={logo} alt='logo'/>
        </div>
        <div className="content">
            <span className="header">Resturant Name</span>
            <div className="meta">
            <span>Delivery fee/ Delivery Time</span>
            </div>
        </div>
    </div>
    )
}