import './PatientList.css'
import MOCK_DATA from './MOCK_DATA.json'
import { useFormik } from 'formik'

const initialValues = {
    name: '',
    room: '',
    fromDate: '',
    toDate: ''
}

const onSubmit = values => {
    console.log('Form data', values)
}

export default function PatientList() {
    const items = MOCK_DATA

    const formik = useFormik({
        initialValues, 
        onSubmit,
    })

    return (
        <div className='container-fluid patient-table-container'>
            <form className='filter' onSubmit={formik.handleSubmit}>
                <div className='search-by-name search-params'>
                    <label>Tên bệnh nhân</label>
                    <input 
                        type="text"
                        name='name'
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                </div>
                
                <div className='search-by-room search-params'>
                    <label>Phòng khám</label>
                    <input 
                        type="text"
                        name='room'
                        onChange={formik.handleChange}
                        value={formik.values.room}
                    />
                </div>

                <div className='search-by-day search-params' style={{display: 'flex'}}>
                    <label style={{display: 'inline'}}>Từ ngày</label>
                    <input 
                        type="date"
                        name='fromDate'
                        onChange={formik.handleChange}
                        value={formik.values.fromDate}
                    />
                </div>

                <div className='search-by-day search-params' style={{display: 'flex'}}>
                    <label style={{display: 'inline'}}>Đến ngày</label>
                    <input 
                        type="date" 
                        onChange={formik.handleChange}
                        name='toDate'
                        value={formik.values.toDate}
                    />
                </div>

                <button className='search-submit' type='submit'>Nhập</button>
            </form>

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
                        {items.length > 0 ? (items.map((item) => (
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