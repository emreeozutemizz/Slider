var resim = document.getElementById("resim"); 


var resimsirasi = 1;
var toplamresim = 4;


function resimdegistir(deger){
    
    
    resimsirasi = resimsirasi + deger;
    if(resimsirasi>toplamresim){
        resimsirasi = 1;
    }
    if(resimsirasi<1){
        resimsirasi = toplamresim;
    }
    resim.src = "image/mzr" + resimsirasi + ".jpg";
    clearInterval(zaman);
    
    

     zaman = window.setInterval(function calistir(){
        resimsirasi = resimsirasi + 1;
        if(resimsirasi>toplamresim){
            resimsirasi = 1;
        }
        if(resimsirasi<1){
            resimsirasi = toplamresim;
        }
        resim.src = "image/mzr" + resimsirasi + ".jpg";
        }, 2000);

}
var zaman = window.setInterval(function calistir(){
    resim.src = "image/mzr" + resimsirasi + ".jpg";
    resimsirasi = resimsirasi + 1;
        if(resimsirasi>toplamresim){
            resimsirasi = 1;
        }
            
    }, 2000);



