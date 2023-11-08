const userEventEmitter = require("./eventEmitterModule");

function userLogin(userId) {
  const randomDelay = Math.random() * (2 - 0.1) + 0.1;

  setTimeout(() => {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`${timestamp}: USER_${userId} logged in`);
    userEventEmitter.emit("userLoggedIn", userId);
  }, randomDelay * 1000);
}

function userLogout(userId) {
  const timestamp = new Date().toLocaleTimeString();
  console.log(`${timestamp}: USER_${userId} logged out`);
  userEventEmitter.emit("userLoggedOut", userId);
}

// Subscribe to events
userEventEmitter.on("userLoggedIn", (userId) => {
  console.log(`Event: userLoggedIn - USER_${userId} logged in`);
});

userEventEmitter.on("userLoggedOut", (userId) => {
  console.log(`Event: userLoggedOut - USER_${userId} logged out`);
});

// Simulate user logins
for (let i = 1; i <= 5; i++) {
  userLogin(i);
}

// Simulate user logouts after 10 seconds
setTimeout(() => {
  for (let i = 1; i <= 5; i++) {
    userLogout(i);
  }
}, 10000);
