"use strict"


let form = document.querySelector('.formToBuy'),
   mailInput = document.querySelector('.form_data-email'),
   phoneInput = document.querySelector('.form_data-phone'),
   formInputs = document.querySelectorAll('.form_data');


function validaitemail(mail) {
   let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(mail).toLowerCase());
}


function validaitephone(phone) {
   let re = /^[0-9\s]*$/;
   return re.test(String(phone));
}


form.onsubmit = function () {

   let mailVal = mailInput.value,
      phoneVal = phoneInput.value,
      emptyInputs = Array.from(formInputs).filter(input => input.value === '');

   formInputs.forEach(function (input) {
      if (input.value === '') {
         input.classList.add('error');

      } else {
         input.classList.remove('error');
      }
   });

   if (emptyInputs.length !== 0) {
      console.log('inputs nihuya');
      return false;
   }

   if (!validaitephone(phoneVal)) {
      phoneInput.classList.add('error');
      return false;
   } else {
      phoneInput.classList.remove('error');
   }


   if (!validaitemail(mailVal)) {
      mailInput.classList.add('error');
      return false;
   } else {
      mailInput.classList.remove('error');
   }


}






//меню
const BtnBuy = document.querySelector('.header__srcbuy');
const FormToBuy = document.querySelector('.formToBuy');
const closebtn = document.querySelector('.form_close')

BtnBuy.addEventListener('click', formBuy);
function formBuy(e) {
   FormToBuy.classList.toggle('open');
}

closebtn.addEventListener('click', FormClose);
function FormClose(e) {
   FormToBuy.classList.remove('open');
}

//inputMask

