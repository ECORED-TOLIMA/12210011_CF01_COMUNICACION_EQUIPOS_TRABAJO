export default {
  global: {
    Name: 'Diagnóstico y fundamentos de la comunicación organizacional',
    Description:
      'El componente formativo desarrolla la capacidad de diagnosticar las dificultades comunicativas de un equipo de trabajo y planear la estrategia que las atiende. Aborda la cultura organizacional, el proceso comunicativo, las barreras, los estilos, la segmentación de públicos, la asertividad y la formulación de objetivos, con el fin de sustentar decisiones de comunicación interna.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Cultura y proceso comunicativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Importancia de la comunicación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Cultura organizacional',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'El proceso comunicativo',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Emisor y receptor',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Canales y retroalimentación',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Barreras de la comunicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipología de barreras',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Manifestaciones en el trabajo',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Diagnóstico de barreras',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Estilos y comunicación no verbal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Estilos pasivo, agresivo y asertivo',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Elementos no verbales',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Coherencia verbal y no verbal',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Observación en el diagnóstico',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Segmentación y asertividad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Segmentación de públicos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Comunicación asertiva',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Técnicas de asertividad',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Protocolos de atención',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Planeación de la estrategia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Estructura organizacional',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Objetivos SMART',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Programación de actividades',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/12210011_CF01_CFA.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Asertividad',
      significado:
        'capacidad de expresar ideas, emociones, necesidades y límites de manera clara, directa y respetuosa, reconociendo los derechos propios y los de los demás en la interacción laboral.',
    },
    {
      termino: 'Barrera comunicativa',
      significado:
        'factor físico, ambiental, psicológico, cultural o semántico que interfiere en la transmisión o comprensión adecuada de un mensaje dentro de la organización.',
    },
    {
      termino: 'Canal de comunicación',
      significado:
        'medio presencial, escrito, visual, telefónico o digital a través del cual circula un mensaje entre emisor y receptor.',
    },
    {
      termino: 'Comunicación no verbal',
      significado:
        'conjunto de signos distintos de las palabras, como gestos, posturas, tono de voz, distancia interpersonal y uso del tiempo, que transmiten significado en una interacción.',
    },
    {
      termino: 'Cultura organizacional',
      significado:
        'sistema de valores, creencias, normas, símbolos y prácticas compartidas que otorgan identidad a la organización y orientan el comportamiento de sus miembros.',
    },
    {
      termino: 'Diagnóstico comunicativo',
      significado:
        'proceso de análisis que permite identificar dificultades, barreras, necesidades y oportunidades de mejora en la comunicación de un equipo u organización.',
    },
    {
      termino: 'Indicador de comunicación',
      significado:
        'medida cualitativa o cuantitativa que traduce el resultado esperado de un objetivo en un dato observable y verificable.',
    },
    {
      termino: 'Objetivo SMART',
      significado:
        'objetivo formulado de manera específica, medible, alcanzable, relevante y con un tiempo definido para su cumplimiento.',
    },
    {
      termino: 'Planeación de la comunicación',
      significado:
        'proceso mediante el cual las necesidades detectadas en el diagnóstico se convierten en objetivos, canales y actividades programadas.',
    },
    {
      termino: 'Protocolo de atención',
      significado:
        'conjunto de lineamientos institucionales que orientan la forma de responder, informar y atender por distintos medios de contacto dentro de la organización.',
    },
    {
      termino: 'Retroalimentación',
      significado:
        'respuesta del receptor que permite verificar la comprensión, aceptación o efecto del mensaje, cerrando el ciclo comunicativo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Berlo, D. K. (1984). El proceso de la comunicación: introducción a la teoría y a la práctica. El Ateneo.',
    },
    {
      referencia:
        'Castanyer, O. (2014). La asertividad: expresión de una sana autoestima. Desclée de Brouwer.',
    },
    {
      referencia:
        'Chiavenato, I. (2017). Comportamiento organizacional: la dinámica del éxito en las organizaciones (3.ª ed.). McGraw-Hill.',
    },
    {
      referencia:
        'Knapp, M. L., y Hall, J. A. (2010). Comunicación no verbal en la interacción humana. Paidós.',
    },
    {
      referencia:
        'Schein, E. H. (1988). La cultura empresarial y el liderazgo: una visión dinámica. Plaza & Janés.',
    },
    {
      referencia:
        'Túñez, M., y Costa-Sánchez, C. (2014). Comunicación corporativa: claves y escenarios. Editorial UOC.',
    },
    {
      referencia:
        'Watzlawick, P., Beavin, J. H., y Jackson, D. D. (1985). Teoría de la comunicación humana: interacciones, patologías y paradojas (2.ª ed.). Herder.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gloria Lida Alzate Suárez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
