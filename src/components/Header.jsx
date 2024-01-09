export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        go<span>go</span>
      </div>
      <div className="menus">
        <ul>
          <li>Мэдээ</li>
          <li>GoGo булан</li>
          <li>Үзэх</li>
          <li>Хэв маяг</li>
          <li>English</li>
        </ul>
      </div>
      <div className="sideInfos"></div>
    </div>
  );
}

import "../styles/header.css";
