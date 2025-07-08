class Plato{

    constructor(nombre, descripcion, puntuacion, precio = 0){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.puntuacion = puntuacion;
        this.precio = precio;
    }
}


class Seccion{
    constructor(){
        this.secciones={};
    }

    agregarSeccion(nombreSeccion, ConjuntoPlatos){
        if(!this.secciones[nombreSeccion]){
            this.secciones[nombreSeccion] = ConjuntoPlatos;
        }else{
            console.log("Esta seccion ya existe, por favor ingrese otra");
        }
    }

    agregarPlato(nombreSeccion, Plato){
        if(!this.secciones[nombreSeccion]){
            this.secciones[nombreSeccion] = Plato;
        }else{
            this.secciones[nombreSeccion].push(Plato);
        }
    }

    quitarPlato(nombreSeccion, Plato){
        let section = this.secciones[nombreSeccion];
        if(section){
            let indicePlato = section.indexof(Plato);
            if(indicePlato !== -1){
                section.splice(indicePlato,1);
            }
        }
    }
}