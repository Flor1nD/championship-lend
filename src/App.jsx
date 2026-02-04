import './App.css'
import { IconCode, IconPalette, IconCalendarEvent, IconSchool, IconDeviceMobile, IconDeviceLaptop, IconLaurelWreath1, IconLaurelWreath2, IconLaurelWreath3, IconBrandTelegram, IconBrandVk,  } from '@tabler/icons-react'
import { useEffect, useRef, useState } from 'react'

function App() {
    const aboutRef = useRef(null)
    const prizesRef  = useRef(null)
    const [email, setEmail] = useState('')

    const getEmail = (email) => {
        const trimmedEmail = email ? email.trim() : '';

        if (!trimmedEmail) {
            alert("Введите email адрес");
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(trimmedEmail)) {
            alert("Некорректный email адрес");
            return false;
        }
        console.log("Рассылка подписана на", email);
        setEmail("");
        return true;

    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                        observer.unobserve(entry.target)
                    }
                })
            },
            {
                threshold: 0.3
            }
        )

        if (aboutRef.current) {
            observer.observe(aboutRef.current)
        }

        if (prizesRef.current) {
            observer.observe(prizesRef.current)
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current)
            }

            if (prizesRef.current) {
                observer.unobserve(prizesRef.current)
            }
        }
    }, [])



    return (
        <>
            <hero>
                <div className="title">
                    <h1>Чемпионат</h1>
                    <h1>VK-Tech</h1>
                    <p>Конкурс для студентов колледжей и вузов по направлениям разработки и дизайна</p>
                    <p className="date"><IconCalendarEvent stroke={0.8} className="dateIcon"/>15 марта - 19 апреля 2026</p>
                </div>
                <button>Регистрация</button>
            </hero>

            <div className="about" ref={aboutRef}>
                <h1>О мероприятии</h1>
                <p>Чемпионат VK-Tech - прекрасная возможность для студентов продемонстрировать свои навыки разработки и дизайна, получить ценные призы и шанс начать карьеру в одной из ведущих компаний России</p>
                <div className="categories">
                    <div className="category">
                        <IconCode stroke={1} className="icon" width={50} height={50}/>
                        <h3>Разработка</h3>
                        <p>Создание веб-приложений, бэкенд-разработка, работа с API и базами данных</p>
                    </div>
                    <div className="category">
                        <IconPalette stroke={1} className="icon" width={50} height={50}/>
                        <h3>Дизайн</h3>
                        <p>UI/UX и графический дизайн, создание интерфейсов и визуальных концепций</p>
                    </div>
                </div>

                <h3>Условия участия</h3>
                <div className="conds">
                    <div className="cond">
                        <IconSchool stroke={1} className="icon" width={50} height={50}/>
                        <h3>Для студентов</h3>
                        <p>Колледжей и вузов всех форм обучения</p>
                    </div>
                    <div className="cond">
                        <IconDeviceMobile stroke={1} className="icon" width={50} height={50}/>
                        <h3>Онлайн формат</h3>
                        <p>Участие из любого города</p>
                    </div>
                    <div className="cond">
                        <IconDeviceLaptop stroke={1} className="icon" width={50} height={50}/>
                        <h3>Практические задания</h3>
                        <p>Реальные кейсы от команды VK</p>
                    </div>
                </div>
            </div>


            <div className="congrats">
                <h1>Призовой фонд</h1>
                <h1>1.000.000 рублей!</h1>
                <div className="prizes" ref={prizesRef}>
                    <div className="prize">
                        <IconLaurelWreath1 stroke={1} className="iconPlace1" width={50} height={50}/>
                        <h3>1 место</h3>
                        <p>500.000 Рублей + стажировка в VK</p>
                    </div>
                    <div className="prize">
                        <IconLaurelWreath2 stroke={1} className="iconPlace2" width={50} height={50}/>
                        <h3>2 место</h3>
                        <p>350.000 Рублей</p>
                    </div>
                    <div className="prize">
                        <IconLaurelWreath3 stroke={1} className="iconPlace3" width={50} height={50}/>
                        <h3>3 место</h3>
                        <p>150.000 Рублей</p>
                    </div>
                </div>
            </div>

            <div className="form" id="form" >
                <h3>Получайте обновления</h3>
                <p>Подпишитесь на рассылку, чтобы быть в курсе последний новостей чемпионата и не пропустить важную информацию</p>
                <div className="inputForm">
                    <input className="inputText" type="text" placeholder={"Введите email"} value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
                    <button onClick={() => getEmail(email)}>Подписаться</button>
                </div>
            </div>

            <footer>
                <div className="footCollumn">
                    <h3>Чемпионат VK-Tech</h3>
                    <p>Технологический чемпионат для студентов по направлениям разработки и дизайна</p>
                </div>
                <div className="footCollumn">
                    <h3>Контакты</h3>
                    <p>Телефон: 8 (800) 555-35-35</p>
                    <p>Email: championship@vk.com</p>
                    <p>Адрес: Ленинградский проспект, д. 39, стр. 79</p>
                </div>
                <div className="footCollumn">
                    <h3>Социальные сети</h3>
                    <IconBrandTelegram className="socialIcon" stroke={1} width={50} height={50}/>
                    <IconBrandVk className="socialIcon" stroke={1}  width={50} height={50}/>
                </div>
            </footer>

        </>
    )
}

export default App