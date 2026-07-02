const SPANISH_CITIES = [
  "A Coruña","A Estrada","Abrera","Adeje","Adra","Aguilar de Campoo","Aguilar de la Frontera",
  "Agüimes","Águilas","Alaior","Alaquàs","Albacete","Albal","Alcalá de Guadaíra",
  "Alcalá de Henares","Alcalá del Río","Alcalá la Real","Alcantarilla","Alcázar de San Juan",
  "Alcobendas","Alcorcón","Alcoy","Aldaia","Algeciras","Alhaurín de la Torre","Alhaurín el Grande",
  "Alicante","Aljaraque","Almendralejo","Almería","Almonte","Almuñécar","Alora","Alpedrete",
  "Alzira","Amorebieta","Amposta","Andújar","Antequera","Aranda de Duero","Aranjuez",
  "Arcos de la Frontera","Arganda del Rey","Arnedo","Arona","Arrecife",
  "Arroyo de la Encomienda","Artà","Arucas","Astorga","Avilés","Ávila","Ayamonte",
  "Azuqueca de Henares",
  "Badajoz","Balaguer","Banyoles","Barakaldo","Barbastro","Barbate","Barañain","Barcelona",
  "Basauri","Baza","Béjar","Benalmádena","Benicàssim","Benicarló","Benidorm","Berga","Berja",
  "Bilbao","Blanes","Boadilla del Monte","Bormujos","Burgos","Burlada",
  "Cabra","Cáceres","Cádiz","Calafell","Calahorra","Calatayud","Calpe","Calvià","Cambrils",
  "Candelaria","Cangas","Cangas del Narcea","Caravaca de la Cruz","Cartagena","Castelldefels",
  "Castellón de la Plana","Castro Urdiales","Castrillón","Catarroja","Ceuta","Cervera",
  "Chiclana de la Frontera","Cieza","Ciudad Real","Ciudad Rodrigo","Cocentaina","Coin",
  "Collado Villalba","Colmenar Viejo","Coria del Río","Cornellà de Llobregat","Coslada",
  "Cuarte de Huerva","Cuenca","Cuevas del Almanzora","Cullera",
  "Daimiel","Dénia","Don Benito","Donostia-San Sebastián","Dos Hermanas","Durango",
  "Écija","Eibar","Ejea de los Caballeros","El Burgo de Osma","El Ejido","El Espinar",
  "El Puerto de Santa María","El Rosario","El Vendrell","Elche","Elda","Erandio","Errenteria",
  "Estella-Lizarra","Estepona",
  "Felanitx","Ferrol","Figueres","Fraga","Fuengirola","Fuenlabrada",
  "Galapagar","Galdakao","Gáldar","Gandía","Gavà","Gernika-Lumo","Getafe","Getxo","Gijón",
  "Girona","Granadilla de Abona","Granada","Granollers","Guadalajara","Guadix",
  "Guardamar del Segura","Güímar",
  "Haro","Hellín","Hernani","Hospitalet de Llobregat","Huelva","Huércal-Overa","Huesca",
  "Ibiza","Icod de los Vinos","Igualada","Inca","Ingenio","Irun",
  "Jaca","Jaén","Jerez de la Frontera","Jumilla",
  "L'Escala","La Laguna","La Línea de la Concepción","La Orotava","La Rinconada","Lalín",
  "Laredo","Las Palmas de Gran Canaria","Las Rozas de Madrid","Leganés","Leioa","León",
  "Lepe","Linares","Llanes","Lleida","Lloret de Mar","Llucmajor","Logroño","Loja","Lorca",
  "Los Alcázares","Los Llanos de Aridane","Lucena","Lugo",
  "Madrid","Mairena del Aljarafe","Mairena del Alcor","Majadahonda","Malgrat de Mar",
  "Manacor","Manilva","Manresa","Maracena","Marín","Marchena","Marratxí","Marbella","Martos",
  "Mataró","Mazarrón","Medina del Campo","Mejorada del Campo","Melilla","Mérida","Mieres",
  "Mijas","Miranda de Ebro","Mislata","Mogán","Moguer","Molina de Segura","Mollerussa",
  "Mollet del Vallès","Mondragón","Monforte de Lemos","Montijo","Montilla","Monzón",
  "Morón de la Frontera","Motril","Móstoles","Mungia","Murcia",
  "Nájera","Navalcarnero","Nerja","Nerva","Novelda","Nules",
  "O Barco de Valdeorras","Ogíjares","Oliva","Olot","Onda","Ontinyent","Orihuela","Ourense",
  "Oviedo",
  "Palafrugell","Palamós","Palencia","Palma de Mallorca","Pamplona","Parla","Pasaia","Paterna",
  "Peñíscola","Peñarroya-Pueblonuevo","Petrer","Pineda de Mar","Pinto","Plasencia","Ponferrada",
  "Pontevedra","Portugalete","Pozoblanco","Pozuelo de Alarcón","Priego de Córdoba",
  "Puerto de la Cruz","Puerto del Rosario","Puerto Real","Puertollano","Punta Umbría",
  "Puente Genil",
  "Redondela","Rentería","Requena","Reus","Ripoll","Rivas-Vaciamadrid","Ronda",
  "Roquetas de Mar","Roses","Rota","Rubí",
  "Sabadell","Sagunto","Sahagún","Salamanca","Salt","Salou","San Bartolomé de Tirajana",
  "San Cristóbal de La Laguna","San Fernando","San Fernando de Henares",
  "San Juan de Aznalfarache","San Pedro del Pinatar","San Sebastián de los Reyes",
  "Sanlúcar de Barrameda","Santa Coloma de Gramenet","Santa Cruz de Tenerife",
  "Santa Lucía de Tirajana","Santa Pola","Santander","Santiago de Compostela",
  "Santiago del Teide","Sarria","Segovia","Sestao","Sevilla","Sitges","Sóller","Soria","Sueca",
  "Talavera de la Reina","Tafalla","Tarazona","Tarancón","Tarifa","Tarragona","Telde",
  "Terrassa","Teruel","Toledo","Tolosa","Tomares","Tomelloso","Torre-Pacheco",
  "Torredonjimeno","Torrelodones","Torremolinos","Torrent","Torrevieja","Torroella de Montgrí",
  "Tortosa","Torrejón de Ardoz","Tudela",
  "Úbeda","Utebo","Utiel","Utrera",
  "Valdemoro","Valdepeñas","Valls","Valladolid","Vélez-Málaga","Verín","Vic",
  "Vilagarcía de Arousa","Viladecans","Vilanova i la Geltrú","Vila-real","Vilassar de Mar",
  "Villanueva de la Serena","Villena","Vinaròs","Vitoria-Gasteiz","Vigo",
  "Xirivella",
  "Yecla",
  "Zafra","Zamora","Zarautz","Zaragoza"
].sort();

