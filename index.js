
function getInputValueById(id){
  return parseFloat(document.getElementById(id).value)
}
let currentBalance = 5500;

let donationHistory = []; 
function displayHistory() {
  const historyContainer = document.getElementById("history-container");
  historyContainer.innerHTML = ""; 

  for (let i = 0; i < donationHistory.length; i++) {
    const donation = donationHistory[i]; // Get each donation object

    const historyItem = document.createElement('div');
    historyItem.classList.add("bg-white", "p-6", "mb-6", "rounded-lg", "border-2");

    historyItem.innerHTML = `
      <p class="font-bold text-base">${donation.amount} Taka donated for ${donation.cause}</p>
      <p class="text-sm text-gray-700 pt-2">Date : ${donation.date}</p> 
         
    `;

historyContainer.appendChild(historyItem)

  }
}

function addToHistory(amount, cause, ) {
   const date = new Date().toString();
  donationHistory.push({
    amount: amount,
    cause: cause,
    date: date
  });

  displayHistory();
}


// add event listner first card button
document.getElementById("donate-btn-nk").addEventListener('click', function(){
  const noakhaliDonate = getInputValueById("donate-noakhali")
  document.getElementById("donate-noakhali").value = ""

  if((!isNaN(noakhaliDonate) && noakhaliDonate > 0 && noakhaliDonate <= currentBalance)){
    const noakhaliBlance = document.getElementById("noakhali-blance")
    noakhaliBlance.innerText = noakhaliDonate
    
    currentBalance -= noakhaliDonate
    const initialBalance = document.getElementById("initial-balance")
    
    initialBalance.innerText = currentBalance

 // Add to history
 addToHistory(noakhaliDonate, "Flood Relief at Noakhali, Bangladesh");

  }

  else{
    alert("Invalid donation amount")
  }
})

// add event listner second card button
document.getElementById("donate-btn-feni").addEventListener('click', function(){
  const donateFeni = getInputValueById("donate-feni")
  document.getElementById("donate-feni").value = ""

  if((!isNaN(donateFeni) && donateFeni > 0 && donateFeni <= currentBalance)){
    const feniBalance = document.getElementById("feni-balance")
    feniBalance.innerText = donateFeni
    
    currentBalance -= donateFeni
    const initialBalance = document.getElementById("initial-balance")
    
    initialBalance.innerText = currentBalance

      // Add to history
      addToHistory(donateFeni, "Flood Relief in Feni, Bangladesh");
  }
  else{
    alert("Invalid donation amount")
  }
})


// add event listner third card button
document.getElementById("donate-btn-quota").addEventListener('click', function(){
  const donateQuota = getInputValueById("donate-quota")
  document.getElementById("donate-quota").value = ""

  if((!isNaN(donateQuota) && donateQuota > 0 && donateQuota <= currentBalance)){
    const quotaBalance = document.getElementById("quota-blance")
    quotaBalance.innerText = donateQuota
    
    currentBalance -= donateQuota
    const initialBalance = document.getElementById("initial-balance")
    
    initialBalance.innerText = currentBalance

   // Add to history
   addToHistory(donateQuota, "Aid for Injured in the Quota Movement, Bangladesh");


  }
  else{
    alert("Invalid donation amount")
  }
})



// button functionality
const donationButton = document.getElementById("donation-btn")
const histroyButton = document.getElementById("History-btn")

histroyButton.addEventListener('click',function(){

  histroyButton.classList.add("bg-main","text-black");
  histroyButton.classList.remove("text-gray-500","border-2");

  donationButton.classList.remove("bg-main", "text-black");
donationButton.classList.add("text-gray-500","border-2")



document.getElementById("donation-section").style.display = "none";
  document.getElementById("history-section").style.display = "block";

  displayHistory();


 

})

donationButton.addEventListener('click', function () {

  donationButton.classList.add("bg-main", "text-black");
  donationButton.classList.remove("text-gray-500", "border-2");

  histroyButton.classList.remove("bg-main", "text-black");
  histroyButton.classList.add("text-gray-500", "border-2");



  document.getElementById("history-section").style.display = "none";
  document.getElementById("donation-section").style.display = "block";

});

