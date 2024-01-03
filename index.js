// Bài tập 1
// Lương 1 ngày : 100k 
// cho người dùng nhập vào số ngày, 
// tổng tiền lương = số ngày * lương 1 ngày
const luongNgay = 100000;
function formatVND(n) {
    var giaTri = n * 1
    giaTri = giaTri.toLocaleString({
        style: 'currency',
        currency: 'VND',
    }) + ' VNĐ';
    return giaTri;
}
document.getElementById("btn-tinhLuong").onclick = function () {
    var soNgayLam = document.getElementById('soNgayLam').value * 1;
    var tongTienLuong = luongNgay * soNgayLam;
    console.log(tongTienLuong);
    document.getElementById("ketQuaBai1").innerHTML = formatVND(tongTienLuong)
}

// Bài tập 2
// nhập vào 5 số thực
// tính giá trị trung bình của 5 số này và xuất ra màn hình
document.getElementById('btn-tinhTrungBinh').onclick = function () {
    var soThuc1 = document.getElementById('soThuc1').value * 1;
    var soThuc2 = document.getElementById('soThuc2').value * 1;
    var soThuc3 = document.getElementById('soThuc3').value * 1;
    var soThuc4 = document.getElementById('soThuc4').value * 1;
    var soThuc5 = document.getElementById('soThuc5').value * 1;

    var ketQuaTB = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) / 5
    document.getElementById("ketQuaBai2").innerHTML = ketQuaTB
}

// Bài tập 3
// Giá USD mặc định 1 USD = 23500
// quy đổi từ USD sang VNĐ
const menhGiaUSD = 23500;
document.getElementById('btn-quyDoiTien').onclick = function () {
    var soUSD = document.getElementById('soUSD').value * 1
    var giaQuyDoi = soUSD * menhGiaUSD;

    document.getElementById("ketQuaBai3").innerHTML = ` Quy đổi thành: ${formatVND(giaQuyDoi)}`;
}

// Bài tập 4
// tính chu vi, diện tích hình chữ nhật
// chu vi = (dài + rộng) + 2
// diện tích = dài * rộng
document.getElementById("btn-tinhHCN").onclick = function () {
    var chieuDai = document.getElementById('ChieuDai').value * 1
    var chieuRong = document.getElementById('ChieuRong').value * 1

    document.getElementById('DienTich').innerHTML = `Diện tích: ${chieuDai * chieuRong}`
    document.getElementById('ChuVi').innerHTML = `Chu vi: ${(chieuDai + chieuRong) / 2}`
}
// Bài tập 5
// nhập vào 1 số có 2 chữ số
// tính tổng 2 ký số của số đã nhập

document.getElementById('btn-tong2KySo').onclick = function () {
    var input = document.getElementById("so2ChuSo").value * 1;
    var soDonVi = input % 10
    console.log(soDonVi);
    var soHangChuc = parseInt(input / 10)

    document.getElementById("ketQuaBai5").innerHTML = `Tổng 2 ký số của ${input} là ${soDonVi + soHangChuc} `

}