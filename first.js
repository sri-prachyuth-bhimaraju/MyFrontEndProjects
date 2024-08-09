function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var day = now.getDay();
    var date = now.getDate();
    var month = now.getMonth();
    var year = now.getFullYear();

    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    hours = hours % 12 || 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    date = date < 10 ? '0' + date : date;

    var period = hours < 12 ? 'AM' : 'PM';

    document.querySelector('.time').innerHTML = `${hours}:${minutes}:${seconds} ${period}`;
    document.querySelector('.date-time').innerHTML = `${dayNames[day]}, ${monthNames[month]} ${date}, ${year}`;
}

updateClock(); // Initial update
setInterval(updateClock, 1000); // Interval update
