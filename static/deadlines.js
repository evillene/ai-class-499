// This runs once for every row in the table.
//   row          the table row (<tr>)
//   cell         the deadline cell (<td>)
//   opportunity  the row's data, including days_left from the server
function showDeadline(row, cell, opportunity) {
  const daysLeft = opportunity.days_left;
  let label = "";
  let labelClass = "";

  if (daysLeft < 0) {
    label = "Overdue";
    labelClass = "deadline-overdue";
  } else if (daysLeft === 0) {
    label = "Due today";
    labelClass = "deadline-soon";
  } else if (daysLeft <= 7) {
    const unit = daysLeft === 1 ? "day" : "days";
    label = `Due in ${daysLeft} ${unit}`;
    labelClass = "deadline-soon";
  }

  if (label) {
    const deadlineDate = cell.textContent;
    const date = document.createElement("span");
    date.textContent = deadlineDate;

    const badge = document.createElement("span");
    badge.className = `deadline-label ${labelClass}`;
    badge.textContent = label;

    cell.textContent = "";
    cell.append(date, badge);
  }
}
