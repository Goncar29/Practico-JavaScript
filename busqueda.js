console.log(salarios);

// Análisis personal para Juanita
function encontrarPersona(personaEnBusqueda) {
    return salarios.find(persona => persona.name == personaEnBusqueda);
    
  // const persona = salarios.find((persona) => {
  //   return persona.name == personaEnBusqueda;
  // });
  // return persona;
}

function medianaPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    const salarios = trabajos.map(function (elemento) {
        return elemento.salario;
});

    const medianaSalarios = PlatziMath.calcularMediana(salarios);

  // console.log(medianaSalarios);
    return medianaSalarios;
}

// Proyección salarial personal
function proyeccionPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    let porcentajesCrecimiento = [];
    
    for (let i = 1; i < trabajos.length; i++) { // i=1 porque se calcula el salario nuevo con el viejo
        // ((salarioActual - salarioPasado) / salarioPasado
        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos[i - 1].salario;
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento / salarioPasado;
        porcentajesCrecimiento.push(porcentajeCrecimiento)
    }

    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);

  // console.log({porcentajesCrecimiento, medianaPorcentajesCrecimiento});

    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const aumento = ultimoSalario * medianaPorcentajesCrecimiento;
    const nuevoSalario = ultimoSalario + aumento;

    return nuevoSalario;
}

