import './QueueCard.css'

export default function QueueCard() {
    return(
        <div className='queue-card'>
            <div className="page">
                <div className="subpage">
                    <div className='queue-card-header'>
                        <h1 className='important-info'>PHIẾU TIẾP ĐÓN</h1>
                        <p>Ngày 24 tháng 01 năm 2010</p>
                        <br/>
                        <h5>KHOA KHÁM BỆNH</h5>
                    </div> 
                    <br/>
                    <div className='card-info-table'>
                        <table>
                            <tr key="">
                                <td>
                                    <p>Mã số KCB:</p>
                                </td>
                                <td>
                                    <p className='important-info'>90004993</p>
                                </td>
                            </tr>
                            <tr key="">
                                <td>
                                    <p>Họ và tên:</p>
                                </td>
                                <td>
                                    <p className='important-info'>NGUYỄN THỊ HUỆ</p>
                                </td>
                            </tr>
                            <tr key="">
                                <td>
                                    <p>Tuổi: </p>
                                </td>
                                <td>
                                    <p>23</p>
                                </td>
                            </tr>
                            <tr key="">
                                <td><p>Giới tính:</p></td>
                                <td><p>Nữ</p></td>
                            </tr>
                            <tr key="">
                                <td><p>Nghề nghiệp: </p></td>
                                <td><p>Cán bộ văn phòng</p></td>
                            </tr>
                            <tr key="">
                                <td><p>Địa chỉ:</p></td>
                                <td><p>Phường Giảng Võ - Quận Ba Đình - Thành phố Hà Nội</p></td>
                            </tr>
                            <tr key="">
                                <td><p>Nơi công tác: </p></td>
                                <td><p>Kho bạc Nhà nước Việt Nam</p></td>
                            </tr>
                            <tr key="">
                                <td><p>Số thẻ:</p></td>
                                <td><p>1234567890</p></td>
                            </tr>
                            <tr key="">
                                <td><p>Nơi chuyển đến: </p></td>
                            </tr>
                            
                            <tr key="">
                                <td><p>Chuẩn đoán tuyến dưới:</p></td>
                            </tr>
                            <tr key="">
                                <td><p>Lý do đến khám:</p></td>
                            </tr>
                            <tr key="">
                                <td><p>Yêu cầu khám:</p></td>
                                <td><p>Tự nguyện</p></td>
                            </tr>
                            <tr key="">
                                <td><p>Tiền khám:</p></td>
                                <td><p>3000.0</p></td>
                            </tr>
                            <tr key="">
                                <td><p>Số thứ tự:</p></td>
                                <td><p className='important-info'>1</p></td>
                            </tr>
                            <tr key="">
                                <td><p>Tên phòng khám:</p></td>
                                <td><p className='important-info'>Phòng khám Nội 2</p></td>
                            </tr>
                        </table>
                    </div>

                    <br/>
                    <br/>
                    <div className='queue-card-footer'>
                        <p>Phiếu khám chỉ có giá trị một lần</p>
                    </div>  
                </div>    
            </div>
        </div>
    )
}