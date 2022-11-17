module.exports = {
    format_time: (date) => {
      return date.toLocaleTimeString();
    },
    format_date: (date) => {
      // get and format the month, date, and year using Date methods
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
  
        new Date(date).getFullYear()
      }`;
    },
};