// Створити сторінку з детальним описом проекту, що містить зображення
// проекту, опис функціоналу та використовуваних технологій;

import style from './Skills.module.css'


function Skills(){
    return (
        <div className={style.wrap}>
            <h2>Здобуті навички</h2>
            <div className={style.content}>
                <article>
                    <h4>Навички з Basic курсу</h4>
                    <p><b>HTML (HyperText Markup Language):</b></p>
                    <p>HTML є основною мовою розмітки для створення веб-сторінок. Вона визначає структуру документа, включаючи текстовий контент, зображення, посилання та інші елементи, які відображаються в браузері. HTML використовує теги, які обгортають контент і задають його функцію та вигляд.</p>
                    <hr />
                    <p><b>CSS (Cascading Style Sheets):</b></p>
                    <p>CSS використовується для стилізації веб-сторінок, надаючи їм вигляд та відмінності від HTML-структури. Це означає встановлення кольорів, шрифтів, розташування та інших аспектів візуального дизайну веб-сайту. CSS дозволяє розділити структуру та вигляд, що спрощує підтримку та редагування веб-сторінок.</p>
                    <hr />
                    <p><b>SASS (Syntactically Awesome Style Sheets):</b></p>
                    <p>SASS є метамовою для CSS, яка надає додатковий функціонал та удосконалену синтаксичну конструкцію. Він дозволяє використовувати змінні, вкладені стилі, міксіни та інші зручні функції, щоб покращити розробку та підтримку стилів. SASS файли зазвичай компілюються в звичайний CSS перед розміщенням на веб-сайті.</p>
                    <hr />
                    <p><b>SCSS (Sassy CSS):</b></p>
                    <p>SCSS є розширенням SASS та використовує схожий синтаксис, але зберігає сумісність з CSS. Це означає, що ви можете почати використовувати SCSS, додавши змінні, міксіни та інші функції до існуючих CSS файлів без жодних змін. SCSS також потребує компіляції до CSS перед використанням на веб-сторінках.</p>
                    <hr />
                    <p>У підсумку, HTML визначає структуру сторінки, CSS відповідає за її стиль, а SASS та SCSS полегшують розробку та підтримку стилів, забезпечуючи додаткові функції та організаційну зручність.</p>
                </article>
                <article>
                    <h4>Загальний опис набутих скілів з курсу Advanced</h4>
                    <ul>
                        <li><b>Основи синтаксису:</b> вирази, інструкція і крапка з комою</li>
                        <li><b>Змінні:</b> оголошення let/const, імена змінних</li>
                        <li><b>Типи примітивів;</b></li>
                        <li><b>Вивід даних:</b> console.log, alert</li>
                        <li><b>Отримання даних від користувача:</b> prompt та confirm</li>
                        <li><b>Числа.</b> Основні оператори.</li>
                        <li><b>Вбудовані об'єкти:</b> Math и Number</li>
                        <li><b>Рядки.</b> Конкатенація и шаблонні рядки. Методи рядків.</li>
                        <li><b>Логічні оператори:</b> &&, ||, !</li>
                        <li><b>Розгалуження:</b> if, else, else if</li>
                        <li><b>Variable scope</b></li>
                        <li><b>Тернарний оператор</b></li>
                        <li><b>switch</b></li>
                        <li><b>Цикли</b> while, do...while і for</li>
                        <li><b>Директиви break та continue</b></li>
                        <li><b>Масиви:</b> літерал массива, элементи, індексація, length</li>
                        <li><b>Передача за посиланням і за значенням</b></li>
                        <li><b>Перебор масива</b> і цикл for...of</li>
                        <li><b>Методи масивів:</b> split (і join), indexOf і includes, push і pop, slice і splice, concat</li>
                        <li><b>Об'єкти window і document</b></li>
                        <li><b>Ієрархія DOM-вузлів</b></li>
                        <li><b>Пошук DOM-вузлів з querySelector</b></li>
                        <li><b>Властивості textContent</b></li>
                        <li><b>Робота з classList та атрибутами</b></li>
                        <li><b>Створення вузлів</b></li>
                        <li><b>Вставка вузлів:</b> appendChild, insertBefore, append, prepend і тп.</li>
                        <li><b>Видалення:</b> removeChild і remove</li>
                        <li><b>Парс рядків:</b> innerHTML і insertAdjacentHTML</li>
                        <li><b>Події.</b> Створення та видалення слухачів</li>
                        <li><b>Об'єкт події</b>- Поведінка за замовчуванням</li>
                        <li><b>click, input, submit, keyboard events</b></li>
                        <li><b>Поширення подій</b></li>
                        <li><b>Виниклення подій</b></li>
                        <li><b>Делегування подій</b></li>
                        <li><b>npm-пакети і npm-скрипти</b></li>
                    </ul>
                    <h4>Коротко:</h4>
                    <p>Вкладка <b>Console в Chrome Devtools</b> використовується для відображення і взаємодії з консоллю браузера, де розглядаються основні аспекти розробки веб-сторінок і JavaScript-програмування.</p>
                    <p><b>Основи синтаксису:</b> В цьому розділі можна перевірити правильність синтаксису JavaScript, включаючи вирази, інструкції та використання крапки з комою.</p>
                    <p><b>Змінні:</b> Тут можна оголошувати змінні, використовувати let та const, та присвоювати їм імена.</p>
                    <p><b>Типи примітивів:</b> Показується інформація про різні примітивні типи даних, такі як числа, рядки, булеві значення і т. д.</p>
                    <p><b>Вивід даних:</b> Використовується для виведення даних в консоль, наприклад, з допомогою console.log або використання alert для показу повідомлень користувачу.</p>
                    <p><b>Отримання даних від користувача</b> Можливість взаємодії з користувачем через виклик функцій prompt та confirm для отримання введених значень.</p>
                    <p><b>Числа. Основні оператори:</b> В цьому розділі можна проводити операції з числами та ознайомитися з основними математичними операціями.</p>
                    <p><b>Вбудовані об'єкти:</b> Покаже інформацію про вбудовані об'єкти, такі як Math і Number, та їх методи та властивості.</p>
                    <p><b>Рядки. Конкатенація і шаблонні рядки. Методи рядків:</b> Тут можна працювати з рядками, конкатенувати їх, використовувати шаблонні рядки та вивчати рядкові методи.</p>
                    <p><b>Логічні оператори:</b> Пояснює використання логічних операторів, таких як &&, || і !.</p>
                    <p><b>Розгалуження:</b> Вивчається використання розгалужень з if, else та else if.</p>
                    <p><b>Variable scope:</b> Досліджує область видимості змінних і їхній доступ до різних частин коду.</p>
                    <p><b>Тернарний оператор:</b> Пояснює використання тернарного оператора для короткого запису умовних виразів.</p>
                    <p><b>switch:</b> Описує використання оператора switch для розгалуження коду на основі значень.</p>
                    <p><b>Цикли while, do...while і for:</b> Показує використання різних типів циклів для повторення дій у коді.</p>
                    <p><b>Директиви break та continue:</b> Пояснює роботу директив break та continue для керування виконанням циклів.</p>
                    <p><b>Масиви:</b> Досліджує літерал масива, індексацію, властивість length та роботу з масивами.</p>
                    <p><b>Передача за посиланням і за значенням:</b> Пояснює різницю між передачею за посиланням і за значенням у функціях.</p>
                    <p><b>Перебір масива і цикл for...of:</b> Показує, як перебирати масиви за допомогою циклу for...of.</p>
                    <p><b>Методи масивів:</b> Пояснює різні методи масивів, такі як split, join, indexOf, includes, push, pop, slice, splice, concat і багато інших.</p>
                    <p><b>Об'єкти window і document:</b> Вивчає інформацію про об'єкти window і document в браузері.</p>
                    <p><b>Ієрархія DOM-вузлів:</b> Пояснює структуру ієрархії DOM-вузлів (Document Object Model).</p>
                    <p><b>Пошук DOM-вузлів з querySelector:</b> Дозволяє шукати DOM-вузли за допомогою CSS-подібних селекторів.</p>
                    <p><b>Властивості textContent:</b> Показує, як встановлювати та отримувати вміст тексту DOM-вузлів.</p>
                    <p><b>Робота з classList та атрибутами:</b> Пояснює роботу з класами та атрибутами DOM-вузлів.</p>
                    <p><b>Створення вузлів:</b> Показує, як створювати нові DOM-вузли.</p>
                    <p><b>Вставка вузлів:</b> Пояснює методи для вставки нових вузлів в DOM.</p>
                    <p><b>Видалення:</b> Пояснює, як видаляти DOM-вузли.</p>
                    <p><b>Парс рядків:</b> Пояснює використання innerHTML і insertAdjacentHTML для вставки HTML-коду в DOM.</p>
                    <p><b>Події. Створення та видалення слухачів:</b> Розглядає роботу з подіями, включаючи створення та видалення слухачів подій.</p>
                    <p><b>Об'єкт події- Поведінка за замовчуванням:</b> Пояснює об'єкт події та можливість впливу на поведінку за замовчуванням.</p>
                    <p><b>click, input, submit, keyboard events:</b> Розглядає події кліку, введення, відправлення форм та події клавіш.</p>
                    <p><b>Поширення подій:</b> Пояснює концепцію поширення подій між DOM-вузлами.</p>
                    <p><b>Виниклення подій:</b> Розглядає виникнення подій та їх обробку.</p>
                    <p><b>Делегування подій:</b> Пояснює використання делегування подій для оптимізації обробки багатьох подій на одному батьківському елементі.</p>
                    <p><b>chatty events (scroll і input) і throttling\debouncing с Lodash.throttle і Lodash.debounce:</b> Розглядає особливості подій "scroll" і "input" та використання бібліотек Lodash для керування частотою виклику функцій.</p>
                    <p><b>IntersectionObserver і його поліфіл с polyfill.io:</b> Пояснює використання IntersectionObserver для відстеження видимості елементів на сторінці та можливість використання поліфілу для підтримки старих браузерів.</p>
                    <p><b>scrollspy і image lazy load:</b> Розглядає використання scrollspy для активного відстеження позиції прокрутки сторінки та ліниве завантаження зображень.</p>
                    <p><b>Node.js і npm:</b> Введення до Node.js та системи пакетного управління npm.</p>
                    <p><b>npm-пакети і npm-скрипти:</b> Розглядає роботу з пакетами та скриптами, доступними в npm, для розширення функціональності веб-додатків.</p>
        </article><article>
                <h4>React</h4>
                <p><b>React</b> - це бібліотека JavaScript для побудови інтерфейсів користувача. Основні навички, які потрібні для роботи з React:</p>
                <ol>
                    <li><b>JSX (JavaScript XML):</b> Вміння створювати компоненти інтерфейсу за допомогою синтаксису, схожого на HTML, але вписаного в JavaScript. Це дозволяє зручно описувати структуру інтерфейсу</li>
                    <li><b>Компоненти:</b> Розуміння концепції компонентів, які представляють невеликі ізольовані частини інтерфейсу. Навички створення, комбінування і використання компонентів для побудови складних інтерфейсів</li>
                    <li><b>Стан і властивості:</b> Робота зі станом компонентів (дані, які можуть змінюватися) та передача властивостей між компонентами для динамічного відображення даних</li>
                    <li><b>Життєвий цикл компонентів:</b> Розуміння та використання методів життєвого циклу компонентів для контролю над різними етапами їхнього життя</li>
                    <li><b>Взаємодія зі зовнішнім світом:</b> Взаємодія з API, обробка подій, отримання та відправлення даних з сервера</li>
                    <li><b>Маршрутизація:</b> Використання бібліотеки для маршрутизації (наприклад, React Router) для створення односторінкових додатків з різними видами вмісту</li>
                    <li><b>Зв'язування з даними:</b> Використання патернів, таких як Redux або контекст, для керування станом додатка та передачі даних між компонентами</li>
                    <li><b>Стилізація:</b> Знання різних способів стилізації компонентів, таких як використання CSS модулів, бібліотек стилів (наприклад, Styled Components) або CSS препроцесорів</li>
                    <li><b>Адаптивний дизайн:</b> Робота з медіа-запитами та іншими техніками для створення інтерфейсів, які добре виглядають на різних пристроях і екранах</li>
                    <li><b>Відладка і оптимізація:</b> Вміння відлагоджувати проблеми, визначати бутлери для продуктивності і покращувати швидкість роботи додатків</li>
                </ol>
                <p>Загалом, робота з React вимагає розуміння принципів компонентної розробки, управління станом та зв'язуванням з даними.</p>
            </article><article>
                <h4>Redux</h4>
                <p><b>Redux</b> - це бібліотека для управління станом додатків у платформі JavaScript, особливо популярна в контексті розробки веб-додатків. Вона допомагає керувати станом додатка централізовано, що спрощує відстеження змін та їх реакцію.</p>
                <p><b>Основні концепції Redux:</b></p>
                <ol>
                    <li><b>Store (Сховище):</b> Це центральне місце, де зберігається весь стан додатка. Він представляє собою не змінний об'єкт, доступ до якого забезпечується лише через спеціальні функці</li>
                    <li><b>Actions (Дії):</b> Дії - це об'єкти, які описують події або зміни, що відбуваються в додатку. Вони передаються до Redux для оновлення стан</li>
                    <li><b>Reducers (Зведення):</b> Редуктори - це чисті функції, які обробляють дії та змінюють стан додатка відповідно до них. Кожен редуктор відповідає за конкретну частину стан</li>
                    <li><b>Store Updates (Оновлення сховища):</b> Коли дія передається редукторам, вони змінюють стан і повертають новий стан. Redux забезпечує автоматичну реакцію на зміни, оновлюючи відповідні частини інтерфейс</li>
                    <li><b>UI Binding (Зв'язування з інтерфейсом):</b> Redux зазвичай використовується разом з бібліотеками для зв'язування інтерфейсу користувача, такими як React. За допомогою спеціальних компонентів, підключених до Redux, інтерфейс може реагувати на зміни стан</li>
                </ol>
                <p>Загалом, Redux допомагає зменшити складність управління станом додатка та сприяє кращій передбачуваності його поведінки.</p>
            </article><article>
                <h4>React Router</h4>
                <p><b>React Router</b> - це бібліотека для навігації та маршрутизації в односторінкових додатках на базі React. Вона дозволяє створювати додатки з багатосторінковою логікою без перезавантаження сторінки, а замість цього змінювати вміст на сторінці динамічно за допомогою компонентів.</p>
                <p><b>Основні поняття та можливості React Router:</b></p>
                <ol>
                    <li><b>Маршрути</b>: Визначення шляхів URL та їх співставлення зі специфічними компонентами для відображення.</li>
                    <li><b>Вбудовані компоненти маршрутизації</b>: React Router надає компоненти, такі як `Route`, `Link`, `Switch`, які допомагають визначати маршрути та створювати навігаційні посилання. </li>
                    <li><b>Динамічні параметри маршруту</b>: Здатність передавати параметри через URL для створення динамічних маршрутів, наприклад, `/:id` для відображення різних деталей на основі ідентифікатора.</li>
                    <li><b>Вкладені маршрут</b>*: Можливість вкладати компоненти маршрутів один в одного, щоб створювати складні ієрархії вмісту.</li>
                    <li><b>Перехід історії</b>: Використання браузерної історії для зміни URL без перезавантаження сторінки, а також можливість використовувати програмні команди для навігації.</li>
                    <li><b>404 сторінки</b>: Можливість визначити спеціальні маршрути для обробки неіснуючих сторінок (помилок 404).</li>
                    <li><b>Маршрутизація за допомогою компонентів</b>: React Router дозволяє використовувати компоненти для визначення маршрутів замість файлів конфігурації.</li>
                    <li><b>Історія браузера та хеші маршрутів</b>: Підтримка різних типів історії (HTML5 History API та хеші) для навігації.</li>
                </ol>
                <p>React Router допомагає створювати більш динамічні та інтерактивні додатки, де зміна сторінок відбувається без перезавантаження сторінки, що покращує взаємодію з користувачем та загальний досвід використання додатка.</p>
            </article>
            </div>
        </div>
    )
}

export default Skills