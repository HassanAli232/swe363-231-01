const EventEmitter = require("events");

class UserEventEmitter extends EventEmitter {}

const userEventEmitter = new UserEventEmitter();

module.exports = userEventEmitter;
