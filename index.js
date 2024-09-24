
function convertNumber(id) {
    const inputValue = document.getElementById(id).value;
    const convertToNumber = parseFloat(inputValue);
    return convertToNumber;
}

function calculateDonation(balance, donationInput, donationCount, title) {
    const Balance = parseFloat(document.getElementById(balance).innerText);
    const firstDonate = convertNumber(donationInput);
    const donationUpdate = parseFloat(document.getElementById(donationCount).innerText);

    const donationPriceValid = document.getElementById(donationInput).value.trim();
    const validNumber = /^\d+(\.\d+)?$/.test(donationPriceValid);

    document.getElementById(donationInput).value = "";

    if (!isNaN(firstDonate) && firstDonate > 0 && firstDonate <= Balance && validNumber) {
        const firstBalance = document.getElementById(donationCount);
        const updatedDonationBalance = donationUpdate + firstDonate;
        firstBalance.innerText = updatedDonationBalance.toFixed(2);

        const newBalance = Balance - firstDonate;
        const initialBalance = document.getElementById(balance);
        initialBalance.innerText = newBalance.toFixed(2);

        const title1 = document.getElementById(title).innerText;
        const historyDiv = document.getElementById("history-container");
        const history = document.createElement('div');
        history.innerHTML = `
        <div class="border-2 p-5 rounded-xl mt-4 space-y-3">
            <h1 class="font-bold text-lg">${firstDonate.toFixed(2)} Taka ${title1}</h1>
            <p>${new Date().toString()}</p>
        </div>
        `;
        historyDiv.insertBefore(history, historyDiv.firstChild);

        document.getElementById("confirmation-Modal").showModal();
    } else {
        alert("Invalid donation amount");
    }
}


document.getElementById("close-modal").addEventListener('click',function(){
    document.getElementById("confirmation-Modal").close();
});

// 1st card
document.getElementById('first-btn').addEventListener('click',function(){
    calculateDonation('balance','first-input','first-donation','first-title')
})

// 2nd card
document.getElementById('second-btn').addEventListener('click',function(){
    calculateDonation('balance','second-input','second-donation','second-title')
})

// 3rd card
document.getElementById('third-btn').addEventListener('click',function(){
    calculateDonation('balance','third-input','third-donation','third-title')
})

// button functionality
const donationButton = document.getElementById("donation-btn")
const histroyButton = document.getElementById("History-btn")

histroyButton.addEventListener('click',function(){

  histroyButton.classList.add("bg-main","text-black");
  histroyButton.classList.remove("text-gray-500","border-2");

  donationButton.classList.remove("bg-main", "text-black");
donationButton.classList.add("text-gray-500","border-2")

document.getElementById("donation-section").classList.add("hidden")
  document.getElementById("history-container").classList.remove("hidden") 
})

donationButton.addEventListener('click', function () {

  donationButton.classList.add("bg-main", "text-black");
  donationButton.classList.remove("text-gray-500", "border-2");

  histroyButton.classList.remove("bg-main", "text-black");
  histroyButton.classList.add("text-gray-500", "border-2");

  document.getElementById("history-container").classList.add("hidden")
  document.getElementById("donation-section").classList.remove("hidden")
});


document.getElementById("btn-blog").addEventListener('click',function(){
    window.location.href = "./blog.html"
})