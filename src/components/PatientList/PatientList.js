import './PatientList.css'
import React from 'react'
import MOCK_DATA from './MOCK_DATA.json'
import { useState } from 'react'


export default function PatientList() {
    const searchObjects = ["file_number", "full_name", 'address', 'patient_type']
    const [contacts, setContacts] = useState(MOCK_DATA)
    const [searchColumns, setSearchColumns] = useState(searchObjects)
    const [q, setQ] = useState('')

    function search(rows) {
        return rows.filter((row) =>
            searchColumns.some(
                (searchColumn) => row[searchColumn].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
            )
        )
    }

    return (
        <div className='container-fluid patient-table-container'>
            <div className='filter'>
                <input type="text" value={q} onChange={e => setQ(e.target.value)} placeholder='Search...' />
                {
                    searchObjects.map((column) =>
                        <label>
                            <input type="checkbox" checked={searchColumns.includes(column)}
                                onChange={(e) => {
                                    const checked = searchColumns.includes(column)
                                    setSearchColumns(prev => checked ? prev.filter(sc => sc !== column) : [...prev, column])
                                }}
                            />
                            {column}
                        </label>)
                }
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Số hồ sơ</th>
                        <th>Tên bệnh nhân</th>
                        <th>Tuổi</th>
                        <th>Giới tính</th>
                        <th>Địa chỉ</th>
                        <th>Ngày khám</th>
                        <th>Trạng thái hồ sơ</th>
                        <th>Đối tượng</th>
                    </tr>
                </thead>
                <tbody className="table-patient">
                    {search(contacts).map((contact) => (
                        <tr key={contact.file_number}>
                            <td>{contact.file_number}</td>
                            <td>{contact.full_name}</td>
                            <td>{contact.age}</td>
                            <td>{contact.gender}</td>
                            <td>{contact.address}</td>
                            <td>{contact.examine_date}</td>
                            <td><input type="checkbox" checked={contact.file_status ? 'checked' : ''} onChange={e => { }} /></td>
                            <td>{contact.patient_type}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}