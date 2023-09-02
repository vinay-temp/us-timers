// (Year, Month (0-11), Day, Hour, Minute, Second)
const data = [
  ["Vinay", new Date(2023, 7, 24, 13, 35, 0)],
  ["Ajay", new Date()],
  ["Priyam", new Date()],
].sort((a, b) => {
  return a[1] - b[1];
});

const tableBody = document.getElementById("table-body");

for (let i = 0; i < data.length; i++) {
  const row = document.createElement("tr");
  const th = document.createElement("th");
  const tdName = document.createElement("td");
  const tdTimer = document.createElement("td");

  th.setAttribute("scope", "row");
  th.textContent = (i + 1).toString();
  tdName.textContent = data[i][0];
  tdTimer.id = data[i][0];

  row.appendChild(th);
  row.appendChild(tdName);
  row.appendChild(tdTimer);
  tableBody.appendChild(row);
}

function updateTimer(startTime) {
  const timeDiff = new Date() - startTime;

  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  return `${days} days ${hours % 24} hours ${minutes % 60} minutes ${
    seconds % 60
  } seconds`;
}

function updateAll() {
  for (let i = 0; i < data.length; i++) {
    const tdTimer = document.getElementById(data[i][0]);
    tdTimer.textContent = updateTimer(data[i][1]);
  }
}

setInterval(updateAll, 1000);
updateAll();