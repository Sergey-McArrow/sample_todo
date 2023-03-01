import React, { FC, useCallback, useState } from "react"
import { TableRow } from "./TableRow"
import { Popup } from "./Popup"
import { Ttodo } from "../types/Todo";

type TTodosTable = {
  todosData: Ttodo[]
};

export const TodosTable: FC<TTodosTable> = ({ todosData }) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {todosData.map((todo, index) => (
            <TableRow key={index} {...todo} />
          ))}
        </tbody>
      </table>
    </>
  )
}
