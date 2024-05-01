import './Info.scss'
import InfoImg1 from '../../assets/svg/Infoimg1.svg'
import InfoImg2 from '../../assets/svg/Infoimg2.svg'
import InfoImg3 from '../../assets/svg/Infoimg3.svg'

function Info() {
    return (
        <>
            <section className="info">
                <div className="container">
                    <h4 className='info_title'>Services</h4>
                    <h2 className='info_title2'>Specialized in</h2>
                    <ul>
                        <li>
                            <img src={InfoImg1} alt="" width={56} height={56} />
                            <h5>UI/UX Design</h5>
                            <p>Turn what you have in mind of a digital product into reality. For any platform you consider.</p>
                        </li>
                        <li>
                            <img src={InfoImg2} alt="" width={56} height={56} />
                            <h5>Application Development</h5>
                            <p>Standard designing, building, and implementing your applications with documentation.</p>
                        </li>
                        <li>
                            <img src={InfoImg3} alt="" width={56} height={56} />
                            <h5>Web Development</h5>
                            <p>Create and maintain your websites and also take care of its performance and traffic capacity.</p>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Info