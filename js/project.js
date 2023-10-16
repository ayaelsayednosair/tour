//  start carosule 
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});
//  end carosule
//  start Be updated
function validate() {
  var text = "";
  if (document.myfrom.name_one.value == "") {
    text = "Please write your first name";
    document.getElementById("name_one").innerHTML = text;
    document.myfrom.name_one.focus();
    return false;
  }
  if (document.myfrom.name_two.value == "") {
    text = "Please write your last name";
    document.getElementById("name_two").innerHTML = text;
    document.myfrom.name_two.focus();
    return false;
  }
  if (document.myfrom.email.value == "") {
    text = "Please write your email";
    document.getElementById("email").innerHTML = text;
    document.myfrom.email.focus();
    return false;
  }
  var emailId = document.myfrom.email.value;
  atpos = emailId.indexOf("@")
  dotpos = emailId.lastIndexOf(".");
 if ( atpos<1 || dotpos-atpos<2) {
  text="please Enter valid Email";
  document.getElementById("email").innerHTML = text;
  document.myfrom.email.focus();
  return false;
 }
}
// start Be updated