// https://javascript.plainenglish.io/convert-string-to-different-case-styles-snake-kebab-camel-and-pascal-case-in-javascript-da724b7220d7


const toSnakeCase = (str) => {
  return str && 
        str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
          .map(x => x.toLowerCase())
          .join('_');
}

const toKebabCase = (str) => {
  return str && 
        str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
          .map(x => x.toLowerCase())
          .join('-');
}

const toCamelCase = (str) => {
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

const toPascalCase = (str) => {
  return str.replace(/\w\S*/g, m=>m.charAt(0).toUpperCase() + m.substr(1).toLowerCase());
}


console.log('toSnakeCase', toSnakeCase(process.argv[2]))
console.log('toKebabCase', toKebabCase(process.argv[2]))
console.log('toCamelCase', toCamelCase(process.argv[2]))
console.log('toPascalCase', toPascalCase(process.argv[2]))