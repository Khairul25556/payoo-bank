//toggle kora hoise aikhane. 

// document.getElementById('cash-out').style.display = 'none';
// document.getElementById('add-money-box').addEventListener('click', function(){
//     document.getElementById('add-money').style.display = 'block';
//     document.getElementById('cash-out').style.display = 'none';
// })
// document.getElementById('cash-out-box').addEventListener('click', function(){
//     document.getElementById('cash-out').style.display = 'block';
//     document.getElementById('add-money').style.display = 'none';
// })
//puraton way.  
// //addmoney niye kaj korbo.
// //text ke span diye dhore alada kore nilam then .innerText diye text ke stringa convert kore nilam then parseFloat diye string ke number a convert kore nilam.  
// //sum kore je result ta asbe seita .innerText ar result hisab a bosay dibo. 
// document.getElementById('add-money-btn').addEventListener('click', function(event){
//     event.preventDefault();
//     const accountNumber = document.getElementById('account-number').value;
//     const amount = document.getElementById('amount').value;
//     const convertedAmount = parseInt(amount);
//     const pin = document.getElementById('pin-number').value;
//     const convertedPIN = parseInt(pin);
//     const mainBalance = document.getElementById('main-balance').innerText;
//     const convertedMainBalance = parseFloat(mainBalance); 
//     if(accountNumber.length === 11 && convertedPIN === 1234){
//         const sum = convertedMainBalance + convertedAmount;
//         document.getElementById('main-balance').innerText = sum;
//     }else{
//         alert('Invalid Account Number or PIN');
//     }   
// })
//new way. 
document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    const amount = getInputValueById('addmoney-amount')
    const pinNumber = getInputValueById('addmoney-pin-number');
    const accountNumber = document.getElementById('account-number').value;
    const mainBalance = getInputTextById('main-balance');
    const selectedBank =document.getElementById('all-bank').value;
       if(amount <= 0){
        alert('Invalid Amount')
        return;
       }
    if(accountNumber.length === 11){
          if(pinNumber === 1234){
              const sum = mainBalance + amount;
              console.log(mainBalance , amount)
            //   document.getElementById('main-balance').innerText = sum;
            setInnerTextByIdAndValue('main-balance',sum);
            const transaction = document.getElementById('transaction-container') 
            // const p = document.createElement('p');
            // p.innerText =`
            // added ${amount} from this ${accountNumber} accountNumber
            // `
            //  transaction.appendChild(p);
          const div = document.createElement('div');
          div.classList.add('bg-black');
          //${}--> aita diye amra dynamic valu gula likhte pari. 
          div.innerHTML = `
            <h1 class="text-white">Added Money from ${selectedBank}</h1>  
            <h3 class="text-white">${amount}</h3>
            <p class="text-white">account number : ${accountNumber}</p>
          `
          transaction.appendChild(div);
          }else{
            alert('Invalid PIN');
          }
    }else{
            console.log('Invalid Account Number');
    }
})