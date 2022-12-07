import React, { useContext } from 'react'
import Form from '../../Components/Form'
import { ContextGlobal } from '../../Components/utils/global.context'


const Contact = () => {

    const { datos } = useContext(ContextGlobal)

    const tema = datos.theme

    return (
        <main className={tema}>
            <h2>Want to know more?</h2>
            <p className='text-center'>Send us your questions and we will contact you</p>
            <Form />
        </main>
    )
}

export default Contact