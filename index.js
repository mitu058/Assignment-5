
function getInputValueById(id){
  return parseFloat(document.getElementById(id).value)
}
let currentBalance = 5500;
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
})

donationButton.addEventListener('click', function () {

  donationButton.classList.add("bg-main", "text-black");
  donationButton.classList.remove("text-gray-500", "border-2");

  histroyButton.classList.remove("bg-main", "text-black");
  histroyButton.classList.add("text-gray-500", "border-2");
});

