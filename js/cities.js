const SPANISH_CITIES = [
  "A Coruña","Albacete","Alcalá de Henares","Alcobendas","Alcorcón","Alcoy","Algeciras",
  "Alicante","Almería","Arona","Arucas","Arrecife","Badajoz","Badalona","Barakaldo",
  "Barcelona","Benidorm","Bilbao","Burgos","Cáceres","Cádiz","Cartagena","Castellón de la Plana",
  "Chiclana de la Frontera","Colmenar Viejo","Córdoba","Cornellà de Llobregat","Dos Hermanas",
  "El Ejido","El Puerto de Santa María","Elche","Elda","Fuenlabrada","Gandia","Getafe",
  "Gijón","Granada","Guadalajara","Hospitalet de Llobregat","Huelva","Huesca","Jaén",
  "Jerez de la Frontera","La Laguna","La Línea de la Concepción","Las Palmas de Gran Canaria",
  "Leganés","León","Lérida","Linares","Logroño","Lugo","Madrid","Malgrat de Mar","Málaga",
  "Manresa","Marbella","Mataró","Mérida","Molina de Segura","Móstoles","Motril","Murcia",
  "Orihuela","Ourense","Oviedo","Palencia","Palma","Pamplona","Parla","Pontevedra",
  "Pozuelo de Alarcón","Reus","Roquetas de Mar","Rubí","Sabadell","Salamanca","San Cristóbal de La Laguna",
  "San Fernando","San Sebastián","Santa Coloma de Gramenet","Santa Cruz de Tenerife",
  "Santander","Santiago de Compostela","Segovia","Sevilla","Soria","Tarragona","Telde",
  "Terrassa","Toledo","Torrejón de Ardoz","Torrevieja","Torrent","Tudela","Valencia",
  "Valladolid","Vélez-Málaga","Vigo","Vila-real","Vitoria","Zamora","Zaragoza"
];

function initCityAutocomplete(inputId, dropdownId) {
  const input = document.getElementById(inputId);
  const dropdown = document.getElementById(dropdownId);
  if (!input || !dropdown) return;

  input.addEventListener('input', function () {
    const q = this.value.trim().toLowerCase();
    dropdown.innerHTML = '';
    if (!q) { dropdown.style.display = 'none'; return; }

    const matches = SPANISH_CITIES.filter(c => c.toLowerCase().startsWith(q)).slice(0, 8);
    if (matches.length === 0) { dropdown.style.display = 'none'; return; }

    matches.forEach(city => {
      const item = document.createElement('div');
      item.className = 'city-item';
      item.innerHTML = '📍 ' + city;
      item.addEventListener('mousedown', function (e) {
        e.preventDefault();
        input.value = city;
        dropdown.style.display = 'none';
        input.dispatchEvent(new Event('change'));
      });
      dropdown.appendChild(item);
    });
    dropdown.style.display = 'block';
  });

  input.addEventListener('blur', function () {
    setTimeout(() => { dropdown.style.display = 'none'; }, 150);
  });

  input.addEventListener('keydown', function (e) {
    const items = dropdown.querySelectorAll('.city-item');
    let active = dropdown.querySelector('.city-item.active');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!active) items[0]?.classList.add('active');
      else {
        active.classList.remove('active');
        (active.nextSibling || items[0])?.classList.add('active');
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!active) items[items.length-1]?.classList.add('active');
      else {
        active.classList.remove('active');
        (active.previousSibling || items[items.length-1])?.classList.add('active');
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (active) { input.value = active.textContent.replace('📍 ','').trim(); dropdown.style.display = 'none'; }
    } else if (e.key === 'Escape') {
      dropdown.style.display = 'none';
    }
  });
}
