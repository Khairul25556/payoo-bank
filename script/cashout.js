document.getElementById('cashout-btn').addEventListener('click',function(event){
        event.preventDefault();
        const accountNumber = document.getElementById('account-number').value;
        const pinNumber = getInputValueById('cashout-pin');
        console.log(pinNumber);
        const mainBalance = getInputTextById('main-balance');
        
        const amount = getInputValueById('amount');
        const selectedBank =document.getElementById('all-bank').value;
        if(amount > mainBalance){
          alert('Invalid Amount')
          return;
         }
        if(accountNumber.length === 11){
            if(pinNumber === 1234){
              const sub = mainBalance - amount;
              setInnerTextByIdAndValue('main-balance',sub);
              // const transaction = document.getElementById('transaction-container')
              // const p = document.createElement('p');
              // p.innerText = `cashout ${amount} from this ${accountNumber} accountNumber`
              // transaction.appendChild(p);
              const transaction = document.getElementById('transaction-container')
              const div = document.createElement('div');
              div.classList.add('bg-black');
              div.innerHTML = `
                <h1 class="text-white">Cash Out from ${selectedBank}</h1>
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