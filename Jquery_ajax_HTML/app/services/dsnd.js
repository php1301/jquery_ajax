function DanhSachNguoiDung() {
    this.mangNguoiDung = [];
    // lay thong tin nguoi dung
    this.layDanhSachNguoiDung = function () {
        return $.ajax({
            // object key value cach nhau bang dau " , "
            url: "https://5d78ddcca8c2710014986669.mockapi.io/api/NguoiDung",
            type: "GET"
        });
        
}
// them nguoi dung
this.themNguoiDung = function(nguoiDung){
    return $.ajax({
        url: "https://5d78ddcca8c2710014986669.mockapi.io/api/NguoiDung",
        type: "POST",
        data: nguoiDung
    })
}
// Xoa nguoi dung - hoi prototype
DanhSachNguoiDung.prototype.xoaNguoiDung =function(id){
    return $.ajax({
        url: `https://5d78ddcca8c2710014986669.mockapi.io/api/NguoiDung/${id}`,
        // url: "https://5d78ddcca8c2710014986669.mockapi.io/api/NguoiDung" + id;
        type: "DELETE"
    })

}
// Lay thong tin nguoi dung

DanhSachNguoiDung.prototype.layThongTinNguoiDung = function(id){
    return $.ajax({
        url: `https://5d78ddcca8c2710014986669.mockapi.io/api/NguoiDung/${id}`,
        type: "GET"
    })
}
DanhSachNguoiDung.prototype.duaThongTinNguoiDung = function (id, nguoiDung){
    return $.ajax({
        url : `https://5d78ddcca8c2710014986669.mockapi.io/api/NguoiDung/${id}`,
        type: "PUT",
        data: nguoiDung
    })
}
}