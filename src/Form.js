import React, {useState} from 'react'
import * as yup from 'yup'
import Axios from 'axios'

const fromSchema = yup.object().shape({
    name: yup.string().min(2, 'Not long enough').required('Please ender your name'),
    size: yup.string(),
    list: yup.boolean().oneOf([true], 'Please make sure you have everything'),
    special: yup.string().required("Let us know special instructions")
})

export default function Form(){
    const [form, setForm] = useState({
        name: '',
        size: '',
        list: '',
        special: ''
    })

    const [error, setError] = useState({
        name: '',
        size: '',
        list: '',
        special: ''
    })

    const [post, setPost] = useState ([])
    const onSubmit = e => {
        e.preventDefault()
        Axios.post('https://reqres.in/api/users', form)
             .then(res => {
                 setPost([...post, res.data])
                 setForm({
                    name: '',
                    size: '',
                    list: '',
                    special: ''
                 })
             })
             .catch(err => console.log(err.response))
    }

    const validateChange = e => {
        yup.reach(fromSchema, e.target.name)
        .validate(e.target.name === 'list' ? e.target.checked : e.target.value)

        .then(valid => {
            setError({
                ...error, [e.target.name]: ''
            })
        })
        .catch(err => {
            setError({
                ...error, [e.target.name]: err.errors[0]
            })
        })
    }

    const handleChange = e => {
        e.persist()
        const newFormData = {
            ...form,
            [e.target.name]:
            e.target.type === 'checkbox' ? e.target.checked : e.target.value
        }
        validateChange(e)
        setForm(newFormData)
    }


    return(
        <form onSubmit = {onSubmit}>
            <label htmlFor = 'name'>
                Name: 
                <input
                    type='text'
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                />
                {error.name.length > 0 ? <p>{error.name}</p> : null}
            </label>

            <label htmlFor = 'size'>
                Pizza Size: 
                <select id='size' name='size' onChange={handleChange}>
                    <option value='Smol'>Smol</option>
                    <option value='Shmedium'>Shmedium</option>
                    <option value='La-harge'>La-harge</option>
                    <option value='Big ol Pizza'>Big ol Pizza</option>
                </select>
            </label>

            <label htmlFor="list" className="list">
                Pepperoni  
                <input
                    type="checkbox"
                    name="list"
                    checked={setForm.list}
                    onChange={handleChange}
            />
            </label>

            <label htmlFor="list" className="list">
                Green Chili  
                <input
                    type="checkbox"
                    name="list"
                    checked={setForm.list}
                    onChange={handleChange}
            />
            </label>

            <label htmlFor="list" className="list">
                Black Olive  
                <input
                    type="checkbox"
                    name="list"
                    checked={setForm.list}
                    onChange={handleChange}
            />
            </label>

            <label htmlFor="list" className="list">
                Remove someone elses Pineapple (+$4)  
                <input
                    type="checkbox"
                    name="list"
                    checked={setForm.list}
                    onChange={handleChange}
            />
            </label>

            <label htmlFor="special">
                What do you want special on your pizza order? 
                <textarea
                name="special"
                value={form.special}
                onChange={handleChange}
                />
                {error.special.length > 0 ? (
                <p className="error">{error.special}</p>
                ) : null}
            </label>
            <pre>{JSON.stringify(post, null, 2)}</pre>
            <button
            type='submit'
            >Submit</button>
        </form>
    )
}