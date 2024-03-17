document.addEventListener("DOMContentLoaded", function() {
    var currentPage = window.location.href;
    var totalPages = 4;
    var progress = (currentPage.endsWith("page1.html") ? 25 :
                    currentPage.endsWith("page2.html") ? 50 :
                    currentPage.endsWith("page3.html") ? 75 :
                    currentPage.endsWith("page4.html") ? 100 : 0);
    document.querySelector(".progress").style.width = progress + "%";
  });

  function togglePopup() {
    var popup = document.getElementById('popup');
    var overlay = document.getElementById('overlay');
    if (popup.style.display === 'block') {
      popup.style.display = 'none';
      overlay.style.display = 'none';
    } else {
      popup.style.display = 'block';
      overlay.style.display = 'block';
    }
  }
var number = 3;

function addInput(){
    var inputFieldsContainer = document.getElementById('inputFields');
    var newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.placeholder = `Enter Name ${++number}`;
    newInput.style.padding = '12px 20px';
    newInput.style.borderRadius = '4px';
    newInput.style.border = '0.5px solid gray';
    newInput.style.width = '100%';
    newInput.style.marginBottom = '10px';
    inputFieldsContainer.appendChild(newInput);
};