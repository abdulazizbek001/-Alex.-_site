import './Hero.scss';
import Hero1 from  '../../assets/svg/Instagram.svg';
import Hero2 from '../../assets/svg/Github.svg';
import Hero3 from '../../assets/svg/Twitter.svg';
import Hero4 from '../../assets/svg/Linkedin.svg';
import HeroImg from '../../assets/img/Hero_Image.jpg';

function Hero() {
    return (
        <>
            <section className="hero">
                <div>
                    <h2>My name is</h2>
                    <h1>Alex <span>Smith.</span></h1>
                    <p>Creative front-end developer with more than +5 years of experience in enterprise companies and startups. Proficient in JavaScript, Angular, and React. Passionate about UI/UX</p>
                    <ul>
                        <li>
                            <img src={Hero1} alt='heroimg'  width={24} height={24} />
                        </li>
                        <li>
                            <img src={Hero2} alt='heroimg'  width={24} height={24} />
                        </li>
                        <li>
                            <img src={Hero3} alt='heroimg'  width={24} height={24} />
                        </li>
                        <li>
                            <img src={Hero4} alt='heroimg'  width={24} height={24} />
                        </li>
                    </ul>
                </div>
                <img src={HeroImg} alt="HeroImg" width={545} height={496} />
            </section>
        </>
    );
}

export default Hero;