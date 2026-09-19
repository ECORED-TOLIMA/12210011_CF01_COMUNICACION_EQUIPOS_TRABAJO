<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Segmentación y asertividad

      .row.justify-content-center
        .col.col-lg-12.col-12
          figure.mb-4
            img(src='@/assets/curso/temas/t4/img-01.png', alt='')
        
      p.mb-4 La comunicación institucional pierde eficacia cuando se dirige a todos por igual. Dentro de una misma organización conviven grupos con responsabilidades, niveles de información y expectativas distintas, y cada uno interpreta los mensajes desde su propia posición. Reconocer esa diversidad interna constituye el punto de partida de toda estrategia comunicativa que aspire a producir efectos reales.

      .row.justify-content-center.mb-4
        .col.col-lg-10.col-12
          .cajon.cajon.C01.color-primario.px-4.py-3.mb-4
            p.mb-0 A esa diferenciación de públicos se suma la manera en que se sostienen las conversaciones difíciles. Expresar una necesidad, formular un desacuerdo o señalar un incumplimiento sin deteriorar la relación laboral exige recursos concretos, no solamente buena disposición. La asertividad aporta esos recursos y convierte la intención de comunicar en una práctica observable y verificable.
          p Ambos asuntos comparten un mismo supuesto: la comunicación produce efectos cuando reconoce a quien está del otro lado. Una estrategia interna fracasa con mayor frecuencia por desconocer a sus destinatarios que por deficiencias en la redacción del mensaje.

      p.mb-4.text-center El desarrollo de este apartado articula ambos asuntos en cuatro focos de trabajo, que se describen a continuación:

      .tarjeta--container.row.mb-4
        .col-lg.tarjeta.color-secundario.azul.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t4/img-02.svg', alt='')          
          h3.text-center Segmentación de públicos
          p.mb-0(style="color: #000 !important") Agrupar a quienes integran la organización según criterios verificables, como el área, el turno o el acceso tecnológico, para adaptar el mensaje a cada grupo.

        .col-lg.tarjeta.color-acento-botones.amarillo.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t4/img-03.svg', alt='')          
          h3.text-center.parrafo Comunicación asertiva
          p.mb-0.parrafo(style="color: #000 !important") Expresar necesidades, desacuerdos y límites con claridad y respeto, sin recurrir a la sumisión que calla ni a la imposición que desconoce la posición ajena.

        .col-lg.tarjeta.color-acento-botones.naranja.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t4/img-04.svg', alt='')          
          h3.text-center.parrafo Técnicas de asertividad
          p.mb-0.parrafo(style="color: #000 !important") Recursos concretos que permiten sostener una conversación difícil, formular una negativa o pedir un cambio sin deteriorar la relación de trabajo.

        .col-lg.tarjeta.color-acento-botones.gris.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t4/img-05.svg', alt='')          
          h3.text-center.parrafo Protocolos de atención
          p.mb-0.parrafo(style="color: #000 !important") Acuerdos que definen el uso de cada canal según la oportunidad, la claridad y la cultura de la organización, tanto hacia dentro como hacia el público externo.

      .row.justify-content-center.mb-4
        .col.col-lg-10.col-12
          .cajon.cajon.C02.color-secundario.px-4.py-3.mb-4
            p.mb-0 Los cuatro focos no funcionan por separado. Conocer al destinatario sin saber cómo formular una negativa deja el trabajo a mitad de camino, y dominar las técnicas de conversación sin distinguir a quién se habla produce mensajes correctos que igual no llegan. Juntos convierten la buena intención de comunicar en una práctica que puede revisarse.
          p Un mensaje pensado para todos suele no servirle a nadie: cada grupo lo lee desde su horario, su función y la información que ya tiene.

      .row.justify-content-center.mb-4
        .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t4/img-06.svg', alt='')
        .col.col-lg-9.col-12.order-lg-2.order-2
          p.mb-0(data-aos="fade-down") Reconocer al destinatario no consiste en redactar un texto distinto para cada persona. Consiste en ajustar unos pocos elementos del mensaje, que son los que determinan si la información llega completa y a tiempo. Estos cinco cambian según el grupo al que se dirige la comunicación:

      .row.justify-content-center.mb-4
        .col-lg-7.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
          LineaTiempoD.color-acento-botones.especial.mb-4
            .row(numero="A" titulo="Contenido")
              .col-12.mb-0
                p.mb-0 Qué información necesita ese grupo para actuar y cuál puede omitirse. Una circular sobre cambios de nómina interesa a todo el personal; el detalle contable, solo al área financiera.
            .row(numero="B" titulo="Nivel de detalle")
              .col-12.mb-0
                p.mb-0 Cuánta explicación requiere según lo que ya conoce del proceso. Quien lleva años en el cargo necesita el dato nuevo; quien ingresó el mes pasado necesita también el antecedente.
            .row(numero="C" titulo="Canal")
              .col-12.mb-0
                p.mb-0 Por cuál medio la información llega durante la jornada. El personal administrativo revisa el correo cada mañana; el de planta se entera en la cartelera o en la reunión de turno.
            .row(numero="D" titulo="Tono")
              .col-12.mb-0
                p.mb-0 Qué registro resulta creíble para ese grupo. Un anuncio de reestructuración dirigido a coordinadores admite lenguaje técnico; el mismo anuncio para el equipo operativo exige claridad y menos rodeos.
            .row(numero="D" titulo="Momento")
              .col-12.mb-0
                p.mb-0 En qué punto del proceso conviene entregarla. Informar un cambio de horario el viernes en la tarde garantiza que la mitad del equipo lo conozca el lunes por comentarios de otros.
        .col-lg-5.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t4/img-07.png', alt='')

      p.mb-4 Ninguno de estos cinco ajustes exige más recursos: exige decidir antes de redactar. Un comunicado pensado desde quien lo recibirá evita la ronda de aclaraciones que llega después, y esa ronda siempre cuesta más tiempo que el que habría tomado ajustarlo desde el comienzo.

      .row.justify-content-center
        .col.col-lg-10.col-12
          .cajon.cajon.C01.color-primario.px-4.py-3
            p.mb-0 Queda pendiente, sin embargo, la pregunta que antecede a todo lo anterior: quiénes componen esa organización y en qué se diferencian entre sí. La respuesta no surge de la intuición ni del trato cercano con algunas personas, sino de rasgos que la entidad ya tiene registrados: el área donde trabaja cada persona, el turno que cubre y los medios a los que accede durante la jornada.

      Separador

      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 4.1 Segmentación de públicos

      p.mb-4 Segmentar públicos internos significa reconocer que quienes integran una organización no constituyen un grupo homogéneo, sino un conjunto de personas y áreas con funciones, intereses, responsabilidades, lenguajes y necesidades de información diferentes. Esa distinción es la que permite que un mismo mensaje produzca el mismo entendimiento en destinatarios que trabajan en condiciones muy distintas.

      .row.justify-content-center.align-items-stretch.mb-4.g-0.recurso-c10-ajuste
        .col-lg-7.col-12.order-lg-2.order-2
          .cajon.C10.c10-icono-arriba.p-4.h-100.w-100
            .row.mb-0
              .col-lg-2.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/t4/img-09.svg', alt='')
              .col-lg-10.col-12
                p Sin ese paso previo, la organización elige el medio y el momento por costumbre y no por conveniencia. El resultado se repite: un comunicado que la dirección considera claro llega incompleto a quienes debían ejecutarlo, y la explicación posterior consume más tiempo del que habría tomado prepararlo bien.
                p La segmentación tampoco consiste en fragmentar la comunicación hasta volverla inmanejable. Se trata de identificar los pocos rasgos que realmente cambian la forma en que un grupo recibe la información, y de sostener esa clasificación con datos que la organización pueda verificar.
        .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t4/img-08.png', alt='')

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/temas/t4/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Errores frecuentes al caracterizar

      p.mb-4 Caracterizar públicos parece sencillo hasta que se intenta. La mayoría de las estrategias no fracasa por falta de información, sino por la manera en que se agrupa a las personas, y cuatro errores explican casi todos esos tropiezos:

      .cajon.cajon.C03.p-5.mb-4
        SlyderB(:datos="datosSlyder")

      .row.justify-content-center.mb-4
        .col-lg-10.col-12
          .recurso-mensaje-canal
            .recurso-mensaje-canal__icono
              img(src='@/assets/curso/temas/t4/img-20.svg', alt='')

            .recurso-mensaje-canal__texto
              p.mb-0 Los cuatro errores comparten el mismo origen: dar por conocido al destinatario. Evitarlos no exige herramientas sofisticadas, sino verificar con datos lo que se cree saber del equipo antes de decidir cómo se le va a hablar.

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/temas/t4/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Variables de segmentación
      
      p.mb-4 Esa verificación se apoya en variables, es decir, en rasgos que agrupan a las personas según características que inciden en la manera de recibir e interpretar la información. Cinco de ellas resultan suficientes para caracterizar los públicos internos de un equipo de trabajo:

      .row.justify-content-center.mb-4
        .col-lg-8.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
          LineaTiempoD.color-acento-botones.especial.mb-4
            .row(numero="1" titulo="Nivel jerárquico")
              .col-12.mb-0
                p.mb-0 Distingue entre el nivel directivo, el coordinador y el operativo, y cada uno requiere un grado distinto de detalle. Casos concretos: un informe de resultados se presenta a la dirección con las decisiones que requiere aprobar, y al nivel operativo con las tareas que cambian en su turno. 
            .row(numero="2" titulo="Área o proceso")
              .col-12.mb-0
                p.mb-0 Agrupa a las personas según la función que desempeñan, como producción, comercial, administrativa o de servicio, porque el interés informativo y el vocabulario técnico cambian entre ellas. Casos concretos: un mismo indicador de calidad se explica con lenguaje técnico al área de producción y en términos de satisfacción del usuario al área comercial. 
            .row(numero="3" titulo="Antigüedad en la organización")
              .col-12.mb-0
                p.mb-0 Separa a quienes conocen la trayectoria institucional de quienes ingresaron hace poco, ya que el contexto que unos dan por sabido resulta indispensable para otros. Casos concretos: una circular que menciona «el acuerdo del año pasado» resulta clara para el personal antiguo e incomprensible para quien lleva un mes vinculado. 
            .row(numero="4" titulo="Modalidad y turno de trabajo")
              .col-12.mb-0
                p.mb-0 Diferencia al personal presencial, remoto y de turnos rotativos, y determina la disponibilidad horaria y los medios que alcanzan a cada grupo. Casos concretos: quienes trabajan desde casa no consultan la cartelera física de la oficina, y quienes cubren el turno de la noche no participan en las reuniones de la mañana.
            .row(numero="5" titulo="Nivel de acceso tecnológico")
              .col-12.mb-0
                p.mb-0 Identifica quiénes disponen de computador, correo institucional o dispositivo móvil durante la jornada. Casos concretos: concentrar los avisos en el correo deja por fuera al personal de servicios generales, que no tiene cuenta institucional ni equipo asignado y se entera de los cambios con varios días de retraso.
        .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t4/img-10.png', alt='')

      p.mb-4 Estas variables no se aplican de forma aislada ni todas a la vez: la elección depende de la decisión comunicativa que se quiera tomar. Cruzar dos o tres de ellas, como el área y el turno, ofrece una lectura más útil que emplear una sola, porque revela grupos con condiciones de acceso realmente distintas.

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/temas/t4/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Técnicas para levantar la información

      p.mb-4 Con las variables ya definidas, hace falta un procedimiento para obtener los datos. Cuatro técnicas cubren la necesidad de la mayoría de las organizaciones y pueden aplicarse con los recursos que ya tienen:

      .row.justify-content-center.mb-4(data-aos="fade-left")
        .col-lg-10
          .contenido-interno
            PasosA.color-acento-contenido.mb-5.pasos-texto-izquierda(tipo="l")
              .row.justify-content-center
                .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
                  h3 Análisis de la base de datos de personal
                  p.mb-0 Consiste en aprovechar la información que la organización ya posee sobre cargos, áreas, sedes y fechas de vinculación. Es la técnica más económica y suele bastar para una primera caracterización. En la práctica: un reporte de nómina permite saber cuántas personas trabajan por turnos antes de diseñar cualquier mensaje.
                .col-lg-2.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t4/img-11.svg', alt="")
              .row.justify-content-center
                .col-lg-2.col-8.mb-lg-0.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t4/img-12.svg', alt="")
                .col-lg-8(data-aos="fade-left")
                  h3 Encuesta de hábitos de información
                  p.mb-0 Indaga por cuáles canales consulta cada grupo, en qué momento de la jornada y con qué frecuencia, y aporta datos sobre el consumo real, que suele diferir del que la organización supone. En la práctica: una entidad descubre que su boletín se abre en la tarde y traslada el envío a esa franja. 
              .row.justify-content-center
                .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
                  h3 Entrevista con referentes de área
                  p.mb-0 Recoge la percepción de coordinadores y líderes sobre las necesidades informativas de su equipo y permite detectar particularidades que los registros administrativos no revelan. En la práctica: un coordinador advierte que su grupo no consulta la intranet porque la conexión de la bodega no lo permite. 
                .col-lg-2.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t4/img-13.svg', alt="")
              .row.justify-content-center
                .col-lg-2.col-8.mb-lg-0.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t4/img-14.svg', alt="")
                .col-lg-8(data-aos="fade-left")
                  h3 Mapa de públicos
                  p.mb-0 Representa en una matriz los grupos identificados, su nivel de interés y su grado de influencia sobre los procesos, lo que facilita priorizar cuando los recursos son limitados. En la práctica: la matriz muestra que el personal de turnos concentra alto interés y baja información, y allí empieza la estrategia.

      .row.justify-content-center.mb-4
        .col.col-lg-12.col-12
          .cajon.cajon.C01.color-primario2.px-4.py-3
            p.mb-0 La combinación de estas técnicas produce una caracterización sustentada en evidencia y no en supuestos. Un mapa construido con datos administrativos y contrastado con la percepción de los referentes de área ofrece una base confiable para decidir qué se comunica, a quién y por cuál medio.

      .row.justify-content-center.mb-4
        .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t4/img-15.svg', alt='')
        .col.col-lg-9.col-12.order-lg-2.order-2
          p.mb-0(data-aos="fade-down") Una caracterización bien hecha cambia la conversación dentro de la organización. En lugar de discutir si el mensaje estuvo bien redactado, el equipo puede preguntarse a quién llegó, por cuál medio y con cuánta anticipación, que son preguntas con respuesta verificable.

      .row.justify-content-center
        .col.col-lg-10.col-12
          .cajon.cajon.C02.color-secundario.px-4.py-3
            p.mb-0 Conocer a los públicos internos resuelve a quién se habla, pero no cómo se sostiene la conversación cuando el asunto incomoda. Expresar una necesidad, formular un desacuerdo o pedir un cambio exige claridad y respeto al mismo tiempo, y esa combinación no se improvisa en el momento en que la tensión aparece.

      Separador

      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 4.2 Comunicación asertiva

      p.mb-4 En toda organización existen conversaciones que nadie quiere tener: informar un retraso, negar una solicitud razonable, señalar un error de alguien con más antigüedad o pedir que se corrija un trabajo ya entregado. De la manera en que se resuelvan esos momentos depende buena parte de la información que circula después.

      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")(style="background-color: #74DCDD !important")
        .bloque-texto-g__img.img-bg-09
        .bloque-texto-g__texto.p-4
          p.mb-0(data-aos="fade-down") Una empresa donde esas conversaciones ocurren con claridad y respeto consolida relaciones más transparentes y equipos más participativos, que no dependen del miedo ni de la imposición para coordinarse. Cuando predominan el silencio o la dureza, en cambio, la comunicación se vuelve frágil y defensiva, y el equipo pierde la capacidad de corregirse a tiempo.

      .row.justify-content-center.mb-4
        .col.col-lg-10.col-12
          .cajon.cajon.C01.color-primario.px-4.py-3
            p.mb-0 Sostener ese tipo de conversación no depende del carácter de cada persona. Se trata de una competencia que integra autoconocimiento, regulación emocional, empatía, escucha activa y dominio de recursos verbales y no verbales, y que, como cualquier competencia, se aprende con práctica, análisis y retroalimentación.

      p.mb-4 La asertividad se comprende mejor cuando se delimita por partes: qué es, qué no es, qué produce en el equipo y cómo se reconoce. Esas cuatro entradas evitan el malentendido más frecuente, que consiste en confundirla con firmeza o con amabilidad. El recorrido siguiente las desarrolla una a una:
      
      .row.justify-content-center.mb-4
        .col-lg-8.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
          LineaTiempoD.color-acento-botones.especial.mb-4
            .row(numero="1" titulo="Qué es la asertividad")
              .col-12.mb-0
                p.mb-0 Capacidad de expresar ideas, necesidades y desacuerdos de forma clara, directa y respetuosa, sin renunciar a la posición propia ni desconocer la del interlocutor. En el día a día: en una empresa de logística de Barranquilla, quien recibe una tarea nueva informa cuál entrega deberá aplazarse y propone una fecha alterna en la misma reunión. 
            .row(numero="2" titulo="Qué no es la asertividad")
              .col-12.mb-0
                p.mb-0 No consiste en imponerse ni en tener siempre la última palabra, y tampoco en decir que sí para evitar la tensión del momento. En el día a día: aceptar una tarea que no podrá cumplirse aplaza el conflicto y lo devuelve agravado cuando llega la fecha de entrega incumplida. 
            .row(numero="3" titulo="Qué aporta al equipo")
              .col-12.mb-0
                p.mb-0 Sostiene relaciones de trabajo previsibles, porque cada persona sabe a qué atenerse con lo que la otra dice. En el día a día: un área de una entidad de Ibagué que anuncia con anticipación su límite de capacidad permite redistribuir la carga, mientras que el silencio produce incumplimientos que nadie vio venir. 
            .row(numero="4" titulo="Cómo se reconoce")
              .col-12.mb-0
                p.mb-0 Se identifica en conductas observables, como el tono estable, el uso de la primera persona, la mirada sostenida sin desafío y la disposición a escuchar la respuesta. En el día a día: quien dice «necesito la información el jueves para cerrar el informe» comunica con más precisión que quien pide «lo más pronto posible».
        .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t4/img-22.png', alt='')

      p.mb-4 Las cuatro entradas apuntan a lo mismo: la asertividad no se demuestra en el momento en que la conversación se tensa, sino en la costumbre de decir a tiempo lo que después será difícil de sostener. Un equipo que la practica discute más al comienzo y menos al final.

      .row.justify-content-center
        .col-lg-10.col-12
          .recurso-mensaje-canal.mb-4
            .recurso-mensaje-canal__icono
              img(src='@/assets/curso/temas/t4/img-23.svg', alt='')

            .recurso-mensaje-canal__texto
              p.mb-0 Aceptar una tarea que no se podrá cumplir no resuelve el momento incómodo: solo traslada el problema a la fecha de entrega, cuando ya nadie puede corregirlo.

          p.mb-0 Comprender en qué consiste esta forma de comunicar, sin embargo, no basta para aplicarla cuando el interlocutor insiste, eleva la voz o repite una solicitud ya negada. Para esos momentos existen recursos concretos, probados en situaciones laborales corrientes, que permiten sostener la posición propia sin que la relación se deteriore.

      Separador

      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 4.3 Técnicas de asertividad

      p.mb-4 Comprender en qué consiste la asertividad no garantiza aplicarla. En el momento en que alguien insiste, alza la voz o vuelve sobre una solicitud ya resuelta, hace falta un repertorio de respuestas aprendidas de antemano, porque la reacción espontánea suele inclinarse hacia el silencio o hacia la dureza.

      .row.justify-content-center.align-items-stretch.mb-4.g-0.recurso-c10-ajuste
        .col-lg-7.col-12.order-lg-2.order-2
          .cajon.C10.c10-icono-arriba.p-4.h-100.w-100
            .row.mb-0
              .col-lg-2.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/t4/img-25.svg', alt='')
              .col-lg-10.col-12
                p Estas respuestas no dependen del temperamento ni de la habilidad natural para discutir. Son procedimientos breves, fáciles de recordar y aplicables en cualquier cargo, que permiten sostener una posición sin elevar el tono y sin ceder por agotamiento.
                p Ninguna de ellas sirve para todas las situaciones. Cada una responde a una presión distinta: la insistencia que no cede, la crítica que descalifica, la observación que nunca precisa y el reclamo que se vuelve personal. Reconocer cuál corresponde a cada caso es lo que evita responder siempre del mismo modo.
        .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t4/img-24.png', alt='')

      p.mb-4 Cuatro técnicas cubren la mayoría de esos momentos en la vida laboral y pueden practicarse desde la próxima conversación difícil. Estas son, con la situación en que cada una resulta útil:

      .cajon.cajon.C03.p-5.mb-4
        SlyderB(:datos="datosSlyder2")

      p.mb-4 Las cuatro comparten un rasgo: separan el problema de la persona. Ninguna busca ganar la conversación, sino mantenerla abierta el tiempo suficiente para que el asunto se resuelva sin que la relación de trabajo quede afectada.

      .row.justify-content-center
        .col.col-lg-10.col-12
          .cajon.cajon.C02.color-secundario.px-4.py-3
            p.mb-0 Estas técnicas funcionan en la conversación entre dos personas, aunque la organización también responde a públicos externos. Allí la respuesta deja de ser personal y se vuelve institucional: lo que se dice compromete a la entidad entera, y por eso requiere reglas conocidas por todos y aplicadas de la misma forma en cada canal.
      
      Separador

      #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 4.4 Protocolos de atención

      p.mb-4 Un protocolo de atención es el acuerdo que fija cómo responde la organización cuando alguien la contacta. No regula lo que cada persona siente ni su estilo personal: define lo que la entidad se compromete a hacer, de modo que la respuesta sea la misma sin importar quién la entregue ni por cuál medio llegue la solicitud.

      .row.justify-content-center.mb-4
        .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t4/img-30.png', alt='')
        .col.col-lg-7.col-12.order-lg-2.order-2
          .row.mb-0
            p Estos acuerdos establecen el tono esperado, los tiempos de respuesta, el grado de formalidad del lenguaje, el registro de lo actuado y la correspondencia entre el medio y el tipo de solicitud. Su cumplimiento reduce las respuestas contradictorias entre áreas y evita que la calidad de la atención dependa de la persona que atienda ese día.
            .cajon.cajon.C01.color-primario.px-4.py-3.mb-4
              p.mb-0(data-aos="fade-down") La asertividad y el protocolo se necesitan mutuamente. Sin habilidad personal, la norma se cumple de manera mecánica y el usuario percibe indiferencia; sin norma, la buena disposición produce respuestas distintas para casos iguales. El equilibrio entre ambas es lo que sostiene una atención que resulte a la vez respetuosa y previsible.

      p.mb-4 Toda atención, sea presencial, telefónica o escrita, recorre la misma secuencia. Reconocer sus cuatro momentos permite identificar en cuál se pierde la calidad cuando una respuesta genera inconformidad:

      .row.justify-content-center.mb-4
        .col-lg-7.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
          LineaTiempoD.color-acento-botones.especial.mb-4
            .row(numero="A" titulo="Recepción")
              .col-12.mb-0
                p.mb-0 Consiste en recibir la solicitud dejando constancia de quién consulta, qué necesita y cuándo lo pidió. Un ejemplo del día: en la ventanilla de una entidad de Ibagué, registrar el número de radicado desde el primer contacto evita que el usuario deba repetir su caso en cada visita posterior.
            .row(numero="B" titulo="Comprensión")
              .col-12.mb-0
                p.mb-0 Consiste en verificar qué se está pidiendo realmente antes de responder, sobre todo cuando la solicitud llega incompleta. Un ejemplo del día: ante un correo que pide «la información del contrato», confirmar si se requiere el valor, el plazo o el anexo técnico ahorra dos intercambios adicionales.
            .row(numero="C" titulo="Respuesta")
              .col-12.mb-0
                p.mb-0 Consiste en entregar la información dentro del plazo acordado y en el lenguaje que el destinatario maneja. Un ejemplo del día: responder una queja con el término «improcedente» y sin explicación produce una segunda queja, mientras que una respuesta con la razón y la alternativa suele cerrarla.
            .row(numero="D" titulo="Cierre y registro")
              .col-12.mb-0
                p.mb-0 Consiste en confirmar que la necesidad quedó resuelta y dejar el caso documentado para consulta futura. Un ejemplo del día: preguntar si la información recibida fue suficiente y anotar la fecha de cierre permite que otra persona retome el caso sin empezar de nuevo.
        .col-lg-5.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t4/img-31.png', alt='')

      p.mb-4 Los cuatro momentos ocurren siempre, aunque nadie los nombre. La diferencia entre una organización que atiende bien y otra que no está en cuáles de ellos quedan documentados y cuáles se dejan a la memoria de quien atendió, porque lo que no se registra se resuelve dos veces.

      .row.justify-content-center
        .col.col-lg-10.col-12
          .cajon.cajon.C02.color-secundario.px-4.py-3
            p.mb-0 Hasta aquí el análisis se ha ocupado de lo que ocurre en cada conversación y en cada atención. Queda por resolver lo que las articula: un plan que traduzca los hallazgos del diagnóstico en propósitos con fecha, responsable y forma de verificación, porque una organización no mejora su comunicación conversación por conversación, sino decidiendo qué va a cambiar y en cuánto tiempo.

