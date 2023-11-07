import React, {useState} from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import {Form} from "../Form/Form";
import {TasksList} from "../TasksList/TasksList";

export const Calendar = () => {
    const [startDate, setStartDate]: any = useState(new Date());

    return (
        <div className="body-website">

            <div>
                <DatePicker
                    className="date-picker"
                    selected={startDate}
                    onChange={(date: any) => setStartDate(date)}
                    withPortal
                    calendarStartDay={1}
                    dateFormat="dd MMMM yyyy"
                />

                {/*<Form date={startDate}/>*/}


            </div>
            <TasksList
                date={startDate}
            />
        </div>
    );
};
