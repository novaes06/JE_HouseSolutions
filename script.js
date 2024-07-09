// script.js
const monthYear = document.getElementById('month-year');
const daysContainer = document.getElementById('days');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let date = new Date();

function renderCalendar() {
    date.setDate(1);
    const month = date.getMonth();
    const year = date.getFullYear();

    monthYear.textContent = `${months[month]} ${year}`;

    const firstDayIndex = date.getDay();
    const lastDay = new Date(year, month + 1, 0).getDate();
    const prevLastDay = new Date(year, month, 0).getDate();
    const lastDayIndex = new Date(year, month + 1, 0).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    daysContainer.innerHTML = '';

    for (let x = firstDayIndex; x > 0; x--) {
        daysContainer.innerHTML += `<div class="inactive"><span class="day-number">${prevLastDay - x + 1}</span></div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        daysContainer.innerHTML += `
            <div>
                <span class="day-number">${i}</span>
                <ul class="bullet-points">
                    <li>Event 1</li>
                    <li>Event 2</li>
                    <li>Event 3</li>
                    <li>Event 4</li>
                    <li>Event 5</li>
                    <li>Event 6</li>
                    <li>Event 7</li>
                </ul>
            </div>
        `;
    }

    for (let j = 1; j <= nextDays; j++) {
        daysContainer.innerHTML += `<div class="inactive"><span class="day-number">${j}</span></div>`;
    }
}

prevButton.addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

nextButton.addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();
