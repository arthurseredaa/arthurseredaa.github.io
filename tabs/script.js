window.addEventListener('DOMContentLoaded', () => {

function tabs(tabHeaderSelector, tabHeaderItemSelector, tabContentItemSelector, showContent, hideContent, activeHeaderItem) {
  const tabHeader = document.querySelector(tabHeaderSelector),
        tabHeaderItem = document.querySelectorAll(tabHeaderItemSelector),
        tabContentItem = document.querySelectorAll(tabContentItemSelector);

  function hideTabContent() {
    // убираем клас активности у всех кнопок
    tabHeaderItem.forEach(elem => {
      elem.classList.remove(activeHeaderItem);
    });
    //убираем клас который показывает блоки со всех блоков и добавляем клас который скрывает наши блоки
    tabContentItem.forEach(elem => {
      elem.classList.remove(showContent);
      elem.classList.add(hideContent);
    });
  }

  function showTabContent(n = 0) {
    //проверяем, что если елемент имеет клас который скривает его, то...
    if(tabContentItem[n].classList.contains(hideContent)) {
      //...убираем этот клас
      tabContentItem[n].classList.remove(hideContent);
      //добавляем клас который покажет нам выбраный елемент...
      tabContentItem[n].classList.add(showContent);
      //и напоследок делаем кнопку активной(которая связана с блоком контента)
      tabHeaderItem[n].classList.add(activeHeaderItem);
    }
  }

  hideTabContent();
  showTabContent();

  tabHeader.addEventListener('click', (e) => {
    //Если таргет существует и у таргета есть клас кнопки хедера, то...
    if(e.target && e.target.classList.contains(tabHeaderItemSelector.replace(/\./, ""))) {
      //...перебираем весь масив кнопок в хапке и передаем саму кнопку и её индекс
      tabHeaderItem.forEach((elem, index) => {
        //Если цель клика равняется перебираемому елементу
        if(e.target == elem) {
          hideTabContent();
          showTabContent(index);
        }
      });
    }
  });
}//end

  tabs('.tabs-header', '.tabs-header__item', '.tabs-content__item', 'show', 'hide', 'active');
});