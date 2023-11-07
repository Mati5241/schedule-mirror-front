import {useEffect, useState} from "react";
//
//
//
//
// export const TableOneRow = async (props: any) => {
//
// const deleteButtonOnClick = async (e: any) => {
//     e.preventDefault()
//
//     if (!window.confirm('Are you sure you want to delete?')) {
//         return;
//     }
//
//     await fetch(`http://localhost:3001/delete/${props.table[0]}`, {
//         method: 'DELETE',
//     });
//
//     await props.refresh()
//
// };
//
// return (
//     <tr>
//     <td id="td-hour">{props.table[1]}</td>
// <td id="td-title">{props.table[2]}</td>
// <td id="td-buttons">
//
//
//     <a href="#" onClick={deleteButtonOnClick}>
//
//         <img src="/delete.png" className="img-button" alt="Delete"/>
//     </a>
//
// </td>
// </tr>
// )}
