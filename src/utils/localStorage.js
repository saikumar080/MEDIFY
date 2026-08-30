const BOOKINGS_KEY = "bookings";

// =========================
// SAVE BOOKING
// =========================

export const saveBookings = (booking) => {
  try {
    const existingBookings = JSON.parse(
      localStorage.getItem(BOOKINGS_KEY)
    );

    const bookings = Array.isArray(existingBookings)
      ? existingBookings
      : [];

    bookings.push(booking);

    localStorage.setItem(
      BOOKINGS_KEY,
      JSON.stringify(bookings)
    );

    return booking;
  } catch (error) {
    console.error("Error saving booking:", error);
    return null;
  }
};

// =========================
// GET BOOKINGS
// =========================

export const getBookings = () => {
  try {
    const bookings = JSON.parse(
      localStorage.getItem(BOOKINGS_KEY)
    );

    return Array.isArray(bookings)
      ? bookings
      : [];
  } catch (error) {
    console.error("Error reading bookings:", error);

    return [];
  }
};

// =========================
// CLEAR BOOKINGS
// =========================

export const clearBookings = () => {
  localStorage.removeItem(BOOKINGS_KEY);
};