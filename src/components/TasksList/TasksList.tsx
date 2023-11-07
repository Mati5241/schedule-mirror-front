import React, {useEffect, useState} from "react";
import {ShowTable} from "../ShowTable/ShowTable";
import {Loader} from "../common/Loader/Loader";
import {Form} from "../Form/Form";


// @ts-ignore
export const TasksList = props => {


    const [table, setTable] = useState([]);
    const dayToFix = (props.date.toLocaleDateString('en-US'));
    const day = dayToFix.split('/').join('.')
    const [loading, setLoading] = useState(true);
    const array: any[] = [];


    const refresh: any = async () => {
        setLoading(true);

        const res = await fetch(`https://backend.schedule-mirror.pl/date/${day}`)
        // const res = await fetch(`http://localhost:3001/date/${day}`)
        const {data} = await res.json();

        for (let i = 0; i < data.length; i++) {
            array.push([data[i].id, data[i].start, data[i].end, data[i].title]);
        }

        // @ts-ignore

        setTable(array);
        setLoading(false);
    };


    useEffect(() => {

        refresh();

    }, [day])


    if (loading) {
        return <>
            <Form date={props.date} refresh={refresh}/>
            <Loader/>
        </>

    } else {
        return <>
            <Form date={props.date} refresh={refresh}/>
            <ShowTable loader={loading} table={table} refresh={refresh}/>
        </>
    }
}
