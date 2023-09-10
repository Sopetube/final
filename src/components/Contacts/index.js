import style from './Contacts.module.css'
import linkedin from './assets/linkedin.png';
import instagram from './assets/instagram.webp';
import telegram from './assets/Telegram.webp';

function Contacts(){
    return (
        <div className='content-wrapper'>
            <h2>Contacts</h2>
            <div className='content'>
                <article className={style.contactbox}>
                    <p>
                        <a href='https://www.linkedin.com/in/vlastyslav/' target="_blank" rel="noreferrer" >
                            <img src={linkedin} alt='Linkedin logo' className={style.social}/>
                        </a>
                            @Vlastyslav
                    </p>
                    <p>
                        <a href='https://www.instagram.com/sopetube/' target="_blank" rel="noreferrer" >
                            <img src={instagram} alt='Instagram logo' className={style.social}/>
                        </a>
                        @sopetube
                    </p>
                    <p>
                        <a href='https://t.me/sopetube' target="_blank" rel="noreferrer">
                            <img src={telegram} alt='Telegram logo' className={style.social}/>
                        </a>
                        @sopetube
                    </p>
                </article>
                <div>
                
                </div>
            </div>
        </div>
    )
}

export default Contacts