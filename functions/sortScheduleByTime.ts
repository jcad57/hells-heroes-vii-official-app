const convertTo24Hour = (time) => {
    let [hours, minutes] = time.match(/\d+/g).map(Number);
    const period = time.slice(-2); // Extract AM/PM

    if (period === "PM" && hours !== 12) hours += 12; // Convert PM times (except 12 PM)
    if (period === "AM" && hours === 12) hours = 0; // Convert 12 AM to 00

    let totalMinutes = hours * 60 + minutes;

    // If the time is between 12:00 AM and 5:00 AM, treat it as part of the "next day"
    if (totalMinutes < 300) totalMinutes += 24 * 60; // Shift early morning times to be "after" 11 PM

    return totalMinutes;
};

export const filteredScheduleByStage = (filteredScheduleByDay, stage) => {
    return filteredScheduleByDay
        .filter((band) => band.stage === stage)
        .sort((a, b) => convertTo24Hour(a.time) - convertTo24Hour(b.time));
};
