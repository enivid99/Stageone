const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function timeUpdate(){
    const currentDate = new Date();
    const currentDay = daysOfWeek[currentDate.getUTCDay()];
    const currentTimeUTC = currentDate.getTime();
            
    document.querySelector("[data-testid='currentDay']").textContent = `${currentDay}`;
    document.querySelector("[data-testid='currentTimeUTC']").textContent = `${currentTimeUTC} ms`;
}

timeUpdate();
setInterval(timeUpdate, 100);