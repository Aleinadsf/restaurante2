// CREACION DE PLATOS DEL MENU
const platoMenu01 = new Plato("Pescado frito con lentejas","text",0);
const platoMenu02 = new Plato("Arroz con pollo","text",0);
const platoMenu03 = new Plato("Estofado","text",0);
const platoMenu04 = new Plato("Pescado frito","text",0);
const platoMenu05= new Plato("Mondongito a lo Italiano","text",0);
const platoMenu06 = new Plato("Tallarin Rojo","text",0);
const platoMenu07 = new Plato("Tallarin verde","text",0);
const platoMenu08 = new Plato("Pure con pollo al horno","text",0);
const platoMenu09 = new Plato("Garbanzo con pescado frito","text",0);



// CREACION DE PLATOS DE LA CARTA


//CREACION DE LAS COMIDAS Y SECCIONES DE LA CARTA Y MENU
const menu = new Seccion();
menu.agregarSeccion("Entrada",[]);
menu.agregarSeccion("Segundo",[]);
menu.agregarSeccion("Bebida",[]);


menu.agregarPlato("");
const carta = new Seccion();

const sopa = new Plato();