function populateCitySelect(selectId, placeholder) {
  const sel = document.getElementById(selectId);
  if (!sel) return;
  sel.innerHTML = '<option value="">' + (placeholder || 'Selecciona tu ciudad...') + '</option>';
  SPANISH_CITIES.forEach(function(city) {
    const opt = document.createElement('option');
    opt.value = city;
    opt.textContent = city;
    sel.appendChild(opt);
  });
}

function initCityAutocomplete(inputId, dropdownId) {
  const input = document.getElementById(inputId);
  const dropdown = document.getElementById(dropdownId);
  if (!input || !dropdown) return;

  input.addEventListener('input', function () {
    const q = this.value.trim().toLowerCase();
    dropdown.innerHTML = '';
    if (!q) { dropdown.style.display = 'none'; return; }

    const matches = SPANISH_CITIES.filter(c => c.toLowerCase().includes(q)).slice(0, 10);
    if (!matches.length) { dropdown.style.display = 'none'; return; }

    matches.forEach(function(city) {
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
    setTimeout(function() { dropdown.style.display = 'none'; }, 150);
  });

  input.addEventListener('keydown', function (e) {
    const items = dropdown.querySelectorAll('.city-item');
    let active = dropdown.querySelector('.city-item.active');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!active) { if (items[0]) items[0].classList.add('active'); }
      else {
        active.classList.remove('active');
        const next = active.nextSibling || items[0];
        if (next) next.classList.add('active');
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!active) { if (items[items.length-1]) items[items.length-1].classList.add('active'); }
      else {
        active.classList.remove('active');
        const prev = active.previousSibling || items[items.length-1];
        if (prev) prev.classList.add('active');
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (active) { input.value = active.textContent.replace('📍 ','').trim(); dropdown.style.display = 'none'; }
    } else if (e.key === 'Escape') {
      dropdown.style.display = 'none';
    }
  });
}
