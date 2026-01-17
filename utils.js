function formatEvent(event) {
  return JSON.stringify(event, null, 2);
}

module.exports = { formatEvent };
