$(document).ready(function(){
    var dsnd = new DanhSachNguoiDung();
    layDanhSach();
    function layDanhSach(){
        // doi tuong danh sach nguoi dung . den phuong thuc lay danh sach nguoi dung
        dsnd.layDanhSachNguoiDung().done(function(result){
            // tao lai de duyet nhung ajax bat dong bo
            // this.mangNguoiDung = result;
            taoBang(result);
            console.log(result);
        })
        .fail(function(error){
            console.log(error);
        })
        console.log(this.mangNguoiDung);
    }
        // taoBang();
<<<<<<< HEAD
        function themNguoiDung(){
            console.log("them nguoi dung 2");
        }
=======
    function themNguoiDung(){
        console.log("themNguoiDung");
    }
>>>>>>> master
    $("#btnThemNguoiDung").click(function(){
       console.log(113);
       $(".modal-title").html("Thêm Người Dùng");
       var footer = `<button id="btnThem" class = "btn btn-success">Thêm</button>`;
       $(".modal-footer").html(footer);
    })
    // Thêm
    $("body").delegate("#btnThem", "click", function(){
        var taiKhoan = $("#TaiKhoan").val();
        var matKhau = $("#MatKhau").val();
        var hoTen = $("#HoTen").val();
        var email = $("#Email").val();
        var soDT = $("#SoDienThoai").val();
        var maLoaiNguoiDung = $("#loaiNguoiDung").val();
        var nguoidung = new NguoiDung(taiKhoan, matKhau, hoTen, email, soDT, maLoaiNguoiDung);
        console.log(nguoidung);
        dsnd.themNguoiDung(nguoidung).done(function(result){
            console.log(result);
            layDanhSach();
        })
        .fail(function(err){
            console.log(err);
        })
    })
    // Chức năng xóa
    $("body").delegate(".btnXoa", "click", function(){
        // hoi cai nay + data atrribute
        var id = $(this).data("id");
        dsnd.xoaNguoiDung(id).done(function(result){
            console.log(result);
            layDanhSach();
        })
        .fail(function(err){
            console.log(err);
        })
    })
    // Sua - cap nhat
    $("body").delegate(".btnSua", "click", function(){
        $(".modal-title").html("Sửa người dùng");
        var footer = `
        <button id ="btnCapNhat" class = 'btn btn-success'>Cập nhật</button>
        `
        $(".modal-footer").html(footer);
        var id = $(this).data("id");
        console.log(id);
        
        dsnd.layThongTinNguoiDung(id).done(function(result){
            $("#TaiKhoan").val(result.taiKhoan);
            $("#HoTen").val(result.hoTen);
            $("#MatKhau").val(result.MatKhau);
        })
    })
    $("body").delegate("#btnCapNhat", "click", function(){
        var id=$(this).data("id");
        var taiKhoan = $("#TaiKhoan").val();
        var matKhau = $("#MatKhau").val();
        var hoTen = $("#HoTen").val();
        var email = $("#Email").val();
        var soDT = $("#SoDienThoai").val();
        var maLoaiNguoiDung = $("#loaiNguoiDung").val();
        var nguoiDung = new NguoiDung(taiKhoan, hoTen, matKhau, email, soDT, maLoaiNguoiDung);
    dsnd.duaThongTinNguoiDung(id, nguoiDung).done(function(result){
        console.log(result);
        layDanhSach()
    })
    .fail(function(err){

    })
});
    function taoBang(mang){
        // bien . den bien trong function tao var tuong trung
        console.log(mang);
        var content = '';
        mang.map(function(item, index){
            content += `
            <tr>
                <td>${index +1}</td>
                <td>${item.id}</td>
                <td>${item.taiKhoan}</td>
                <td>${item.matKhau}</td>
                <td>${item.email}</td>
                <td>${item.soDT}</td>
                <td>${item.maLoaiNguoiDung}</td>
                <td>
                <button  class = 'btnXoa btn btn-danger' data-id ="${item.id}" > Xoa </button>
                <button class = 'btnSua btn btn-primary' data-toggle ='modal' data-target= '#myModal' >Sua</button>
                </td>
            </tr>
            `;

        })
        $("#tblDanhSachNguoiDung").html(content);
    }
})