// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#wrapper'),
//     smooth: true
// });

function elem_container() {
  var con = document.querySelector(".elem-container");
  var fix = document.querySelector(".fixed-img");
  var elem = document.querySelectorAll(".elem");

  con.addEventListener("mouseenter", () => {
    fix.style.display = "block";
  });
  con.addEventListener("mouseleave", () => {
    fix.style.display = "none";
  });

  elem.forEach(function (e) {
    e.addEventListener("mouseenter", () => {
      var img = e.getAttribute("data-img");
      fix.style.backgroundImage = `url('${img}')`;
    });
  });
}

function main_tabs() {
  const tablinks = document.querySelectorAll(".tablinks");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].addEventListener("click", function () {
      var tab = this.dataset.tab;
      var para = this.dataset.para;
      var tabContent = document.getElementById(tab);
      var paracontent = document.getElementById(para);

      var allTabContents = document.querySelectorAll(".tabcontent");
      var allParaContents = document.querySelectorAll(".params");
      var allTabButtons = document.querySelectorAll(".tablinks");
      for (var k = 0; k < allTabContents.length; k++) {
        allTabContents[k].style.display = "none";
      }
      for(var x = 0; x < allParaContents.length; x++ ){
        allParaContents[x].style.display='none';
      }
      for (var j = 0; j < allTabButtons.length; j++) {
        allTabButtons[j].classList.remove("active");
      }

      tabContent.style.display = "block";
      paracontent.style.display = "block";
      this.classList.add("active");
    });
    document.querySelector('.tablinks').click()
  }
}

function swiper_content(){

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
elem_container();
main_tabs();
swiper_content(); 
