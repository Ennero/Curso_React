



const nombre = 'Enner';
const apellido = 'Mendizabal';

const nombre_completo = `
${nombre}
${apellido}
${1 + 1}
`;

console.log(nombre_completo);


function saludar(){
  return `Hola ` + nombre_completo;
}

console.log(`Este es un texto: ${saludar(nombre)}`);