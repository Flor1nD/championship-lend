import './App.css'
import { IconBrandVk } from '@tabler/icons-react'
import { useEffect, useRef } from 'react'

function App() {
    const aboutRef = useRef(null)

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
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        )

        if (aboutRef.current) {
            observer.observe(aboutRef.current)
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current)
            }
        }
    }, [])



    return (
        <>
            <div className="mainContent">
                <div className="title">
                    <h1>Чемпионат</h1>
                    <h1><IconBrandVk stroke={1} className="logo" />-Tech</h1>
                    <p>Конкурс для студентов колледжей и вузов по направлениям разработки и дизайна</p>
                </div>
                <button>Регистрация</button>
            </div>

            <div className="about" ref={aboutRef}>
                <h1>О мероприятии</h1>
                <p>Чемпионат VK - прекрасная возможность для студентов продемонстрировать свои навыки разработки и дизайна, получить ценные призы и шанс начать карьеру в одной из ведущих компаний России</p>
            </div>
        </>
    )
}

export default App