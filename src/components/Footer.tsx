import './Footer.css'
import { FaAppStoreIos, FaGooglePlay } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="footer">
            <p>© 2025 ShowGenius. All rights reserved.</p>
            <div className="social-links">
                <a href="https://play.google.com/store/apps/details?id=com.showgeniousai" target="_blank" rel="noopener noreferrer"><FaGooglePlay /> Google Play</a>
                <a href="https://apps.apple.com/us/app/showgenius-ai-movies-tv-shows/id6677037386" target="_blank" rel="noopener noreferrer"><FaAppStoreIos /> Play Store</a>
            </div>
            <p>Contact us at <a href="https://anilguvenc.web.app">@anilgnvc</a></p>
        </div>
    )
}

export default Footer