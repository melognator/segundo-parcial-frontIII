import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import axios from 'axios'
import { useState } from 'react'
import Card from '../Components/Card'
import ContactPage from  '../Routes/ContactPage/ContactContainer'
import { MemoryRouter } from 'react-router-dom';
import Detail from '../Routes/DetailPage/Detail'

test("Testeando api", async() => {
    const datos = await axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => response.data)
    expect(datos[0].name).toBe("Leanne Graham")
})

test("Testando contact", async() => {
    render(<ContactPage/>)
    const inputName = screen.getByLabelText("Name");
    fireEvent.change(inputName, {target: {value: 'Nick Wilde'}})
    const inputEmail = screen.getByLabelText("Email address");
    fireEvent.change(inputEmail, {target: {value: 'nickwilde@gmail.com'}})
    const button = screen.getByRole("button")

    console.log = jest.fn();

    fireEvent.click(button)
    // act(() => button.click())

    expect(console.log.mock.calls[0][0]).toEqual({"email": "nickwilde@gmail.com", "name": "Nick Wilde"});
})

test("Testeando card", async () => {
    let faved = false
    const pepito = {
        id: 1,
        name: "Pepe Gonzalez",
        username: "Pepito",
    }
    render(<Card {...pepito} 
    isFaved={() => faved}
    handleFav={() => faved = !faved}
    />, { wrapper: MemoryRouter })
    const nombre = await screen.findByRole("dentist-name")
    const username = await screen.findByRole("dentist-username")
    expect(nombre.textContent).toBe(pepito.name)
    expect(username.textContent).toBe(pepito.username)
    const boton = await screen.findByText("⭐")
    expect(boton.textContent).toBe("⭐")
    fireEvent.click(boton)

    // como faved no es un state el componente no se actualiza :( ...
    // y no encontre la manera de usar useState en jest

    // expect(boton.textContent).toBe("❌")
})

test("Testeando detail", async () => {
    const detailData = {
        id: 1, 
        name: "Paula Cisternas", 
        email: "lele@gmail.com", 
        website: "lelesita.com", 
        phone: "123 456 789", 
        tema: "dark"
    }

    render(<Detail {...detailData} />)
    const titulo = await screen.findByText(`Detail Dentist ${detailData.id}`)
    expect(titulo.nodeName).toBe("H1")
    expect(titulo.textContent).toBe("Detail Dentist 1")
})