
// Set the date we're counting down to
var countDownDate = new Date("May 16, 2023 08:00:00").getTime();
// Update the count down every 1 second
var x = setInterval(function () {
    // Get todays date and time
    var now = new Date().getTime();
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Wait for the next Round";
    }
}, 1000);

// buton interactive
document.querySelector('#btn1').addEventListener('click', function (event) {
    var price = parseInt($("#price").val()) + 5000
    $("#price").val(price)
});
document.querySelector('#btn2').addEventListener('click', function (event) {
    var price = parseInt($("#price").val()) + 10000
    $("#price").val(price)
});
document.querySelector('#btn3').addEventListener('click', function (event) {
    var price = parseInt($("#price").val()) + 15000
    $("#price").val(price)
});
// $(document).ready(function () {
//     $("#btnSub").click(function () {
//         $("#price").modal();
//         var price = $("#price").val()
//         $("#bid").text("Confirm your bid in the amount of  KSh" + price )
//         $('#input-price').val(price)
//     });
// });
// Get the "Place Bid" button element
const bidButton = document.getElementById('btnSub');

// Add a click event listener to the button
bidButton.addEventListener('click', function() {
  // Display a prompt for successful bid placement
  const bidAmount = document.getElementById('price').value;
  const confirmation = confirm(`Confirm your bid in the amount of KSh ${bidAmount}?`);
  
  // Check if the user confirmed the bid placement
  if (confirmation) {
    alert('Bid placed successfully!');
  }
});
// Get the "Send" button element
const sendButton = document.getElementById('btnsend1');

// Add a click event listener to the button
sendButton.addEventListener('click', function() {
  // Display a prompt for successful message sending
  alert('Message sent successfully!');
});
// Get the "Send" button element
const contactButton = document.getElementById('btncontact1');

// Add a click event listener to the button
contactButton.addEventListener('click', function() {
  // Display an alert for successful message sending
  alert('Message sent successfully ! Our team will get back to you shortly');
});
// Fetch the JSON data from the db.json file
function fetchJSONData() {
    return fetch('db.json')
      .then(response => response.json())
      .then(data => data.bids)
      .catch(error => {
        console.error('Error fetching JSON data:', error);
        return [];
      });
  }
  
  // Generate the table with the provided data
  function generateTable(data) {
    const table = document.createElement('table');
    table.classList.add('table');
  
    const thead = document.createElement('thead');
    const theadRow = document.createElement('tr');
  
    const headers = ['Date', 'Bid', 'User'];
    headers.forEach(headerText => {
      const th = document.createElement('th');
      th.textContent = headerText;
      theadRow.appendChild(th);
    });
  
    thead.appendChild(theadRow);
    table.appendChild(thead);
  
    const tbody = document.createElement('tbody');
    data.forEach(bid => {
      const row = document.createElement('tr');
  
      const dateCell = document.createElement('td');
      dateCell.textContent = bid.Date;
      row.appendChild(dateCell);
  
      const bidCell = document.createElement('td');
      const amountSpan = document.createElement('span');
      amountSpan.classList.add('amount');
      amountSpan.innerHTML = `<span class="Price-currencySymbol">KSh&nbsp;</span>${bid.bid}`;
      bidCell.appendChild(amountSpan);
      row.appendChild(bidCell);
  
      const userCell = document.createElement('td');
      userCell.textContent = bid.user;
      row.appendChild(userCell);
  
      tbody.appendChild(row);
    });
  
    table.appendChild(tbody);
    return table;
  }
  
  // Event listener for the link click
  document.addEventListener('DOMContentLoaded', () => {
    const link = document.getElementById('bidhistory');
    link.addEventListener('click', async (event) => {
      event.preventDefault();
  
      const jsonData = await fetchJSONData();
      const tableContainer = document.createElement('div');
      tableContainer.appendChild(generateTable(jsonData));
  
      const tabContent = document.querySelector('.tab-content');
      const tabPane = document.createElement('div');
      tabPane.classList.add('tab-pane');
      tabPane.setAttribute('id', 'reviews');
      tabPane.appendChild(tableContainer);
  
      // Clear previous tab content
      while (tabContent.firstChild) {
        tabContent.firstChild.remove();
      }
  
      tabContent.appendChild(tabPane);
  
      // Activate the tab pane
      const tabLink = document.querySelector(`a[href="#reviews"]`);
      tabLink.classList.add('active');
      tabPane.classList.add('active');
    });
  });
  
  


