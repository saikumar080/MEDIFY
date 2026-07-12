// ______ Save Bookings ______
export const saveBookings=(bookings)=>{

    const oldBookings=JSON.parse(localStorage.getItem("bookings")) || [];
    oldBookings.push(bookings);

    localStorage.setItem(
        "bookings",
        JSON.stringify(oldBookings)
    );

}
// _____ Get Bookings ______
export  const getBookings=()=>{
    return JSON.parse(
        localStorage.getItem("bookings")
    )||[];
}