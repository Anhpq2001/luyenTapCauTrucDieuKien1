let diem1 = +prompt("nhap diem hoc phan:");
let diem2 = +prompt("nhap diem giua ky:");
let diem3 = +prompt("nhap diem cuoi ky:");
let ketqua = (diem1 + 2*diem2 + 3*diem3)/6;
if(ketqua > 5 && ketqua < 7){
    alert("dat");
}else if(ketqua > 7 && ketqua < 8){
    alert("kha");
}else if(ketqua >8 && ketqua <= 10){
    alert("gioi");
}else{
    alert("khong dat");
}