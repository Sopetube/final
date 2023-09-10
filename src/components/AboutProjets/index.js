import React, { useState } from 'react'; 
    
const lessonsData = [
    {   
        id: 1,
        title: 'ReactJS. Основи',
        images: ['https://i.imgur.com/5fvYnE0.png'],
        text: 'Нам необхідно було створити функціональний компонент, який можна використовувати для відображення публікації (як у твітері або фейсбуці).'
    },{
        id: 2,
        title: 'ReactJS. Хуки',
        images: ['https://i.imgur.com/nUtWy2R.gif'],
        text: 'В цьому завданні нам потрібно було розробити щось наближене до телефонної книги на ios/android з пошуком по імені/прізвищу/номеру та з фільтром по гендеру.'
    },{
        id: 3,
        title: 'Классові компоненти Стан та життєвий цикл',
        images: ['https://i.imgur.com/a4rU0Cq.gif'],
        text: 'Нашим основним завданням було зробити таймер зворотнього відліку',
    },{
        id: 4,
        title: 'ReactJS. Поняття SPA. Навігація',
        images: [
            'https://i.imgur.com/dvlbP72.gif',
        ],
        text: 'Створення простої SPA з навігацією. На першій сторінці мали бути зображення та текст. На другій сторінці повинні були бути фейкові пости з першої домашки. Третьою мала бути просто плитка 3х3 картинок по типу Інстаграму. На четвертій повинна була бути сторінка з контактами з домашки з хуками.',
    },{
        id: 5,
        title: 'ReactJS. Підходи до стилізації. StyledComponents. Animations',
        images: [
            'https://i.imgur.com/hMgpjW1.gif',
        ],
        text: 'Нам необхідно було створити та привести до робочого стану просту форму входу та реєстрації у додатку.',
    },{
        id: 6,
        title: 'Redux',
        images: ['https://i.imgur.com/gzg7JJ5.png'],
        text: 'Завданням було створити store та зберегти в ньому кілька публікацій з фейковими даними(як перше завдання). Потім треба було створити форму в яку можна ввести такі дані: текст публікації посилання на зображення і вибір автора з випадаючого списку. І щоб кнопка Add добавляла це все вкінці після фейкових "Твітів".',
    }
]

function AboutProjects(){
    const [openedId, setOpenedId] = useState(null); 

    const toggleProject = (projectId) => {
        if (openedId === projectId) {
            setOpenedId(null);
        } else {
            setOpenedId(projectId);
        }
    };

    return (
        <div className='content-wrapper'>
            <h2>Детальний опис проекту:</h2>
            <div className='content'>
                {lessonsData.map(item => (
                    <article 
                        key={item.id}
                        onClick={() => toggleProject(item.id)}
                    >
                        <h3>{item.title}</h3>
                        {openedId === item.id && (
                            <>
                                <p>{item.text}</p>
                                {item.images.map(url => (
                                    <img src={url} alt='hw' key={url}/>
                                ))} 
                            </>
                        )}
                    </article>
                ))}
            </div>
        </div>
    )
}

export default AboutProjects