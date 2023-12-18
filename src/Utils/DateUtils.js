const getDate = (timestamp) => {
  if (!timestamp) return null;
  return new Date(timestamp).toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'short', day: 'numeric'
  });
};

const getTime = (timestamp) => {
  if (!timestamp) {
    return null;
  }
  return new Date(timestamp).toLocaleTimeString('id-ID');
};

export default {
  getDate,
  getTime
};
