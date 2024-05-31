import "./App.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import LayoutAdmin from "./layouts/LayoutAdmin/LayoutAdmin";
import LayoutClient from "./layouts/LayoutClient/LayoutClient";
import { HomePage } from "./pages/Client";
import {
  SanPhamPage,
  ChatLieuPage,
  HoaDonPage,
  NhaSanXuatPage,
  PhieuGiamGiaPage,
  ThuongHieuPage,
  DeGiayPage,
  DanhMucPage,
  KichCoPage,
  MauSacPage,
  ThongKePage,
} from "./pages/Administrator";

function App() {
  return (
    <>
      <div>
        <ToastContainer theme="colored" autoClose={1000} />
        <Routes>
          <Route path="/" element={<LayoutClient />}>
            <Route index path="*" element={<HomePage />}></Route>
          </Route>

          <Route path="/admin" element={<LayoutAdmin />}>
            <Route index path="*" element={<SanPhamPage />}></Route>
            <Route path="san-pham" element={<SanPhamPage />}></Route>

            <Route path="chat-lieu" element={<ChatLieuPage />}></Route>
            <Route path="nha-san-xuat" element={<NhaSanXuatPage />}></Route>
            <Route path="thuong-hieu" element={<ThuongHieuPage />}></Route>
            <Route path="de-giay" element={<DeGiayPage />}></Route>
            <Route path="danh-muc" element={<DanhMucPage />}></Route>
            <Route path="kich-co" element={<KichCoPage />}></Route>
            <Route path="mau-sac" element={<MauSacPage />}></Route>

            <Route path="phieu-giam-gia" element={<PhieuGiamGiaPage />}></Route>

            <Route path="hoa-don" element={<HoaDonPage />}></Route>

            <Route path="thong-ke" element={<ThongKePage />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
