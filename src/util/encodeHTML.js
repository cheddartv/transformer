const encodeHTML = (str) =>
  str.replace(/&/g, '&amp').replace(/'/g, '&apos').replace(/"/g, '&quot').replace(/>/g, '&gt').replace(/</g, '&lt')

export default encodeHTML
