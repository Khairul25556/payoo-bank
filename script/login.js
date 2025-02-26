// alert()
// step-1 = ID ke dhorsi getElementById diye
document.getElementById('login-btn').addEventListener('click',function(event){
              event.preventDefault();
              const accountNumber = document.getElementById('account-number').value;
              const pinNumber = document.getElementById('pin-number').value;
              const convertedPIN  = parseInt(pinNumber);
              if(accountNumber.length === 11 && convertedPIN === 1234){
                            window.location.href = './main.html';
              }else{
                alert('Invalid Account Number or PIN');
              }
              // if(accountNumber.length === 11){
              //   if(convertedPIN === 1234){
              //       window.location.href = './main.html';
              //   }else{
              //       alert('Invalid PIN');
              //   }
              //   // console.log('Valid');
              // }else{
              //   alert('Invalid');
              // }
})