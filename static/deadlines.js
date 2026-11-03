// This runs once for every row in the table.
//   row          the table row (<tr>)
//   cell         the deadline cell (<td>)
//   opportunity  the row's data, including days_left from the server
function showDeadline(row, cell, opportunity) {
  const daysLeft = Number(opportunity.days_left);
  const todayIso = new Date().toISOString().slice(0, 10);
  const isDeadlineToday = opportunity.deadline === todayIso;

  // Only show a label when the deadline is today or in the next 7 days,
  // or if it has already passed.
  if (daysLeft < 0 && !isDeadlineToday) {
    const label = document.createElement("div");
    label.textContent = "Overdue";
    label.className = "deadline-label deadline-overdue";
    cell.classList.add("deadline-cell");
    cell.appendChild(label);
    return;
  }

  if (daysLeft === 0 || isDeadlineToday) {
    const label = document.createElement("div");
    label.textContent = "Due today";
    label.className = "deadline-label deadline-soon";
    cell.classList.add("deadline-cell");
    cell.appendChild(label);
    return;
  }

  if (daysLeft <= 7) {
    const label = document.createElement("div");
    const suffix = daysLeft === 1 ? "day" : "days";
    label.textContent = `Due in ${daysLeft} ${suffix}`;
    label.className = "deadline-label deadline-soon";
    cell.classList.add("deadline-cell");
    cell.appendChild(label);
  }
}
