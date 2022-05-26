import "./ClinicInfo.css";

export const ClinicInfo = (props) => {
  const clinicInfo = [
    {
      clinicId: 1,
      clinicName: "Phòng khám sản",
      tiepDon: 23,
      daKham: 12,
    },
    {
      clinicId: 2,
      clinicName: "Phòng khám nội",
      tiepDon: 21,
      daKham: 13,
    },
  ];

  return (
    <div className="clinic-info">
      <table>
        <thead>
          <tr>
            <th>Phòng</th>
            <th>Tiếp đón</th>
            <th>Đã khám</th>
          </tr>
        </thead>
        <tbody>
          {clinicInfo.map((clinic) => {
            return (
              <tr>
                <td>
                  {clinic.clinicId}. {clinic.clinicName}
                </td>
                <td>{clinic.tiepDon}</td>
                <td>{clinic.daKham}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
