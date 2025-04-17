document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("back-to-top");
   
    // Показать/скрыть кнопку при прокрутке страницы
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 3750) {
        backToTop.style.display = "block";
      } 
      else {
        backToTop.style.display = "none";
      }
    });
   
    // Плавная прокрутка при клике на кнопку
    backToTop.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });


document.getElementById("next").onclick = function(){
  window.location.href = "katalog.html#home"
}


document.getElementById("hot").onclick = function(){
  window.location.href = "katalog.html#viu"
}


document.getElementById("job").onclick = function(){
  window.location.href = "katalog.html#dog"
}


document.getElementById("yoo").onclick = function(){
  window.location.href = "katalog.html#kek"
}