import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import {Switch} from 'react-router'
import logo from './logo.svg';
import './Login.css';
import QuanLi from './QuanLi.js';

function HoTro(props) {
  return (
    //Thanh hỗ trợ-->
    <div id="bar">
      
      <nav id="navbar">
        <ul>
          <li>
            <a href="#">Diễn đàn</a>
          </li>
          <li>
            <a href="#">Hỗ trợ</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

function ThongTinLogin() {
  return(
    //Cần phần xử lý nếu nhập sai tài khoản hoặc mật khẩu -> xử lí backend-->
    <div id="thongtindn">
      <p>Thông tin đăng nhập</p>
      <form>
        <input type="text" name="taikhoan" placeholder="Tên tài khoản" class="input1"/>  
        <input type="password" name="matkhau" placeholder="Mật khẩu" class="input1"/>
        <input type="checkbox" id="ghinho" />
        <label for="ghinho">Ghi nhớ mật khẩu</label> <br />
        <a href="#">Quên mật khẩu</a>
        <button id="buttondn">
          Đăng nhập
        </button>
      </form>
    </div>
  )
}

function Login() {
  return(
    <div id="login">
      <ThongTinLogin />
    </div>
  )
}

function DangNhap() {
  return(
    <>
      <HoTro 
        img = "CitizenVbar.png"
      />
      <Login />
    </>
  )
}

function App() {
  return (
    <DangNhap />
  );
}

export default App;
