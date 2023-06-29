// Obtiene el contenedor de la tabla de profesores
const tablaProfesores = document.getElementById('tablaProfesores');

// Carga los datos de profesores desde una API o archivo JSON
fetch('bd.json')
  .then(response => response.json())
  .then(data => {
    // Genera el contenido de la tabla de profesores
    data.profesores.forEach((profesor, index) => {
      const divProfesor = document.createElement('div');
      divProfesor.classList.add(`P`);

      const divIdentificacion = document.createElement('div');
      divIdentificacion.classList.add('identificacion');
      divIdentificacion.textContent = profesor.identificacion;
      divProfesor.appendChild(divIdentificacion);

      const buttonVer = document.createElement('button');
      buttonVer.classList.add('view-button');
      buttonVer.textContent = 'Ver';
      divProfesor.appendChild(buttonVer);

      const divData = document.createElement('div');
      divData.classList.add('data');
      divProfesor.appendChild(divData);

      const img = document.createElement('img');
      img.src = profesor.imagen;
      img.alt = `Imagen ${index + 1}`;
      divData.appendChild(img);

      const divNameContainer = document.createElement('div');
      divNameContainer.classList.add('name-container');
      divData.appendChild(divNameContainer);

      const divProfessorName = document.createElement('div');
      divProfessorName.classList.add('professor-name');
      divProfessorName.textContent = profesor.nombres;
      divNameContainer.appendChild(divProfessorName);

      const divProfessorLastName = document.createElement('div');
      divProfessorLastName.classList.add('professor-lastname');
      divProfessorLastName.textContent = profesor.apellidos;
      divNameContainer.appendChild(divProfessorLastName);



      const divTipoContrato = document.createElement('div');
      divTipoContrato.classList.add('tipocontrato');
      divTipoContrato.textContent = profesor.tipocontrato;
      divProfesor.appendChild(divTipoContrato);

      tablaProfesores.appendChild(divProfesor);
    });
  })
  .catch(error => {
    console.log('Error al cargar los datos de profesores:', error);
  });
  