import "./RightClickMenu.css"
import useContextMenu from "./../../hooks/useContextMenu"

const RightClickMenu = () => {
  const { x,y, show } = useContextMenu();

  if (show) {
    return (
      <ul className="right-click-menu" style={{ top:y, left:x }}>
        <li className="right-click-menu__title">
          Tiếp nhận bệnh nhân
        </li>
        <li className="right-click-menu__item">
          Thêm bệnh nhân mới
          <span>Ctrl+A</span>
        </li>
        <li className="right-click-menu__item">
          Tạo hồ sơ mới
        </li>
        <li className="right-click-menu__item border_bt">
          Tạo phiếu tiếp đón
        </li>
        <li className="right-click-menu__item">
          Sửa thông tin tiếp đón
          <span>Ctrl+E</span>
        </li>
        <li className="right-click-menu__item">
          Xoá phiếu tiếp đón
          <span>Ctrl+D</span>
        </li>
        <li className="right-click-menu__item border_bt">
          Lưu thông tin tiếp đón
          <span>Ctrl+S</span>
        </li>
        <li className="right-click-menu__item border_bt">
          In phiếu tiếp đón
          <span>Ctrl+P</span>
        </li>
        <li className="right-click-menu__item">
          Huỷ thao tác
          <span>Ctrl+T</span>
        </li>
        <li className="right-click-menu__item">
          Đo chức năng sống
          <span>F5</span>
        </li>
      </ul>
    );
  }
  return <></>;
};

export default RightClickMenu;
