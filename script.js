const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const fortunes = [
    "Your Lungs Will Be Filled With Fart Chemicals On ",
    "You Will Grow A Third Leg On ",
    "You Will Win A Lottery Prize Worth 10$ On ",
    "Your Parents Will Find Out You're Gay On ",
    "Garden Gnomes Will Kidnap Your Cat On ",
    "This Stupid Site Will Stop Working On ",
    "You Will Accidentally Step On The Last Bug In It's Specie That Could Cure Cancer On ",
    "You Will Find Love On ",
    "You Will Become A Professional Software Developer On ",
    "No Fortune Could Be Generated, Please Visit Again On "
];


const generator = document.getElementById('fortune-btn')
const fortune = document.getElementById('fortune')

let currentMonth = 0;
let currentDay = 0;
let currentYear = 2023;

const dayContainer = document.getElementById('day');
const monthsContainer = document.getElementById('month');
const yearContainer = document.getElementById('year');

const monthText = monthsContainer.querySelectorAll('.text-span')[0];
const dayText = dayContainer.querySelectorAll('.text-span')[0];
const yearText = yearContainer.querySelectorAll('.text-span')[0];
yearText.textContent = currentYear.toString()

const monthPreview1 = document.getElementById('month-preview-1');
const monthPreview2 = document.getElementById('month-preview-2');
const monthPreview4 = document.getElementById('month-preview-4');
const monthPreview5 = document.getElementById('month-preview-5');

const dayPreview1 = document.getElementById('day-preview-1');
const dayPreview2 = document.getElementById('day-preview-2');
const dayPreview4 = document.getElementById('day-preview-4');
const dayPreview5 = document.getElementById('day-preview-5');

const yearPreview1 = document.getElementById('year-preview-1');
const yearPreview2 = document.getElementById('year-preview-2');
const yearPreview4 = document.getElementById('year-preview-4');
const yearPreview5 = document.getElementById('year-preview-5');

yearPreview1.textContent = (currentYear - 2).toString()
yearPreview2.textContent = (currentYear - 1).toString()
yearPreview4.textContent = (currentYear + 1).toString()
yearPreview5.textContent = (currentYear + 2).toString()
const updateMonthText = (offset) => {
    currentMonth = (currentMonth + offset + 12) % 12;
    monthText.textContent = months[currentMonth];
    monthPreview1.textContent = months[(currentMonth + 10) % 12];
    monthPreview2.textContent = months[(currentMonth + 11) % 12];
    monthPreview4.textContent = months[(currentMonth + 1) % 12];
    monthPreview5.textContent = months[(currentMonth + 2) % 12];
};

const updateDayText = (offset) => {
    currentDay = (currentDay + offset + 31) % 31;
    dayText.textContent = currentDay === 0 ? 31 : currentDay; // Handle day 0 as 31
    dayPreview1.textContent = ((currentDay + 29) % 31 || 31).toString();
    dayPreview2.textContent = ((currentDay + 30) % 31 || 31).toString();
    dayPreview4.textContent = ((currentDay + 1) % 31 || 31).toString();
    dayPreview5.textContent = ((currentDay + 2) % 31 || 31).toString();
};

const gridUpdateDay = (value) => {
    if (value > 0) {
        updateDayText(1);
    } else if (value < 0) {
        updateDayText(-1);
    }
};
const gridUpdateYear = (value) => {
    if (value > 0) {
        currentYear++;
    } else if (value < 0) {
        currentYear--;
    }
    yearText.textContent = currentYear.toString()
    yearPreview1.textContent = (currentYear - 2).toString()
    yearPreview2.textContent = (currentYear - 1).toString()
    yearPreview4.textContent = (currentYear + 1).toString()
    yearPreview5.textContent = (currentYear + 2).toString()
}
updateMonthText(0);
updateDayText(1); // Initialize day with 1 (as it can't be 0)

const gridUpdateMonths = (value) => {
    if (value > 0) {
        updateMonthText(1);
    } else if (value < 0) {
        updateMonthText(-1);
    }
};

monthsContainer.addEventListener('wheel', (e) => {
    gridUpdateMonths(e.deltaY)
});
dayContainer.addEventListener('wheel', (e) => {
    gridUpdateDay(e.deltaY)
});
yearContainer.addEventListener('wheel', (e) => {
    gridUpdateYear(e.deltaY)
})

generator.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * fortunes.length)
    const day = currentDay.toString()
    const month = monthText.textContent
    const year = currentYear.toString()
    fortune.textContent = `${fortunes[randomIndex]}${month} ${day}, ${year}.`
})