"use strict";

const formFill = document.querySelectorAll(".form-fill");

const firstName = document.querySelector(".first_name");
const firstNameErr = document.querySelector(".firstName_error");
const firstNameErrMsg = document.querySelector(".first_name_errmessage");

const lastName = document.querySelector(".last_name");
const lastNameErr = document.querySelector(".lastName_error");
const lastNameErrMsg = document.querySelector(".last_name_errmessage");

const emailAdress = document.querySelector(".e_mail");
const emailErr = document.querySelector(".email_error");
const emailErrMsg = document.querySelector(".email_errmessage");

const passWord = document.querySelector(".password");
const passwordErr = document.querySelector(".password_error");
const passWordErrMsg = document.querySelector(".password_errmessage");

const errorGrid = document.querySelector(".error");

const submit = document.querySelector(".submit");

submit.addEventListener("click", function (e) {
  removeAll();
  e.preventDefault();
  saveMail();
  if (!checkMail(emailAdress.value)) {
    emailAdress.classList.add("borderError");
    emailErr.classList.remove("hide");
    emailErrMsg.classList.remove("hide");
  }
  validform();
});

function validform() {
  if (firstName.value === "") {
    firstName.classList.add("borderError");
    firstNameErr.classList.remove("hide");
    firstNameErrMsg.classList.remove("hide");
  }
  if (lastName.value === "") {
    lastName.classList.add("borderError");
    lastNameErr.classList.remove("hide");
    lastNameErrMsg.classList.remove("hide");
  }
  if (passWord.value === "") {
    passWord.classList.add("borderError");
    passwordErr.classList.remove("hide");
    passWordErrMsg.classList.remove("hide");
  }
}

const saveMail = function () {
  let mailtest = emailAdress.value;
  return mailtest;
};

const checkMail = function (mail) {
  const symboleTest = /\S+@\S+\.\S+/;
  return symboleTest.test(mail);
};
const removeAll = function () {
  firstName.classList.remove("borderError");
  firstNameErr.classList.add("hide");
  firstNameErrMsg.classList.add("hide");

  lastName.classList.remove("borderError");
  lastNameErr.classList.add("hide");
  lastNameErrMsg.classList.add("hide");

  passWord.classList.remove("borderError");
  passwordErr.classList.add("hide");
  passWordErrMsg.classList.add("hide");

  emailAdress.classList.remove("borderError");
  emailErr.classList.add("hide");
  emailErrMsg.classList.add("hide");
};
