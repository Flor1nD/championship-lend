import './App.css'
import { IconCode, IconPalette, IconCalendarEvent } from '@tabler/icons-react'
import { useEffect, useRef } from 'react'

function App() {
    const aboutRef = useRef(null)
    const categoryRef = useRef(null)

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

        if (categoryRef.current) {
            observer.observe(categoryRef.current)
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current)
            }
            if (categoryRef.current) {
                observer.unobserve(categoryRef.current)
            }
        }
    }, [])



    return (
        <>
            <div className="mainContent">
                <div className="title">
                    <h1>Чемпионат</h1>
                    <h1>VK-Tech</h1>
                    <p>Конкурс для студентов колледжей и вузов по направлениям разработки и дизайна</p>
                    <p className="date"><IconCalendarEvent stroke={0.8} className="dateIcon"/>15 марта - 19 апреля 2026</p>
                </div>
                <button>Регистрация</button>
            </div>

            <div className="about" ref={aboutRef}>
                <h3>О мероприятии</h3>
                <p>Чемпионат VK-Tech - прекрасная возможность для студентов продемонстрировать свои навыки разработки и дизайна, получить ценные призы и шанс начать карьеру в одной из ведущих компаний России</p>
                <div className="categories" ref={categoryRef}>
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
            </div>


        </>
    )
}

export default App