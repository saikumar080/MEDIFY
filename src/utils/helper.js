// Builds a single booking record from a center + the day/time the user picked.
export const createBookingEntry = (center, day, time) => {
  return {
    centerId: center.id || center.name,
    centerName: center.name,
    centerAddress: center.address,
    centerImage: center.image || null,
    day,
    time,
    bookedAt: new Date().toISOString(),
  };
};