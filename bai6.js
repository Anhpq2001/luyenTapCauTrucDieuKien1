let doanhSo = +prompt("nhap doanh so don hang:");
let gia = +prompt("nhap gia cua tung san pham:");
let hoaHong = doanhSo * gia * 0.1;
if(gia < hoaHong){
    alert("cao");
}else if(gia == hoaHong){
    alert("kha");
}else {
    alert("thap");
}
