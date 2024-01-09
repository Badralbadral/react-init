export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://mgl.gogo.mn/newsn/v4/images/gogo-logo.345096b3.png" />
      </div>
      <div className="menus">
        <ul>
          <li>Мэдээ</li>
          <li>GoGo булан</li>
          <li className="watch">Үзэх</li>
          <li>Хэв маяг</li>
          <li>
            English<i class="fa-solid fa-magnifying-glass"></i>
          </li>
        </ul>
      </div>
      <div className="sideInfos"></div>
    </div>
  );
}

import "../styles/header.css";
