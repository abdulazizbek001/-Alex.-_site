import './Footer.scss'
import footer1 from '../../assets/img/footer1.jpg'
import footer2 from '../../assets/img/footer2.jpg'
import footer3 from '../../assets/img/footer3.png'
import Link from '../../assets/svg/Link.svg'
import footerLinks1 from  '../../assets/svg/Instagram.svg';
import footerLinks2 from '../../assets/svg/Github.svg';
import footerLinks3 from '../../assets/svg/Twitter.svg';
import footerLinks4 from '../../assets/svg/Linkedin.svg';

function Footer() {
    return (
        <>

            <div className="container">
                <section className="footer">
                    <div className="footer-top">
                        <h4 className='footer_title4'>My works</h4>
                        <h2>Featured Portfolios</h2>
                    </div>
                    <div className="footer-center">
                        <ul className='footer_list'>
                            <li>
                                <img src={footer1} alt="footer1" width={361} />
                                <h4 className='footer_title'> Agency Website.</h4>
                                <span>
                                    <button>WordPress</button>
                                    <img src={Link} alt="Footer_img" width={24} height={24} />
                                </span>
                            </li>
                            <li>
                                <img src={footer2} alt="footer2" width={361} />
                                <h4 className='footer_title'>Dashboard Website.</h4>
                                <span>
                                    <button>React</button>
                                    <img src={Link} alt="Footer_img" width={24} height={24} />
                                </span>
                            </li>
                            <li>
                                <img className='footerimg3' src={footer3} alt="footer3" width={361} />
                                <h4 className='footer_title'>Support Center Website.</h4>
                                <span>
                                    <button>PHP</button>
                                    <img src={Link} alt="Footer_img" width={24} height={24} />
                                </span>
                            </li>
                        </ul>
                        <ul className="footer_links-list">
                            <li>
                                <img src={footerLinks1} alt="footer" width={20} height={20} />
                            </li>
                            <li>
                                <img src={footerLinks2} alt="footer" width={20} height={20} />
                            </li>
                            <li>
                                <img src={footerLinks3} alt="footer" width={20} height={20} />
                            </li>
                            <li>
                                <img src={footerLinks4} alt="footer" width={20} height={20} />
                            </li>
                        </ul>
                        <p className="footer_bottom-text">© 2022  -  DevChapter</p>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Footer