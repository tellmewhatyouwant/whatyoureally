$(function(){
  var contenedor = $('#lista_noticias');
  var noticias = {
    "lista" : [
      {
        "id" : "1",
        "titulo" : "Monumentos, cuidados unos, monumentos, olvidados otros",
        "url" : "https://www.diariolibre.com/revista/monumentos-cuidados-unos-monumentos-olvidados-otros-DJDL100737",
      },
      {
        "id" : "2",
        "titulo" : "Monumentos olvidados en la Ciudad",
        "url" : "https://parabuenosaires.com/monumentos-olvidados-en-la-ciudad/",
      },
      {
        "id" : "3",
        "titulo" : "Monumentos huérfanos",
        "url" : "http://wvw.nacion.com/viva/2003/octubre/20/portada.html#mo",
      },
      {
        "id" : "4",
        "titulo" : "Indigentes de bronce",
        "url" : "http://wvw.nacion.com/viva/2003/octubre/20/portada.html",
      },
      {
        "id" : "5",
        "titulo" : "MONUMENTO A LOS OBREROS ",
        "url" : "http://www.eltiempo.com/archivo/documento/MAM-580975",
      },
      {
        "id" : "6",
        "titulo" : "Monumentos históricos olvidados por autoridades",
        "url" : "https://diariocorreo.pe/historico/monumentos-historicos-olvidados-por-autorida-21174/",
      },
      {
        "id" : "7",
        "titulo" : "MONUMENTOS OLVIDADOS",
        "url" : "http://www.eltiempo.com/archivo/documento/MAM-1045927",
      },
      {
        "id" : "8",
        "titulo" : "El ultrajado señor Américo Vespucio",
        "url" : "https://www.elespectador.com/impreso/bogota/articuloimpreso196856-el-ultrajado-senor-americo-vespucio",
      },
      {
        "id" : "9",
        "titulo" : "Abandonado y envuelto en plástico, así tienen el monumento de Américo Vespucio",
        "url" : "https://www.publimetro.co/co/noticias/2017/01/24/abandonan-monumento-americo-vespucio-norte-bogota.html",
      },
      {
        "id" : "10",
        "titulo" : "Abandonado y envuelto en plástico, así tienen el monumento de Américo Vespucio",
        "url" : "https://www.publimetro.co/co/noticias/2017/01/24/abandonan-monumento-americo-vespucio-norte-bogota.html",
      },
      {
        "id" : "11",
        "titulo" : "DIEZ MONUMENTOS AL HORROR",
        "url" : "http://cartelurbano.com/diez-monumentos-al-horror",
      },
      {
        "id" : "12",
        "titulo" : "Expropiedad de Pablo Escobar se irá al suelo para convertirse en monumento para víctimas",
        "url" : "https://www.elespectador.com/noticias/nacional/antioquia/expropiedad-de-pablo-escobar-se-ira-al-suelo-para-convertirse-en-monumento-para-victimas-articulo-742130",
      },
      {
        "id" : "13",
        "titulo" : "Esculturas en abandono",
        "url" : "https://www.elespectador.com/opinion/opinion/esculturas-en-abandono-columna-648434",
      },
      {
        "id" : "14",
        "titulo" : "Reponen el bigote robado a 'El Gato' del maestro Botero",
        "url" : "https://www.elespectador.com/noticias/nacional/reponen-el-bigote-robado-el-gato-del-maestro-botero-articulo-337608",
      },
      {
        "id" : "15",
        "titulo" : "Atentado a ‘El Pájaro’, un voluminoso monumento a la injusticias",
        "url" : "http://delaurbe.udea.edu.co/2015/03/10/atentado-a-el-pajaro-un-voluminoso-monumento-a-la-injusticia/",
      },
      {
        "id" : "16",
        "titulo" : "Condena por bombazo a 'El pájaro'",
        "url" : "https://www.elespectador.com/noticias/judicial/condena-bombazo-el-pajaro-articulo-408311",
      },
      {
        "id" : "17",
        "titulo" : "Hicieron madrugar al Señor Caído",
        "url" : "https://www.elespectador.com/impreso/articuloimpreso134943-hicieron-madrugar-al-senor-caido",
      },
      {
        "id" : "18",
        "titulo" : "Macrolingotes",
        "url" : "https://www.elespectador.com/opinion/macrolingotes-columna-99320",
      },
      {
        "id" : "19",
        "titulo" : "Por 5.000 euros subastan capilla en Francia con la condición de que el comprador 'se la lleve'",
        "url" : "https://www.elespectador.com/noticias/actualidad/por-5000-euros-subastan-capilla-en-francia-con-la-condicion-de-que-el-comprador-se-la-lleve-articulo-733959",
      },
      {
        "id" : "20",
        "titulo" : "Obelisco de Buenos Aires recupera su punta tras intervención artística",
        "url" : "https://www.elespectador.com/noticias/actualidad/obelisco-de-buenos-aires-recupera-su-punta-tras-interve-articulo-590616",
      },
      {
        "id" : "21",
        "titulo" : "Retiran monumento en honor a Steve Jobs tras revelación de homosexualidad de su sucesor",
        "url" : "https://www.elespectador.com/noticias/actualidad/retiran-monumento-honor-steve-jobs-tras-revelacion-de-h-articulo-525625",
      },
      {
        "id" : "22",
        "titulo" : "Que digan que estoy dormido",
        "url" : "https://www.elespectador.com/opinion/que-digan-que-estoy-dormido-columna-347348",
      },
      {
        "id" : "23",
        "titulo" : "Falta de turistas pone en peligro la pirámide más antigua del mundo",
        "url" : "https://www.elespectador.com/noticias/elmundo/falta-de-turistas-pone-peligro-piramide-mas-antigua-del-articulo-290000",
      },
      {
        "id" : "24",
        "titulo" : "Plazoleta del Rosario busca bogotanos que la quieran ‘adoptar’",
        "url" : "https://www.elespectador.com/noticias/bogota/plazoleta-del-rosario-busca-bogotanos-que-la-quieran-adoptar-articulo-678720",
      },
      {
        "id" : "25",
        "titulo" : "Quieren tapar el Castillo San Felipe",
        "url" : "https://www.elespectador.com/opinion/opinion/quieren-tapar-el-castillo-san-felipe-columna-628425",
      },
      {
        "id" : "26",
        "titulo" : "Piden demoler 'Monumento a la paz' por ofender a víctimas de los paras",
        "url" : "https://www.elespectador.com/noticias/paz/piden-demoler-monumento-paz-ofender-victimas-de-los-par-articulo-245662",
      },
      {
        "id" : "27",
        "titulo" : "Un monumento sin pasado",
        "url" : "https://www.elespectador.com/opinion/opinion/un-monumento-sin-pasado-columna-639719",
      },
      {
        "id" : "28",
        "titulo" : "'Operación Monumento': hombres que arriesgaron su vida por el arte en plena guerra",
        "url" : "https://www.elespectador.com/entretenimiento/agenda/cine/operacion-monumento-hombres-arriesgaron-su-vida-el-arte-articulo-476547",
      },
      {
        "id" : "29",
        "titulo" : "Roban parte de la espada de la estatua de Simón Bolívar en Bogotá",
        "url" : "https://www.elespectador.com/noticias/bogota/roban-parte-de-la-espada-de-la-estatua-de-simon-bolivar-en-bogota-articulo-739652",
      },
      {
        "id" : "30",
        "titulo" : "Denuncian presuntos traslados irregulares de monumentos en Cartagena",
        "url" : "https://www.elespectador.com/noticias/nacional/denuncian-presuntos-traslados-irregulares-de-monumentos-articulo-533474",
      },
      {
        "id" : "31",
        "titulo" : "Por vandalismo contra monumentos, bogotanos pierden $675 millones",
        "url" : "https://www.elespectador.com/noticias/bogota/vandalismo-contra-monumentos-bogotanos-pierden-675-mill-articulo-668842",
      },
      {
        "id" : "32",
        "titulo" : "La Rebeca, un símbolo de Bogotá profanado por vándalos",
        "url" : "https://www.elespectador.com/noticias/bogota/rebeca-un-simbolo-de-bogota-profanado-vandalos-articulo-572846",
      },
      {
        "id" : "33",
        "titulo" : "El proyecto que regaña a turistas que se toman fotos en monumento del holocausto",
        "url" : "https://www.elespectador.com/noticias/actualidad/el-proyecto-regana-turistas-se-toman-fotos-monumento-de-articulo-675641",
      },
      {
        "id" : "34",
        "titulo" : "Ni una sola puerta se ha salvado de los grafitis en Chapinero y Teusaquillo",
        "url" : "https://www.elespectador.com/noticias/bogota/ni-una-sola-puerta-se-ha-salvado-de-los-grafitis-chapin-articulo-571803",
      },
      {
        "id" : "35",
        "titulo" : "Las Gordas de Botero se pusieron tapabocas por contaminación del aire en Medellín",
        "url" : "https://www.elespectador.com/noticias/nacional/antioquia/gordas-de-botero-se-pusieron-tapabocas-contaminacion-de-articulo-626099",
      },
      {
        "id" : "36",
        "titulo" : "Empresas y organizaciones deberán 'adoptar' un monumento histórico",
        "url" : "https://www.elespectador.com/noticias/bogota/empresas-y-organizaciones-deberan-adoptar-un-monumento-articulo-604877",
      },
      {
        "id" : "37",
        "titulo" : "Le roban un bigote al gato de Fernando Botero",
        "url" : "https://www.elespectador.com/noticias/nacional/le-roban-un-bigote-al-gato-de-fernando-botero-articulo-337155",
      },
      {
        "id" : "38",
        "titulo" : "'Pachito' y la escultura",
        "url" : "https://www.elespectador.com/opinion/pachito-y-la-escultura-columna-270294",
      },
      {
        "id" : "39",
        "titulo" : "Mural inmoral",
        "url" : "https://www.museodeantioquia.co/noticia/mural-inmoral/",
      },
      {
        "id" : "40",
        "titulo" : "Desmontan escultura de Diomedes Díaz a la que le robaron hasta la medalla",
        "url" : "https://www.elespectador.com/noticias/nacional/desmontan-escultura-de-diomedes-diaz-la-que-le-robaron-hasta-la-medalla-articulo-736359",
      },
      {
        "id" : "41",
        "titulo" : "Fotos obscenas y otros vejámenes contra estatua de Diomedes Díaz en Valledupar",
        "url" : "https://noticias.caracoltv.com/colombia/fotos-obscenas-y-otros-vejamenes-contra-estatua-de-diomedes-diaz-en-valledupar",
      },
      {
        "id" : "42",
        "titulo" : "Diomedes Díaz y la escultura más famosa de Colombia",
        "url" : "https://www.elespectador.com/noticias/actualidad/diomedes-diaz-y-la-escultura-mas-famosa-de-colombia-articulo-736849",
      },
      {
        "id" : "43",
        "titulo" : "Mujeres de arena tapan sus senos por respeto al papa Francisco",
        "url" : "https://www.elespectador.com/noticias/elmundo/mujeres-de-arena-tapan-sus-senos-respeto-al-papa-franci-articulo-434286",
      },
      {
        "id" : "44",
        "titulo" : "El Cristo negado de Santander",
        "url" : "https://www.elespectador.com/noticias/judicial/el-cristo-negado-de-santander-articulo-540843",
      },
      {
        "id" : "45",
        "titulo" : "Colón retira virgen de su estadio por creer que le da mala suerte",
        "url" : "https://www.elespectador.com/deportes/futbolinternacional/colon-retira-virgen-de-su-estadio-creer-le-da-mala-suer-articulo-298198",
      },
      {
        "id" : "46",
        "titulo" : "El escultor que se inmortalizó en La Candelaria",
        "url" : "https://www.elespectador.com/noticias/cultura/el-escultor-se-inmortalizo-candelaria-articulo-624459",
      },
      {
        "id" : "47",
        "titulo" : "MONUMENTOS PARA BOGOTÁ",
        "url" : "http://www.eltiempo.com/archivo/documento/MAM-1278853",
      },
      {
        "id" : "48",
        "titulo" : "'La Mariposa' ya no vuela",
        "url" : "https://www.semana.com/on-line/articulo/la-mariposa-no-vuela/55971-3",
      },
      {
        "id" : "49",
        "titulo" : "Los monumentos más raros de Bogotá",
        "url" : "https://www.bacanika.com/historia/cronicas/item/monumentos-raros-de-bogota.html",
      },
      {
        "id" : "50",
        "titulo" : "La escultura de Gandhi que enfrenta el abandono y el riesgo de caerse",
        "url" : "http://www.eltiempo.com/bogota/escultura-de-gandhi-en-bogota-49183",
      },
      {
        "id" : "51",
        "titulo" : "Cómo desaparecer cuatro toneladas de arte: “Monumento a Gandhi” de Feliza Bursztyn",
        "url" : "http://esferapublica.org/nfblog/como-desaparecer-cuatro-toneladas-de-arte-monumento-a-gandhi-de-feliza-bursztyn/",
      },
      {
        "id" : "52",
        "titulo" : "Se robaron emblemático venado de la Porciúncula",
        "url" : "https://www.publimetro.co/co/noticias/2012/03/07/se-robaron-emblematico-venado-de-la-porciuncula.html",
      },
      {
        "id" : "53",
        "titulo" : "Robaron venado de bronce del monumento de La Porciúncula",
        "url" : "https://www.elespectador.com/noticias/bogota/robaron-venado-de-bronce-del-monumento-de-porciuncula-articulo-330939",
      },
      {
        "id" : "54",
        "titulo" : "A San Francisco le robaron su venado",
        "url" : "https://www.elespectador.com/noticias/bogota/san-francisco-le-robaron-su-venado-articulo-330986",
      },
      {
        "id" : "55",
        "titulo" : "Se robaron escultura de la iglesia de La Porciúncula",
        "url" : "http://www.eltiempo.com/archivo/documento/CMS-11295241",
      },
      {
        "id" : "56",
        "titulo" : "Buscan a venado de bronce de la Iglesia de La Porciúncula",
        "url" : "http://www.radiosantafe.com/2012/03/08/buscan-a-venado-de-bronce-de-la-iglesia-de-la-porciuncula/",
      },
      {
        "id" : "57",
        "titulo" : "El Monumento a las Banderas cumple 70 años en medio de grafitis",
        "url" : "https://www.kienyke.com/noticias/grafitis-del-monumento-banderas",
      },
      {
        "id" : "58",
        "titulo" : "BANDERAS EN KENNEDY",
        "url" : "http://www.eltiempo.com/archivo/documento/MAM-713354",
      },
      {
        "id" : "59",
        "titulo" : "Monumento de Banderas será restaurado y reforzado estructuralmente como si fuera un edificio",
        "url" : "http://www.eltiempo.com/archivo/documento/CMS-5114730",
      },
      {
        "id" : "60",
        "titulo" : "El triste vuelo de la obra 'Ala solar'",
        "url" : "http://www.eltiempo.com/archivo/documento/CMS-13143773",
      },
      {
        "id" : "61",
        "titulo" : "EL ALA SOLAR: VUELO IMAGINARIO",
        "url" : "http://www.eltiempo.com/archivo/documento/MAM-207986",
      },
      {
        "id" : "62",
        "titulo" : "ESCULTURA Y PAISAJE EN LA 26",
        "url" : "http://www.eltiempo.com/archivo/documento/MAM-272910",
      },
      {
        "id" : "63",
        "titulo" : "La verdad sobre 'La Rebeca'",
        "url" : "https://www.elespectador.com/noticias/bogota/verdad-sobre-rebeca-articulo-387621",
      },
      {
        "id" : "64",
        "titulo" : "'La Rebeca' tiene 'cáncer' y sería 'internada' en un museo",
        "url" : "http://www.eltiempo.com/archivo/documento/CMS-12584211",
      },
      {
        "id" : "65",
        "titulo" : "Arte, memoria y monumento",
        "url" : "https://www.revistaarcadia.com/opinion/columnas/articulo/arte-memoria-monumento/42566",
      },
      {
        "id" : "66",
        "titulo" : "El triste rostro de los monumentos",
        "url" : "https://www.revistaarcadia.com/impresa/reportaje/articulo/recorrido-monumentos-bogota/44155",
      },
      {
        "id" : "67",
        "titulo" : "Espacios vacíos, archivos críticos y robots maliciosos",
        "url" : "http://esferapublica.org/nfblog/espacios-vacios-archivos-criticos-y-robots-maliciosos/",
      },
      {
        "id" : "68",
        "titulo" : "El Museo en Llamas",
        "url" : "http://esferapublica.org/nfblog/museo-en-llamas/",
      },
      {
        "id" : "69",
        "titulo" : "Lo público del arte público: entre lo vertical y lo horizontal",
        "url" : "http://esferapublica.org/nfblog/lo-publico-del-arte-publico-entre-lo-vertical-y-lo-horizontal/",
      },
      {
        "id" : "70",
        "titulo" : "Furor",
        "url" : "http://esferapublica.org/nfblog/furor/",
      },
      {
        "id" : "71",
        "titulo" : "Acerado",
        "url" : "http://esferapublica.org/nfblog/acerado/",
      },
      {
        "id" : "72",
        "titulo" : "El difícil arte de representar a las víctimas",
        "url" : "http://esferapublica.org/nfblog/el-arte-de-representar-victimas/",
      },
      {
        "id" : "73",
        "titulo" : "El robo como obra de arte",
        "url" : "http://esferapublica.org/nfblog/documenta-caso-roger-bernat-robo-obra-arte/",
      },
      {
        "id" : "74",
        "titulo" : "El Papa Francisco, Artista",
        "url" : "http://esferapublica.org/nfblog/papa-francisco-artista/",
      },
      {
        "id" : "75",
        "titulo" : "El performance mediático se toma el Museo",
        "url" : "http://esferapublica.org/nfblog/performance-mediatico-mambo/",
      },
      {
        "id" : "76",
        "titulo" : "Expuesto, el objeto es castrado. Apuntes sobre arte y política",
        "url" : "http://esferapublica.org/nfblog/expuesto-el-objeto-es-castrado-apuntes-sobre-arte-y-politica/",
      },
      {
        "id" : "77",
        "titulo" : "la desaparición de la escultura",
        "url" : "http://esferapublica.org/nfblog/la-desaparicion-de-la-escultura/",
      },
      {
        "id" : "78",
        "titulo" : "éxito rotundo para la escultura pública",
        "url" : "http://esferapublica.org/nfblog/exito-rotundo-para-la-escultura-publica-2/",
      },
      {
        "id" : "79",
        "titulo" : "¿Quién se ha llevado mi escultura?",
        "url" : "http://esferapublica.org/nfblog/%C2%BFquien-se-ha-llevado-mi-escultura/",
      },
      {
        "id" : "80",
        "titulo" : "Vuelven a atentar contra escultura",
        "url" : "http://esferapublica.org/nfblog/vuelven-a-atentar-contra-escultura-el-ojo-que-llora/",
      },
      {
        "id" : "81",
        "titulo" : "Las esculturas del Chicamocha",
        "url" : "http://esferapublica.org/nfblog/las-esculturas-del-chicamocha/",
      },
      {
        "id" : "82",
        "titulo" : "Un Minuto de Escultura",
        "url" : "http://esferapublica.org/nfblog/un-minuto-de-escultura/",
      },
      {
        "id" : "83",
        "titulo" : "Salvemos los Columbarios del Cementerio Central de Bogotá",
        "url" : "http://esferapublica.org/nfblog/salvemos-los-columbarios-del-cementerio-central-de-bogota/",
      },
      {
        "id" : "84",
        "titulo" : "monumentos",
        "url" : "http://esferapublica.org/nfblog/monumentos/",
      },
      {
        "id" : "85",
        "titulo" : "monumento a Bolívar",
        "url" : "http://esferapublica.org/nfblog/monmento-a-bolivar/",
      },
      {
        "id" : "86",
        "titulo" : "Monumentos Privados",
        "url" : "http://esferapublica.org/nfblog/monumentos-privados/",
      },
      {
        "id" : "87",
        "titulo" : "monumentos paulistas",
        "url" : "http://esferapublica.org/nfblog/monumentos-paulistas/",
      },
      {
        "id" : "88",
        "titulo" : "monumentos en santander",
        "url" : "http://esferapublica.org/nfblog/monumentos-en-santander/",
      },
      {
        "id" : "89",
        "titulo" : "Monumentos del Futuro",
        "url" : "http://esferapublica.org/nfblog/monumentos-del-futuro/",
      },
      {
        "id" : "90",
        "titulo" : "Monumento a la desobediencia civil",
        "url" : "http://esferapublica.org/nfblog/monumento-a-la-desobediencia-civil/",
      },
      {
        "id" : "91",
        "titulo" : "Monumento a la impunidad",
        "url" : "http://esferapublica.org/nfblog/una-rebelion-ciudadana-contra-la-inmoralidad/",
      },
      {
        "id" : "92",
        "titulo" : "San Gil, la patria chica de la adrenalina",
        "url" : "https://www.las2orillas.co/san-gil-la-patria-chica-de-la-adrenalina/",
      },
      {
        "id" : "93",
        "titulo" : "Santísimo derroche",
        "url" : "https://www.las2orillas.co/santisimo-derroche/",
      },
      {
        "id" : "94",
        "titulo" : "¿Final fatal a la estatua de Santos en el Caquetá?",
        "url" : "https://www.las2orillas.co/final-fatal-la-estatua-santos-caqueta/",
      },
      {
        "id" : "95",
        "titulo" : "El Obelisco de Arauca solo quedó en maquetas",
        "url" : "https://www.las2orillas.co/obelisco-arauca-solo-quedo-maquetas/",
      },
      {
        "id" : "96",
        "titulo" : "Día de la mujer: Un monumento a la hipocresía",
        "url" : "https://www.las2orillas.co/dia-de-la-mujer-un-monumento-a-la-hipocresia/",
      },
      {
        "id" : "97",
        "titulo" : "De ciudades y monumentos",
        "url" : "https://www.las2orillas.co/de-ciudades-y-monumentos/",
      },
      {
        "id" : "98",
        "titulo" : "El monumento que le hicieron a la corrupción en Cantagallo Bolívar",
        "url" : "https://www.las2orillas.co/monumento-le-hicieron-la-corrupcion-cantagallo-bolivar/",
      },
      {
        "id" : "99",
        "titulo" : "El Parque Nariño, un monumento a la mediocridad",
        "url" : "https://www.las2orillas.co/el-parque-narino-monumento-la-mediocridad/",
      },
      {
        "id" : "100",
        "titulo" : "Maluma: un monumento al arte, el más grande de todos los tiempos",
        "url" : "https://www.las2orillas.co/maluma-un-monumento-al-arte-el-mas-grande-de-todos-los-tiempos/",
      },
      {
        "id" : "101",
        "titulo" : "San Agustín, estatuas de cartón",
        "url" : "https://www.las2orillas.co/san-agustin-estatuas-de-carton/",
      },
      {
        "id" : "102",
        "titulo" : "El ‘robo’ de las mariposas amarillas de Gabo",
        "url" : "https://www.las2orillas.co/el-robo-de-las-mariposas-amarillas-de-gabo/",
      },
      {
        "id" : "103",
        "titulo" : "Carta a Edgar Negret",
        "url" : "https://www.las2orillas.co/carta-edgar-negret/",
      },
      {
        "id" : "104",
        "titulo" : "En cuerpo de mujer de 13 metros de altura",
        "url" : "https://www.las2orillas.co/237762-2/",
      },
      {
        "id" : "105",
        "titulo" : "El cristo negro de Bojayá, a la espera de su reubicación",
        "url" : "http://www.eltiempo.com/politica/proceso-de-paz/cristo-negro-de-bojaya-que-entrego-farc-a-victimas-no-ha-sido-ubicado-213224",
      },
      {
        "id" : "106",
        "titulo" : "Virgen María Auxiliadora vigilará las obras en Hidroituango",
        "url" : "http://www.eltiempo.com/colombia/medellin/virgen-maria-auxiliadora-vigila-las-obras-en-hidroituango-221848",
      },
      {
        "id" : "107",
        "titulo" : "A LA EMPANADA LE HICIERON MONUMENTO EN CAICEDONIA",
        "url" : "http://www.eltiempo.com/archivo/documento/MAM-1695699",
      },
      {
        "id" : "108",
        "titulo" : "El hombre que visitó el lugar de Corea del Norte que supuestamente no existe",
        "url" : "https://www.publimetro.co/co/bbc-mundo/2018/06/18/el-hombre-que-visito-el-lugar-de-corea-del-norte-que-supuestamente-no-existe.html",
      },
      {
        "id" : "109",
        "titulo" : "Colón, ¿héroe o genocida?",
        "url" : "https://www.semana.com/cultura/articulo/colon-heroe-o-genocida/540627",
      },
      {
        "id" : "110",
        "titulo" : "Polémica por la réplica del Cristo Redentor que Odebrecht 'le regaló' a Perú",
        "url" : "https://www.semana.com/mundo/articulo/polemica-por-la-replica-del-cristo-redentor-que-odebrecht-le-regalo-a-peru/518958",
      },
      {
        "id" : "111",
        "titulo" : "Esculturas parlantes",
        "url" : "https://www.semana.com/opinion/articulo/maria-eugenia-martinez-delgado-esculturas-parlantes-de-bogota/482529",
      },
      {
        "id" : "112",
        "titulo" : "Apareció busto de Martín Elías, que había desaparecido en Sucre",
        "url" : "http://www.eltiempo.com/colombia/otras-ciudades/aparecio-busto-de-martin-elias-que-habia-desaparecido-en-sucre-218806",
      },
      {
        "id" : "113",
        "titulo" : "Monumento a La Raza espera con ansias un día de limpieza",
        "url" : "http://www.eltiempo.com/colombia/medellin/monumento-a-la-raza-espera-con-ansias-un-dia-de-limpieza-205468",
      }
    ]
  };

  var fuentes = [
    "'Suez One', serif;",
    "'Roboto', sans-serif;",
    "'Abril Fatface', cursive;",
    "'Noto Sans', sans-serif;",
    "'Belgrano', serif;",
    "'News Cycle', sans-serif;",
    "'Archivo Black', sans-serif;",
    "'Volkhov', serif;"
  ]

  function randomFuente(){
    return fuentes[Math.floor(Math.random()*fuentes.length)];
  }

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  var cookieList = function(cookieName) {
  //When the cookie is saved the items will be a comma seperated string
  //So we will split the cookie by comma to get the original array
  var cookie = Cookies.get(cookieName);
  //Load the items or a new array if null.
  var items = cookie ? cookie.split(/,/) : new Array();

  //Return a object that we can use to access the array.
  //while hiding direct access to the declared items array
  //this is called closures see http://www.jibbering.com/faq/faq_notes/closures.html
  return {
      "add": function(val) {
          //Add to the items.
          items.push(val);
          //Save the items to a cookie.
          //EDIT: Modified from linked answer by Nick see
          //      http://stackoverflow.com/questions/3387251/how-to-store-array-in-jquery-cookie
          Cookies.set(cookieName, items.join(','), { expires: 7 });
      },
      "remove": function (val) {
          //EDIT: Thx to Assef and luke for remove.
          indx = items.indexOf(val);
          if(indx!=-1) items.splice(indx, 1);
          Cookies.set(cookieName, items.join(','), { expires: 7 });        },
      "clear": function() {
          items = null;
          //clear the cookie.
          Cookies.set(cookieName, null, { expires: 7 });
      },
      "items": function() {
          //Get all the items.
          return items;
      }
    }
  }
  var seen = new cookieList("Seen");
  var randomized = shuffle( noticias.lista );

  console.log( "Noticias: ", noticias.lista );
  console.log( "Randomized: ", randomized );

  for (var i = 0; i < randomized.length; i++) {
    function fontSize(min, max){
       return  Math.floor(Math.random() * (max - min) +1) + min;
    }
    var alignarray = [
      "left",
      "right",
      "center"
    ];
    var randomAlign = alignarray[Math.floor(Math.random()*alignarray.length)];

    contenedor.append('<li><a style="font-family:'+randomFuente()+' font-size:'+fontSize(15, 60)+'px; text-align:'+randomAlign+'" data-unique="'+randomized[i].id+'" href="'+randomized[i].url+'" target="_blank">'+randomized[i].titulo+'</a></li>')
  }

  console.log( "Seen: ", seen.items() );

  $('#lista_noticias a').on('click', function( e ){
    console.log("Add: ", $(this).data('unique') );
    seen.add( $(this).data('unique') );
    if( $(this).hasClass('seen') ){
      e.preventDefault();
    }
    console.log( "Seen: ", seen.items() );
    refreshClasses();
  });

  function refreshClasses(){
    var vistos = seen.items();
    $("li a").each( function( i ){
      console.log("this", vistos.indexOf( $(this).data("unique") ) );
      if(  vistos.indexOf( $(this).data("unique") ) > -1 ){
        console.log("Seen");
        $(this).addClass("seen");
      }
    });
  }

  refreshClasses();

});
