function inputEmailValid() {
  var flag = false;
  var ask_email;
  while (flag == false) {
    ask_email = prompt("введите Email");
    var dog = ask_email.indexOf("@");
    var dot = ask_email.indexOf(".");
    if (dog != -1) {
      if (dot != -1) {
        if (dot > dog) {
          if (ask_email.length > 6) {
            if ((dot - dog) > 3) {
              if (dog > 2) {
                if (ask_email[ask_email.length -1] != ".") {
                  return true;
                }else {
                  alert("после . должы стоять символы");
                }
              }else {
                alert("до @ должны идти символы");
              }
            }else {
              alert("между @ и . должно стоять неменее 3 символа");
            }
          }else {
            alert("Email должен состоять хотя бы из 6 символов");
          }
        }else {
          alert("@ должна стоять раньше чем .");
        }
      }else {
        alert("нет .");
      }
    }else {
      alert("нет @");
    }
  }
}

alert(inputEmailValid());
