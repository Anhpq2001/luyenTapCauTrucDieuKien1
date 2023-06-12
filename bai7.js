let soPhut = +prompt("nhap so phut da su dung:");
if(soPhut <= 100){
    alert(soPhut * 1000);
}else if(soPhut > 100 && soPhut <= 500){
    alert(soPhut * 1200);
}else if(soPhut > 500){
    alert(soPhut * 1500);
}
