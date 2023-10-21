var navHeight = document.getElementById("nav");
function nav() {

    if (document.documentElement.scrollTop > 20) {


        navHeight.style.animationName = "wiki-pro"

        navHeight.style.backgroundColor = "#fff"

        navHeight.style.opacity = "1"

        document.getElementById("s-btn").style.opacity = "1"

    } else {
        document.getElementById("nav").style.backgroundColor = ""
        document.getElementById("s-btn").style.opacity = "0"
    }





}

function scrollbtn() {

    document.documentElement.scrollTop = 0;

}

var navbar = document.getElementById('nav-bar');

function tran() {
    navbar.style.transition = "0s"
}


function bur() {




    if (navbar.className == "nav") {
        navbar.className += " active"
    }
    else {

        navbar.className = "nav"


    }

}



window.addEventListener('resize', function () {

    for (var i = 0; i < 3; i++) {

        document.getElementsByClassName('values-cards')[i].style.transition = "none"

    }

    setTimeout(function () {
        for (var i = 0; i < 3; i++) {

            document.getElementsByClassName('values-cards')[i].style.transition = "0.5s"

        }
    }, 500)

})


function getPosition(element) {
    // var xPosition = 0;
    var yPosition = 0;

    while (element) {
        // xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }

    return yPosition;
}

var elements = document.getElementsByClassName("icon-1")



var digits = 1;
var digits2 = 1;
var digits3 = 1;
var digits4 = 1;

var nums = document.getElementsByClassName('values');

var tov=document.getElementsByClassName('our-values')[0];
var tov2=document.getElementsByClassName('values-title')[0];
var heade=document.getElementsByClassName('header')[0];
window.addEventListener("scroll", valuesicon)
var dur=2000;
var play = false;
var play2 = false;
var play3 = false;
var play4 = false;
console.log(elements[0].getBoundingClientRect().top)
var siz=0;
function valuesicon() {

    if(window.innerWidth > 1000){siz=600}
    else{siz=500}
 
    if (elements[0].getBoundingClientRect().top <= siz) {
        console.log(elements[0].getBoundingClientRect().top)

        if (play == false) {

            var myvar = setInterval(function () {

                nums[0].innerHTML = digits;
                digits++;
                if (digits == 40) {
                    clearInterval(myvar)
                }
            }, dur / 39)
            play = true;

        }




        if (play2 == false) {

            var myvar2 = setInterval(function () {

                nums[1].innerHTML = digits2;
                digits2++;
                if (digits2 == 38) {
                    clearInterval(myvar2)
                }
            }, dur / 37)


            play2 = true;


        }


        if (play3 == false) {

            var myvar3 = setInterval(function () {

                nums[2].innerHTML = digits3;
                digits3++;
                if (digits3 == 35) {
                    clearInterval(myvar3)
                }
            }, dur / 34)



            play3 = true;
        }



        if (play4 == false) {

            var myvar4 = setInterval(function () {

                nums[3].innerHTML = digits4;
                digits4++;
                if (digits4 == 17) {
                    clearInterval(myvar4)
                }
            }, dur / 16)

            play4 = true;

        }

    }

}

var faqPlay = [false, false, false, false, false, false];

var heightt = ["0", "0", "0", "0", "0", "0"]

function FAQ(d) {


    var faqP = document.getElementsByClassName('FAQ-cards-p')[d];
    var faqa = document.getElementsByClassName('FAQ-cards-pp')[d];
    var faqaa = document.getElementsByClassName(' faqaa')[d];

    if (faqPlay[d] == false) {
        heightt[d] = "0"

        faqaa.style.rotate = "180deg"

        var faqh = setInterval(function () {

            heightt[d] = Number(heightt[d] + 1)
            heightt[d].toString()

            if (heightt[d] > "10") {
                clearInterval(faqh)
            } else {


                faqP.style.height = heightt[d] + "vh"

            }





        }, 30)

        faqa.style.opacity = "1"

        faqPlay[d] = true;
    }
    else {
        heightt[d] = "10"
        faqaa.style.rotate = "0deg"

        var faqh = setInterval(function () {

            heightt[d] = Number(heightt[d] - 1)
            heightt[d].toString()

            if (heightt[d] < "0") {
                clearInterval(faqh)
            } else {


                faqP.style.height = heightt[d] + "vh"

            }





        }, 30)

        faqa.style.opacity = "0"

        faqPlay[d] = false;
    }


}



var fitem = document.getElementsByClassName('F2-items');
var Fp = document.getElementsByClassName('F-p');
var sp = document.getElementsByClassName('sp');
var Fpt = document.getElementsByClassName("F-p-t");
function Fitems(d) {

    for (var i = 0; i < 3; i++) {
        fitem[i].className = "F2-items p-relative"


    }

    fitem[d].className += " F22-items"

    Fp[0].innerHTML = "";
    sp[0].innerHTML = "";
    Fp[1].innerHTML = "";
    sp[1].innerHTML = "";
    Fp[2].innerHTML = "";
    Fpt[0].getElementsByTagName('i')[0].className = "";
    Fpt[1].getElementsByTagName('i')[0].className = "";

    setTimeout(function () {
        Fp[0].innerHTML = "Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem."
        sp[0].innerHTML = "Repudiandae rerum velit modi et officia quasi facilis"
        Fp[1].innerHTML = "Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et."
        sp[1].innerHTML = "Incidunt non veritatis illum ea ut nisi"
        Fp[2].innerHTML = "Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis."
        Fpt[0].getElementsByTagName('i')[0].className = "ri-check-double-line";
        Fpt[1].getElementsByTagName('i')[0].className = "ri-check-double-line";
    }, 200)


}








var wli = document.getElementsByClassName('work-li');
var wimg = document.getElementsByClassName('work-cards p-relative');
// var wbgimg = document.getElementsByClassName(' wbg');
// var Fpt = document.getElementsByClassName("F-p-t");

function work(d) {

    // for (var i = 0; i < 9; i++) {

    //     wimg[i].className += "work-cards p-relative";
    //     // wbgimg[i].className="work-bg-img"

    
    // }

   
    for (var i = 0; i < 4; i++) {
        wli[i].className = "work-li"


    }

  

    // for(var i=0;i<9;i++){
    //     wbgimg[i].className+=" w-a"
    // }


    wli[d].className += " cl-work"

   

    for (var i = 0; i < 9; i++) {
        wimg[i].style.display = "block";
        // wimg[i].className += " w-a";
        // wbgimg[i].className="work-bg-img"
    }

    if (d == 1) {

        wimg[8].style.display = "none";
        wimg[7].style.display = "none";
        wimg[6].style.display = "none";
        wimg[5].style.display = "none";
        wimg[4].style.display = "none";
        wimg[3].style.display = "none";

    
    }
    else if (d == 2) {
        wimg[8].style.display = "none";
        wimg[7].style.display = "none";
        wimg[6].style.display = "none";
        wimg[2].style.display = "none";
        wimg[1].style.display = "none";
        wimg[0].style.display = "none";
      
    }
    else if (d == 3) {
        wimg[5].style.display = "none";
        wimg[4].style.display = "none";
        wimg[3].style.display = "none";
        wimg[2].style.display = "none";
        wimg[1].style.display = "none";
        wimg[0].style.display = "none";

      
    }
//    else if (d == 0) {
//         for (var i = 0; i < 9; i++) {
//             wimg[i].style.display = "block";
//         }
//     }


    //     Fp[0].innerHTML="";
    //     sp[0].innerHTML ="";
    //     Fp[1].innerHTML ="";
    //     sp[1].innerHTML="";
    //     Fp[2].innerHTML = "";
    //     Fpt[0].getElementsByTagName('i')[0].className="";
    //     Fpt[1].getElementsByTagName('i')[0].className="";

    //  setTimeout(function(){
    //     Fp[0].innerHTML = "Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita. Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem."
    //    sp[0].innerHTML = "Repudiandae rerum velit modi et officia quasi facilis"
    //     Fp[1].innerHTML = "Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et."
    //     sp[1].innerHTML = "Incidunt non veritatis illum ea ut nisi"
    //     Fp[2].innerHTML = "Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis."
    //     Fpt[0].getElementsByTagName('i')[0].className="ri-check-double-line";
    //     Fpt[1].getElementsByTagName('i')[0].className="ri-check-double-line";
    //  },200)

    // setTimeout(function(){
    //     // for(var i=0;i<9;i++){

    //     //     wimg[i].className="work-cards p-relative";
    //     //     // wbgimg[i].className="work-bg-img"
    //     // }
    //     for (var i = 0; i < 9; i++) {

    //         wimg[i].className += " w-a2";
    //         // wbgimg[i].className="work-bg-img"
    
        
    //     }
    // },1000)

  
    // for (var i = 0; i < 9; i++) {

    //     wimg[i].className += " w-a2";
    //     // wbgimg[i].className="work-bg-img"

    
    // }
    

}

window.addEventListener('load',function(){

    Swal.fire('Hello world')


})



