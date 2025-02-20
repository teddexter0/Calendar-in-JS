document.addEventListener("DOMContentLoaded", function () {
  const monthYear = document.getElementById("month-year");
  const daysContainer = document.getElementById("days");
  const nextButton = document.getElementById("next");
  const prevButton = document.getElementById("prev");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let currentDate = new Date();
  let today = new Date();

  function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();

    monthYear.textContent = `${months[month]} ${year}`;

    daysContainer.innerHTML = "";

    const firstDay = new Date(year, month, 1).getDay();
    const lastDay = new Date(year, month + 1, 0).getDate();

    // Previous month's dates
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = firstDay - 1; i >= 0; i--) {
      const dayDiv = document.createElement("div");

      dayDiv.textContent = prevMonthLastDay - i;

      dayDiv.classList.add("fade");

      daysContainer.appendChild(dayDiv);
    }

    // Current Month's Dates
    for (let i = 1; i <= lastDay; i++) {
      const dayDiv = document.createElement("div");
      dayDiv.textContent = i;
      if (
        i === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear()
      ) {
        dayDiv.classList.add("today");
      }
      daysContainer.appendChild(dayDiv);
    }

    // Next month's dates
    const nextMonthStartDay = 7 - new Date(year, month + 1, 0).getDay();
    for (let i = 1; i <= nextMonthStartDay; i++) {
      const dayDiv = document.createElement("div");

      dayDiv.textContent = i;

      dayDiv.classList.add("fade");

      daysContainer.appendChild(dayDiv);
    }
  }
  prevButton.addEventListener("click", function () {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
  });

  nextButton.addEventListener("click", function () {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
  });

  renderCalendar(currentDate);
});
