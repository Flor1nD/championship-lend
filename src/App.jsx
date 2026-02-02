import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { IconBrandVk } from '@tabler/icons-react'

function App() {
    return (
        <>

            <div className="mainContent">
                <div className="title">
                    <IconBrandVk stroke={0.7} width={170}  height={170} />
                    <h1>Чемпионат VK</h1>
                    <p>Конкурс для студентов колледжей и вузов по направлениям разработки и дизайна</p>
                </div>
                <button>Записаться</button>
            </div>
            {/*<div className="header">*/}
            {/*    <div className="headerElement">*/}
            {/*        <IconBrandVk stroke={1} width={40}  height={40} />*/}
            {/*    </div>*/}
            {/*    <div className="headerElement">*/}
            {/*        <a href={"#"}>2</a>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}

export default App
