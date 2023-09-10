// Створити домашню сторінку зі списком проектів та коротким описом
// кожного з них;

import style from './Home.module.css'

function Home() {

    return (
            <div className='content-wrapper'>
                <h2>Список проектів та їх короткий опис</h2>
                <div className={style.list}>
                    <article>
                        <h3>ReactJS. Основи</h3>
                        Нам необхідно було створити функціональний компонент, який можна використовувати для відображення публікації (як у твітері або фейсбуці).
                    </article>
                    <article>
                        <h3>ReactJS. Хуки</h3>
                        В цьому завданні нам потрібно було розробити щось наближене до телефонної книги на ios/android з пошуком по імені/прізвищу/номеру та з фільтром по гендеру.
                    </article>
                    <article>
                        <h3>Классові компоненти Стан та життєвий цикл</h3>
                        Нашим основним завданням було зробити таймер зворотнього відліку.
                    </article>
                    <article>
                        <h3>ReactJS. Поняття SPA. Навігація</h3>
                        Створення простої SPA з навігацією. На першій сторінці мали бути зображення та текст. На другій сторінці повинні були бути фейкові пости з першої домашки. Третьою мала бути просто плитка 3х3 картинок по типу Інстаграму. На четвертій повинна була бути сторінка з контактами з домашки з хуками. 
                    </article>
                    <article>
                        <h3>ReactJS. Підходи до стилізації. StyledComponents. Animations</h3>
                        Нам необхідно було створити та привести до робочого стану просту форму входу та реєстрації у додатку. 
                    </article>
                    <article>
                        <h3>Redux</h3>
                        Завданням було створити store та зберегти в ньому кілька публікацій з фейковими
                        даними(як перше завдання). Потім треба було створити форму в яку можна ввести такі дані: текст публікації,
                        посилання на зображення і вибір автора з випадаючого списку. І щоб кнопка Add добавляла це все вкінці після фейкових "Твітів".
                </article>
                </div>
            </div>
    );
}


export default Home;