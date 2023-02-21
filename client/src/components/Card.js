import logo from '../assets/images/logo-social.png'

export const Card = () => {
    return (
    <div className='ui card'>
        <div className="image">
            <img src={logo} alt='logo'/>
        </div>
        <div class="content">
            <span className="header">Resturant Name</span>
            <div class="meta">
            <span>Delivery fee/ Delivery Time</span>
            </div>
        </div>
    </div>
    )
}