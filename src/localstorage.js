const USERS_KEY = "staylyUsers";
const CURRENT_USER_KEY = "staylyCurrentUser";
const TRIPS_KEY = "staylyTrips";

export function getUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
}

export function registerUser(userData) {
  const users = getUsers();

  const existingUser = users.find(
    (user) =>
      user.email.toLowerCase() === userData.email.toLowerCase()
  );

  if (existingUser) {
    return {
      success: false,
      message: "This email is already registered.",
    };
  }

  const newUser = {
    id: Date.now(),
    name: userData.name,
    email: userData.email,
    phone: userData.phone,
    password: userData.password,
  };

  users.push(newUser);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));

  return {
    success: true,
    user: newUser,
  };
}

export function loginUser(email, password) {
  const users = getUsers();

  const user = users.find(
    (user) =>
      user.email.toLowerCase() === email.toLowerCase() &&
      user.password === password
  );

  if (!user) {
    return {
      success: false,
      message: "Account not found or password is incorrect.",
    };
  }

  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));

  return {
    success: true,
    user,
  };
}

export function getCurrentUser() {
  return JSON.parse(
    localStorage.getItem(CURRENT_USER_KEY)
  );
}

export function logoutUser() {
  localStorage.removeItem(CURRENT_USER_KEY);
}

export function getTrips() {
  return JSON.parse(localStorage.getItem(TRIPS_KEY)) || [];
}

export function saveTrip(trip) {
  const currentUser = getCurrentUser();

  if (!currentUser) {
    return false;
  }

  const trips = getTrips();

  const newTrip = {
    ...trip,
    id: Date.now(),
    userId: currentUser.id,
    userEmail: currentUser.email,
    status: "confirmed",
  };

  trips.push(newTrip);
  localStorage.setItem(TRIPS_KEY, JSON.stringify(trips));

  return true;
}