
const BOOKINGS_KEY = "bookings";

// SAVE BOOKING
export const saveBookings = (booking) => {
  try {
    const existingBookings = getBookings();

    const updatedBookings = Array.isArray(booking)
      ? [...existingBookings, ...booking]
      : [...existingBookings, booking];

    localStorage.setItem(
      BOOKINGS_KEY,
      JSON.stringify(updatedBookings)
    );

    return updatedBookings;
  } catch (error) {
    console.error("Error saving booking:", error);
    return null;
  }
};

// GET BOOKINGS
export const getBookings = () => {
  try {
    const storedBookings = localStorage.getItem(BOOKINGS_KEY);
    const bookings = storedBookings
      ? JSON.parse(storedBookings)
      : [];

    return Array.isArray(bookings) ? bookings : [];
  } catch (error) {
    console.error("Error reading bookings:", error);
    return [];
  }
};

// CLEAR BOOKINGS
export const clearBookings = () => {
  localStorage.removeItem(BOOKINGS_KEY);
};
