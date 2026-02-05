import './App.css'
import { IconCode, IconPalette, IconCalendarEvent, IconSchool, IconDeviceMobile, IconDeviceLaptop, IconLaurelWreath1, IconLaurelWreath2, IconLaurelWreath3, IconBrandTelegram, IconBrandVk, IconCheck } from '@tabler/icons-react'
import { useEffect, useRef, useState } from 'react'
import vkLogo from './assets/vkLogo.jpg'

function App() {
    const aboutRef = useRef(null)
    const prizesRef = useRef(null)
    const formRef = useRef(null)
    const successMessageRef = useRef(null)
    const [email, setEmail] = useState('')
    const [showSuccess, setShowSuccess] = useState(false)

    const handleScroll = () => {
        formRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
    };

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

        setShowSuccess(true);

        setTimeout(() => {
            if (successMessageRef.current) {
                successMessageRef.current.style.opacity = '0';
                successMessageRef.current.style.transform = 'translateY(-20px)';

                setTimeout(() => {
                    setShowSuccess(false);
                }, 300);
            }
        }, 5000);

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
                threshold: 0.1
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

    useEffect(() => {
        if (showSuccess && successMessageRef.current) {
            setTimeout(() => {
                successMessageRef.current.style.transition = 'all 0.5s ease-out';
                successMessageRef.current.style.opacity = '1';
                successMessageRef.current.style.transform = 'translateY(0)';
            }, 10);
        }
    }, [showSuccess]);

    return (
        <>
            <header className="hero">
                <img className="hero-logo" src={vkLogo} alt="VK" />
                <div className="hero-content">
                    <h1>Чемпионат VK-Tech</h1>
                    <p className="hero-description">Конкурс для студентов колледжей и вузов по направлениям разработки и дизайна</p>
                    <p className="hero-date">
                        <IconCalendarEvent stroke={0.8} className="dateIcon" aria-hidden="true" />
                        <span>15 марта - 19 апреля 2026</span>
                    </p>
                </div>
                <button onClick={handleScroll} className="hero-button"><h4>Регистрация</h4></button>
            </header>

            <main>
                <section className="about" ref={aboutRef} aria-labelledby="about-title">
                    <h2 id="about-title">О мероприятии</h2>
                    <p className="about-description">Чемпионат VK-Tech - прекрасная возможность для студентов продемонстрировать свои навыки разработки и дизайна, получить ценные призы и шанс начать карьеру в одной из ведущих компаний России</p>

                    <div className="categories">
                        <article className="category">
                            <IconCode stroke={1} className="icon" width={50} height={50} aria-hidden="true" />
                            <h3>Разработка</h3>
                            <p>Создание веб-приложений, бэкенд-разработка, работа с API и базами данных</p>
                        </article>
                        <article className="category">
                            <IconPalette stroke={1} className="icon" width={50} height={50} aria-hidden="true" />
                            <h3>Дизайн</h3>
                            <p>UI/UX и графический дизайн, создание интерфейсов и визуальных концепций</p>
                        </article>
                    </div>

                    <h3 id="conditions-title">Условия участия</h3>
                    <div className="conditions" aria-labelledby="conditions-title">
                        <article className="condition">
                            <IconSchool stroke={1} className="icon" width={50} height={50} aria-hidden="true" />
                            <h4>Для студентов</h4>
                            <p>Колледжей и вузов всех форм обучения</p>
                        </article>
                        <article className="condition">
                            <IconDeviceMobile stroke={1} className="icon" width={50} height={50} aria-hidden="true" />
                            <h4>Онлайн формат</h4>
                            <p>Участие из любого города</p>
                        </article>
                        <article className="condition">
                            <IconDeviceLaptop stroke={1} className="icon" width={50} height={50} aria-hidden="true" />
                            <h4>Практические задания</h4>
                            <p>Реальные кейсы от команды VK</p>
                        </article>
                    </div>
                </section>

                <section className="prizes-section" aria-labelledby="prizes-title">
                    <h2 id="prizes-title">Призовой фонд</h2>
                    <p className="prize-amount">1.000.000 рублей!</p>
                    <div className="prizes" ref={prizesRef}>
                        <article className="prize">
                            <IconLaurelWreath1 stroke={1} className="iconPlace1" width={50} height={50} aria-label="Первое место" />
                            <h3>1 место</h3>
                            <p>500.000 Рублей + стажировка в VK</p>
                        </article>
                        <article className="prize">
                            <IconLaurelWreath2 stroke={1} className="iconPlace2" width={50} height={50} aria-label="Второе место" />
                            <h3>2 место</h3>
                            <p>350.000 Рублей</p>
                        </article>
                        <article className="prize">
                            <IconLaurelWreath3 stroke={1} className="iconPlace3" width={50} height={50} aria-label="Третье место" />
                            <h3>3 место</h3>
                            <p>150.000 Рублей</p>
                        </article>
                    </div>
                </section>

                <section className="form-section" id="form" ref={formRef} aria-labelledby="form-title">
                    <h3 id="form-title">Получайте обновления</h3>
                    <p className="form-description">Подпишитесь на рассылку, чтобы быть в курсе последний новостей чемпионата и не пропустить важную информацию</p>
                    <div className="input-form">
                        <input
                            className="input-text"
                            type="email"
                            placeholder="Введите email"
                            value={email}
                            onChange={(e) => setEmail(e.currentTarget.value)}
                            aria-label="Email для подписки на рассылку"
                        />
                        <button onClick={() => getEmail(email)} className="hero-button"><h4>Подписаться</h4></button>
                    </div>

                    {showSuccess && (
                        <div
                            ref={successMessageRef}
                            className="success-message"
                            role="alert"
                            aria-live="polite"
                            style={{
                                opacity: 0,
                                transform: 'translateY(-20px)'
                            }}
                        >
                            <IconCheck stroke={2} className="success-icon" aria-hidden="true" />
                            <span>Вы успешно подписались на рассылку!</span>
                        </div>
                    )}
                </section>
            </main>

            <footer className="site-footer">
                <div className="footer-column">
                    <h3>Чемпионат VK-Tech</h3>
                    <p>Технологический чемпионат для студентов по направлениям разработки и дизайна</p>
                </div>
                <div className="footer-column">
                    <h3>Контакты</h3>
                    <address>
                        <p>Телефон: <a href="tel:88005553535">8 (800) 555-35-35</a></p>
                        <p>Email: <a href="mailto:championship@vk.com">championship@vk.com</a></p>
                        <p>Адрес: Ленинградский проспект, д. 39, стр. 79</p>
                    </address>
                </div>
                <div className="footer-column">
                    <h3>Социальные сети</h3>
                    <div className="social-icons">
                        <a href="https://t.me/vktech" aria-label="Telegram">
                            <IconBrandTelegram className="social-icon" stroke={1} width={50} height={50} />
                        </a>
                        <a href="https://vk.com/vktech" aria-label="ВКонтакте">
                            <IconBrandVk className="social-icon" stroke={1} width={50} height={50} />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default App