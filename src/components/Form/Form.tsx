import {useState} from "react";
import {Loader} from "../common/Loader/Loader";
import {ButtonLoader} from "../common/ButtonLoader/ButtonLoader";
// import {Simulate} from "react-dom/test-utils";
// import submit = Simulate.submit;

export const Form = (props: any) => {

    const dayToFix = (props.date.toLocaleDateString('en-US'));
    const day = dayToFix.split('/').join('.')

    const [form, setForm] = useState({
        timeStart: '',
        timeEnd: '',
        title: '',
    })


    const sendForm = async (e: any) => {
        e.preventDefault()

        if (form.timeEnd < form.timeStart) {
            alert('Wrong time!')
        } else {

            await fetch(`https://backend.schedule-mirror.pl/date/${day}`, {
            // await fetch(`http://localhost:3001/date/${day}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });


            await setForm(form => ({ //po wysłaniu czyszczenie formularza
                timeStart: '',
                timeEnd: '',
                title: '',

            }));
            await props.refresh()
        }
    }

    const updateForm = (key: string, value: any) => {

        setForm(form => ({
            ...form,
            [key]: value,
        }));
    }

    return <>
        <div className="form">

            <form onSubmit={sendForm}>

                <input type="time"
                       name="time-start"
                       required
                       className="input-time"
                       value={form.timeStart}
                       onChange={e => updateForm('timeStart', e.target.value)}
                />

                <input type="time"
                       name="time-end"
                       required
                       className="input-time"
                       value={form.timeEnd}
                       onChange={e => updateForm('timeEnd', e.target.value)}
                />

                <input
                    type="text"
                    value={form.title}
                    name="title"
                    required
                    className="input-data"
                    placeholder="Create a new task..."
                    minLength={3}
                    maxLength={50}
                    // size={50}
                    id="input-text"
                    onChange={e => updateForm('title', e.target.value)}
                />

                <button type="submit" id="submit">Add</button>
            </form>

        </div>


    </>
}
