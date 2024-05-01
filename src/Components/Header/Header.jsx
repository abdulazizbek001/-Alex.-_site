import './Header.scss';
import HeaderLogo from '../../assets/svg/Logo.svg'
import HeaderImg from '../../assets/svg/Header_img.svg'
import HeaderMoon from '../../assets/svg/Header_moon.svg'

function Header() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header_box">
                        <img src={HeaderLogo} alt="logo" width={114} height={41} />
                        <ul className='header_list'>
                                <li>
                                    <a href="#">Services</a>
                                </li>
                                <li>
                                    <a href="#">Portfolios</a>
                                </li>
                                <li>
                                    <a href="#">Experience</a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                                <li className='header_img'>
                                    <img src={HeaderImg} alt="Header_img" width={11} height={3} />
                                </li>
                        </ul>
                        <div className="header_right">
                            <img src={HeaderMoon} alt="header_moon" width={17} height={18} />
                            <button>Resume</button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;