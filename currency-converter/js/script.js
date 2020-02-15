let inputUah = document.getElementById('uah');
let inputUsd = document.getElementById('usd');

inputUah.addEventListener('input', () => {
  let request = new XMLHttpRequest();

  request.open('GET', 'js/currency.json');

  request.setRequestHeader('Content-type', 'json/application; charset=utf-8');

  request.send();

  request.addEventListener('readystatechange', function() {
    if(request.readyState === 4 && request.status == 200) {
      let data = JSON.parse(request.response);

      inputUsd.value = (inputUah.value / data.usd).toFixed(2);
    } else {
      inputUsd.value = "Something went wrong =(";
    }
  });
});