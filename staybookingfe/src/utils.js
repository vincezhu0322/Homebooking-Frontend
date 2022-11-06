 const domain = '';

 export const login = (credential, asHost) => {
    const loginUrl = `http://localhost:3000/authenticate/${asHost ? "host" : "guest"}`;
    return fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credential),
    }).then((response) => {
      if (response.status !== 200) {
        throw Error("Fail to log in");
      }
   
      return response.json();
    });
  };
   
  export const register = (credential, asHost) => {
    const registerUrl = `http://localhost:3000/register/${asHost ? "host" : "guest"}`;
    return fetch(registerUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credential),
    }).then((response) => {
      if (response.status !== 200) {
        throw Error("Fail to register");
      }
    });
  };
   
  export const getReservations = () => {
    const authToken = localStorage.getItem("authToken");
    const listReservationsUrl = `http://localhost:3000/reservations`;
   
    return fetch(listReservationsUrl, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }).then((response) => {
      if (response.status !== 200) {
        throw Error("Fail to get reservation list");
      }
   
      return response.json();
    });
  };
   
  export const getStaysByHost = () => {
    const authToken = localStorage.getItem("authToken");
    const listStaysUrl = `http://localhost:3000/stays/`;
   
    return fetch(listStaysUrl, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }).then((response) => {
      if (response.status !== 200) {
        throw Error("Fail to get stay list");
      }
   
      return response.json();
    });
  };
   
  export const searchStays = (query) => {
    const authToken = localStorage.getItem("authToken");
    const searchStaysUrl = new URL(`http://localhost:3000/search/`);
    searchStaysUrl.searchParams.append("guest_number", query.guest_number);
    searchStaysUrl.searchParams.append(
      "checkin_date",
      query.checkin_date.format("YYYY-MM-DD")
    );
    searchStaysUrl.searchParams.append(
      "checkout_date",
      query.checkout_date.format("YYYY-MM-DD")
    );
    searchStaysUrl.searchParams.append("lat", 37);
    searchStaysUrl.searchParams.append("lon", -122);
   
    return fetch(searchStaysUrl, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }).then((response) => {
      if (response.status !== 200) {
        throw Error("Fail to search stays");
      }
   
      return response.json();
    });
  };

  export const deleteStay = (stayId) => {
    const authToken = localStorage.getItem("authToken");
    const deleteStayUrl = `http://localhost:3000/stays/${stayId}`;
   
    return fetch(deleteStayUrl, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }).then((response) => {
      if (response.status !== 200) {
        throw Error("Fail to delete stay");
      }
    });
  };
   
  export const bookStay = (data) => {
    const authToken = localStorage.getItem("authToken");
    const bookStayUrl = `http://localhost:3000/reservations`;
   
    return fetch(bookStayUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.status !== 200) {
        throw Error("Fail to book reservation");
      }
    });
  };
   
  export const cancelReservation = (reservationId) => {
    const authToken = localStorage.getItem("authToken");
    const cancelReservationUrl = `http://localhost:3000/reservations/${reservationId}`;
   
    return fetch(cancelReservationUrl, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }).then((response) => {
      if (response.status !== 200) {
        throw Error("Fail to cancel reservation");
      }
    });
  };
   
  export const getReservationsByStay = (stayId) => {
    const authToken = localStorage.getItem("authToken");
    const getReservationByStayUrl = `http://localhost:3000/stays/reservations/${stayId}`;
   
    return fetch(getReservationByStayUrl, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }).then((response) => {
      if (response.status !== 200) {
        throw Error("Fail to get reservations by stay");
      }
   
      return response.json();
    });
  };
   
  export const uploadStay = (data) => {
    const authToken = localStorage.getItem("authToken");
    const uploadStayUrl = `http://localhost:3000/stays`;
   
    return fetch(uploadStayUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: data,
    }).then((response) => {
      if (response.status !== 200) {
        throw Error("Fail to upload stay");
      }
    });
  };
  
  