</template>

<script>
import imgSlyder16 from '@/assets/curso/temas/t4/img-16.png'
import imgSlyder17 from '@/assets/curso/temas/t4/img-17.png'
import imgSlyder18 from '@/assets/curso/temas/t4/img-18.png'
import imgSlyder19 from '@/assets/curso/temas/t4/img-19.png'

import imgSlyder26 from '@/assets/curso/temas/t4/img-26.png'
import imgSlyder27 from '@/assets/curso/temas/t4/img-27.png'
import imgSlyder28 from '@/assets/curso/temas/t4/img-28.png'
import imgSlyder29 from '@/assets/curso/temas/t4/img-29.png'

export default {
  name: 'Tema4',
  data: () => ({
    indicadorTarjetaFlip: true,
    indicadorTarjetaSlide: true,
    mostrarIndicadorTarjetaAudio: true,

    datosSlyder: [
      {
        titulo: 'Segmentar por intuición',
        texto:
          'Agrupar según la cercanía o la impresión personal, sin un dato que respalde la división. Sucede cuando se afirma que el personal de planta no lee los correos, sin haber comprobado antes cuántas personas tienen cuenta institucional asignada.',
        imagen: imgSlyder16,
      },
      {
        titulo: 'Confundir el cargo con la necesidad de información',
        texto:
          'Suponer que dos personas del mismo nivel requieren lo mismo. Sucede cuando un coordinador de una sede rural recibe idéntica circular que uno de la sede principal, pese a trabajar con conectividad intermitente.',
        imagen: imgSlyder17,
      },
      {
        titulo: 'Multiplicar los grupos sin necesidad',
        texto:
          'Dividir tanto que la estrategia se vuelve inmanejable. Sucede cuando una entidad define doce públicos internos, no alcanza a preparar doce versiones del mensaje y termina enviando la misma a todos.',
        imagen: imgSlyder18,
      },
      {
        titulo: 'Dejar por fuera a quienes no figuran en los registros',
        texto:
          'Personal tercerizado, aprendices o contratistas que no aparecen en las bases institucionales. Sucede cuando una campaña interna llega solo a quienes tienen correo, y el resto se entera por terceros.',
        imagen: imgSlyder19,
      },
    ],

    datosSlyder2: [
      {
        titulo: 'El disco rayado',
        texto:
          'Consiste en repetir con calma el mensaje central cuando el interlocutor insiste o presiona para obtener una respuesta distinta. En una jornada corriente: ante un tercer requerimiento para adelantar una entrega comprometida con otra área, la respuesta se mantiene igual, sin justificaciones nuevas que abran discusión.',
        imagen: imgSlyder26,
      },
      {
        titulo: 'El banco de niebla',
        texto:
          'Consiste en admitir la parte razonable de una crítica sin aceptar la acusación completa que la acompaña. En una jornada corriente: frente al reclamo «ustedes nunca responden a tiempo», se reconoce la demora del último informe y se deja fuera la generalización que no corresponde.',
        imagen: imgSlyder27,
      },
      {
        titulo: 'La pregunta asertiva',
        texto:
          'Consiste en indagar el sentido de una observación antes de reaccionar a ella. En una jornada corriente: ante un comentario impreciso sobre la calidad de un trabajo, preguntar «¿a qué aspecto se refiere?» convierte la molestia en información aprovechable para corregir.',
        imagen: imgSlyder28,
      },
      {
        titulo: 'El mensaje en primera persona',
        texto:
          'Consiste en describir el efecto de un hecho sobre quien habla, en lugar de atribuir intenciones. En una jornada corriente: decir «me preocupa que la información llegue después del cierre, porque retrasa el proceso» evita la acusación y deja el foco en la consecuencia.',
        imagen: imgSlyder29,
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
