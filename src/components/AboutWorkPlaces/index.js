import style from './WorkPlaces.module.css';
import hostadvice from './assets/hostadvice.png';


function AboutWorkPlaces(){
    return (
        <div className='content-wrapper'>
            <h2>WorkPlaces</h2>
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
                </article>
            </div>
        </div>
    )
}

export default AboutWorkPlaces