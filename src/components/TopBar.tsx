import './TopBar.css'
import Logo from '../assets/logo.png'


const TopBar = () => {
    return (
        <div className='top-bar'>
            <img src={Logo} className='logo' alt="ShowGenius Logo" />
            <h2>ShowGenius</h2>
        </div>
    )
}

export default TopBar