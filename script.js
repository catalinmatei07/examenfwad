const records = [];

const form = document.getElementById("add-form");
const recordList = document.getElementById("record-list");
const errorMessage = document.getElementById("error-message");

function displayRecords() {
  recordList.innerHTML = "";
  records.forEach((record, index) => {
    const recordCard = document.createElement("li");
    recordCard.classList.add("record-card");

    recordCard.innerHTML = `
      <p><strong>Câmp 1:</strong> ${record.camp1}</p>
      <p><strong>Câmp 2:</strong> ${record.camp2}</p>
      ${record.camp3 ? `<p><strong>Câmp 3:</strong> ${record.camp3}</p>` : ""}
      <button onclick="deleteRecord(${index})">Șterge</button>
    `;

    recordList.appendChild(recordCard);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const camp1 = document.getElementById("camp1").value.trim();
  const camp2 = document.getElementById("camp2").value.trim();
  const camp3 = document.getElementById("camp3").value.trim();

  if (!camp1 || !camp2) {
    errorMessage.textContent = "Câmpurile 1 și 2 sunt obligatorii!";
    return;
  }

  errorMessage.textContent = "";

  records.push({ camp1, camp2, camp3 });
  form.reset();
  displayRecords();
});

function deleteRecord(index) {
  records.splice(index, 1);
  displayRecords();
}
