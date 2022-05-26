import './PatientList.css'
import MOCK_DATA from './MOCK_DATA.json'
import { useState } from 'react'


export default function PatientList() {
    const searchObjects = ["file_number", "full_name", 'address', 'patient_type']
    const [searchColumns, setSearchColumns] = useState(searchObjects)
    const [q, setQ] = useState('')

    const items = MOCK_DATA
   
    
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

            <div className='table-wrapper'>
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
                    <tbody className="table-patient" >
                        {items.length > 0 ? (search(items).map((item) => (
                            <tr key={item.file_number}>
                                <td>{item.file_number}</td>
                                <td>{item.full_name}</td>
                                <td>{item.age}</td>
                                <td>{item.gender}</td>
                                <td>{item.address}</td>
                                <td>{item.examine_date}</td>
                                <td><input type="checkbox" checked={item.file_status ? 'checked' : ''} onChange={e => {}}/></td>
                                <td>{item.patient_type}</td>
                            </tr>
                        )) ) : (
                            <div>
                                No data available
                            </div>
                        )}
                    </tbody>
                </table>
                    
            </div>
        </div>
    )
}