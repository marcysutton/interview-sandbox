import {useEffect, useState} from 'react'

import './example.css';

const IndexPage = () => {
    const [inputValues, setInputValues] = useState({
        a: '',
        b: '',
        c: '',
        d: ''
    })
    const [outputValues, setOutputValues] = useState({
        a: 0,
        b: 0,
        c: 0,
        d: 0
    })

    const changeHandler = (e) => {
        setInputValues({...inputValues, [e.target.id]: e.target.value})
    }

    useEffect(() => {
        for (const [key, value] of Object.entries(inputValues)) {
            if (!isNaN(Number(value))) {
                setOutputValues(prevValues => ({...prevValues, [key]: Number(value)}))
            } else {
                const letterRefs = value.split('')

                const referencedSums = letterRefs.reduce((acc, currentValue) => {
                    if (inputValues[currentValue.toLowerCase()]) {
                        return acc + Number(inputValues[currentValue.toLowerCase()])
                    }
                    return acc
                }, 0)
                setOutputValues(prevValues => ({...prevValues, [key]: referencedSums}))
            }
        }
    }, [inputValues])

    return (
        <div className="example">
            <div>
                <h2>Input</h2>
                <form className="example-inputs">
                    <label>
                        A
                        <input id="a" onChange={(e) => {changeHandler(e) }} />
                    </label>
                    <label>
                        B
                        <input id="b" onChange={(e) => {changeHandler(e) }} />
                    </label>
                    <label>
                        C
                        <input id="c" onChange={(e) => {changeHandler(e) }} />
                    </label>
                    <label>
                        D
                        <input id="d" onChange={(e) => {changeHandler(e) }} />
                    </label>
                </form>
            </div>
            <div className="example-output">
                <h2>Output</h2>
                <ul>
                    <li>{outputValues.a}</li>
                    <li>{outputValues.b}</li>
                    <li>{outputValues.c}</li>
                    <li>{outputValues.d}</li>
                </ul>
            </div>
        </div>
    )
}

export default IndexPage
