import React, {useEffect, useState} from "react";
import {Form} from "../Form/Form";
import {Loader} from "../common/Loader/Loader";


// @ts-ignore
export const ShowTable = (props) => {


    return <>


        <div>

            <table>
                <tbody>

                {props.table.map((item: any) => (
                    <tr className="tr" key={item[0]}>
                        <>
                            <td className="td-hour-start">{item[1]}</td>
                            <td className='td-between'>-</td>
                            <td className="td-hour-end">{item[2]}</td>
                            <td className="td-title" key={item}>{item[3]}</td>
                            <td className="td-buttons">


                                <a href="#" onClick={async (e: any) => {
                                    e.preventDefault()

                                    if (!window.confirm('Are you sure you want to delete?')) {
                                        return;
                                    }

                                    const res = await fetch(`https://backend.schedule-mirror.pl/delete/${item[0]}`, {
                                    // const res = await fetch(`http://localhost:3001/delete/${item[0]}`, {
                                        method: 'DELETE',
                                    });
                                    if ([400, 500].includes(res.status)) {
                                        const error = await res.json();
                                        alert(`Error: ${error.message}`);
                                        return;
                                    }

                                    await props.refresh()

                                }}>

                                    <img src="/delete.png" className="img-button" alt="Delete"/>
                                </a>

                            </td>
                        </>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

    </>

};
