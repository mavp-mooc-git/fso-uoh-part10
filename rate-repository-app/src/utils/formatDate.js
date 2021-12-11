const formatDate = (d) => {
  const date = new Date(d).toISOString().slice(0,10);
  return date.split("-").reverse().join(".");
};

export default formatDate;
