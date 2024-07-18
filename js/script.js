let dataTransaction = {
  customers: [
    {
      id: 1,
      name: "Ahmed Ali",
    },
    {
      id: 2,
      name: "Aya Elsayed",
    },
    {
      id: 3,
      name: "Mina Adel",
    },
    {
      id: 4,
      name: "Sarah Reda",
    },
    {
      id: 5,
      name: "Mohamed Sayed",
    },
  ],

  transactions: [
    {
      id: 1,
      customer_id: 1,
      date: "2022-01-01",
      amount: 1000,
    },
    {
      id: 2,
      customer_id: 1,
      date: "2022-01-02",
      amount: 2000,
    },
    {
      id: 3,
      customer_id: 2,
      date: "2022-01-01",
      amount: 550,
    },
    {
      id: 4,
      customer_id: 3,
      date: "2022-01-01",
      amount: 500,
    },
    {
      id: 5,
      customer_id: 2,
      date: "2022-01-02",
      amount: 1300,
    },
    {
      id: 6,
      customer_id: 4,
      date: "2022-01-01",
      amount: 750,
    },
    {
      id: 7,
      customer_id: 3,
      date: "2022-01-02",
      amount: 1250,
    },
    {
      id: 8,
      customer_id: 5,
      date: "2022-01-01",
      amount: 2500,
    },
    {
      id: 9,
      customer_id: 5,
      date: "2022-01-02",
      amount: 875,
    },
  ],
};

function displayData() {
  let dispalyData = "";
  for (let i = 0; i < dataTransaction.customers.length; i++) {
    dispalyData += `
    <tr>
      <td class="bg-body-secondary">${dataTransaction.customers[i].name}</td>
      <td class="bg-body-secondary">${totalTrancation(i + 1)}</td>
      <td class="bg-body-secondary">
          <button class="btn border-2  rounded-4  btn-outline-warning " onclick="showCustomerTransactions(${
            dataTransaction.customers[i].id
          })">
          <span>view</span>
        </button>
      </td>
    </tr>`;
  }
  document.getElementById("transactionTable").innerHTML = dispalyData;
}
displayData();

function totalTrancation(id) {
  let count = 0;
  for (var j = 0; j < dataTransaction.transactions.length; j++) {
    if (dataTransaction.transactions[j].customer_id == id) {
      count += dataTransaction.transactions[j].amount;
    }
  }
  return count;
}

function showCustomerTransactions(customerId) {
  let transactions = dataTransaction.transactions.filter(
    (t) => t.customer_id === customerId
  );
  let transactionData = {};

  transactions.forEach((transaction) => {
    if (!transactionData[transaction.date]) {
      transactionData[transaction.date] = 0;
    }
    transactionData[transaction.date] += transaction.amount;
  });

  let dates = Object.keys(transactionData);
  let amounts = Object.values(transactionData);

  let ctx = document.getElementById("transactionChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: dates,
      datasets: [
        {
          label: "Total Amount",
          data: amounts,
          borderColor: "rgba(0, 0, 0, 1)" ,
          backgroundColor: "rgb(46, 139, 87)",
          borderWidth: 1,
        },
      ],
    },
  });
}
