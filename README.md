# jquery_ajax
//config git
git config --global user.name "username"
git config --global user.email "email"
//keo thung chua tu server ve may tinh
git clone <duong dan thung chua>
  cd hoac mở folder và git bash
//kiem tra trang thai
git status 
  +màu đỏ: nằm ở vùng working copy
  +màu xanh: đang nằm ở vùng staging area
//Di chuyển code từ vùng working copy == > staging area
  git add.
//Di chuyển code từ vùng staging area == > local repository
  git commit -m "Ghi chú"
//Đẩy code từ máy tính lên server 
  git push origin <tên nhánh>
// kiem tra nhanh dang dung
  git branch
// doi branch
  git checkout
// keo cap nhat code moi ve
  git pull
// giai quyet xung dot => tron code
  git merge <ten nhanh>
