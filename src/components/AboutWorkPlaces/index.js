import style from './WorkPlaces.module.css';
import hostadvice from './assets/hostadvice.png';


function AboutWorkPlaces(){
    return (
        <div className='content-wrapper'>
            <h2>Де працював</h2>
            <div className='content'>
                <article className={style.place}>
                    <h3>HostAdvice</h3>
                    <img src={hostadvice} alt='logo'></img>
                    <hr/>
                    <p>
                    <b>Web Operations</b><br/>
                    <b>Вебсайт:</b> <a href='https://hostadvice.com/'>HostAdvice.com</a><br/>
                    <b>CMS:</b> WordPress<br/>
                    Повний робочий день<br/>
                    черв 2019 р. – дотепер<br/>
                    <b>Навички:</b> Website Administration · Customer Support · Content Management · Affiliate Marketing<br/>
                    </p>
                    <p><b>Короткий опис: </b>HostAdvice.com provides professional web hosting reviews fully independent of any other entity. Our reviews are unbiased, honest, and apply the same evaluation standards to all those reviewed. While monetary compensation is received from a few of the companies listed on this site, compensation of services and products have no influence on the direction or conclusions of our reviews. Nor does the compensation influence our rankings for certain host companies. This compensation covers account purchasing costs, testing costs and royalties paid to reviewers.</p>
                    
                </article>
            </div>
        </div>
    )
}

export default AboutWorkPlaces