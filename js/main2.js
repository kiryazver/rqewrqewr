document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("back-to-top");
   
    // Показать/скрыть кнопку при прокрутке страницы
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 700) {
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
  window.location.href = "katalog.html"
}









let elastic = document.querySelector('#elastic')

            elastic.addEventListener('input', (ev) => {
                let value = ev.target.value.trim()
                let elasticItems = document.querySelectorAll('.processor')
                let searchRegExp = new RegExp(value, 'gi')

                if (value === '') {
                    elasticItems.forEach((el) => {
                        el.classList.remove('hide')
                    })
                    return
                }

                elasticItems.forEach((el) => {
                    let innerCard = el.querySelector('.txt3');
                    let elementText = innerCard.textContent
                    let isContainsSearchRequest = searchRegExp.test(elementText)
                    if (!isContainsSearchRequest) {
                        el.classList.add('hide')
                    } else {
                        el.classList.remove('hide')
                    }
                })
            })