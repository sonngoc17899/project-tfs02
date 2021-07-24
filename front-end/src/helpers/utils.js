const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const upperCamelCaseToSnakeCase = (value) => {
  return value
    .replace(/^([A-Z])/, ($1) => $1.toLowerCase())
    .replace(/([A-Z])/g, ($1) => `-${$1.toLowerCase()}`);
};
const extension = (extensions) =>
  (value) => {

      if (value === undefined || value === null || value.length === 0) {
          return true
      }
      if (value && value.name) {
        console.log(value.name)
          const ext = value.name.split('.').pop()
          return extensions.indexOf(ext.toLowerCase()) !== -1
      }
      return  false
  };
const milliseconds = (h = 0, m = 0, s = 0) => (h * 60 * 60 + m * 60 + s) * 1000;

const formatNumber = (number, places, thousand, decimal) => {
    number = number || 0
    places = !isNaN(places = Math.abs(places)) ? places : 2
    thousand = thousand || ','
    decimal = decimal || '.'
    var negative = number < 0 ? '-' : ''
    var i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + ''
    let j = i.length
    j = j > 3 ? (j % 3) : 0

    return negative + (j ? i.substr(0, j) + thousand : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : '')
}

export {
    capitalize,
    upperCamelCaseToSnakeCase,
    milliseconds,
    formatNumber,
    extension
};
