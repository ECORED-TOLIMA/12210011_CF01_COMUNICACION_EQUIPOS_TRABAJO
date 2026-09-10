<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Comunicación en equipos: diagnosticar y planear',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los fundamentos de la comunicación organizacional, el diagnóstico de las dificultades comunicativas y la planeación de la estrategia de comunicación del equipo de trabajo.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            'Pregunta 1	Según Schein, ¿cuáles son los tres niveles que integran la cultura organizacional?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Misión, visión y valores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Artefactos visibles, valores declarados y supuestos básicos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Normas, sanciones y estímulos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Estructura, procesos y resultados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Schein distingue los artefactos visibles, los valores declarados y los supuestos básicos, y cada nivel condiciona de manera distinta la comunicación del equipo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué elemento del proceso comunicativo permite verificar que el mensaje fue comprendido?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El canal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El código.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La retroalimentación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El emisor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La retroalimentación es la respuesta del receptor y cierra el ciclo comunicativo al confirmar, corregir o enriquecer el mensaje original.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto: '¿Qué caracteriza a un canal de comunicación de alta riqueza?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Llega al mayor número de personas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Deja registro escrito del mensaje.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Permite retroalimentación inmediata y múltiples señales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Tiene el menor costo de operación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Un canal de alta riqueza, como la conversación cara a cara, permite respuesta inmediata y transmite señales verbales y no verbales de forma simultánea.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: 'La cultura organizacional incide en la comunicación porque:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Determina el presupuesto asignado a los canales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Establece qué mensajes, tonos y formatos se consideran aceptables.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Define el organigrama de la organización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reemplaza los protocolos de atención.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Los valores y supuestos compartidos legitiman ciertos lenguajes y comportamientos comunicativos, y desestiman otros.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'Las interrupciones constantes por ruido externo durante una reunión corresponden a una barrera:',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Semántica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Psicológica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ambiental.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cultural.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Las barreras ambientales provienen de las condiciones del entorno que afectan la concentración o la disposición para comunicarse.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'El uso de jergas y acrónimos que generan ambigüedad corresponde a una barrera:',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Física.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Semántica.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Organizacional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Psicológica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Las barreras semánticas surgen de la divergencia en la interpretación de términos, jergas o símbolos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es el propósito del diagnóstico de barreras comunicativas?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sancionar a quienes comunican mal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sustituir los canales existentes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Identificar qué obstáculos afectan el flujo de información según los protocolos organizacionales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir el número de reuniones del equipo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El diagnóstico identifica los obstáculos y los interpreta a la luz de los protocolos vigentes en la organización.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'En un equipo, quienes ocupan los niveles operativos evitan señalar fallas por temor a las consecuencias. ¿Qué manifestación de una barrera comunicativa describe esa situación?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Circulación paralela.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Silencio ascendente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Asentimiento sin comprensión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Vacío de señales a distancia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El silencio ascendente convierte la ausencia de objeciones en un dato engañoso, porque el equipo calla lo que observa.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: '¿Qué caracteriza al estilo de comunicación asertivo?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Expresa ideas de forma clara y respetuosa, sin agredir ni someterse.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Evita el conflicto cediendo siempre ante los demás.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Impone la propia posición sobre la del interlocutor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Delega la comunicación en un tercero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La asertividad permite expresar ideas, necesidades y límites de manera directa y respetuosa.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: 'El estilo pasivo se reconoce porque quien lo emplea:',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Interrumpe con frecuencia a los demás.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Evita expresar sus opiniones y cede ante la presión del grupo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Exige el cumplimiento inmediato de sus indicaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solicita retroalimentación permanente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El estilo pasivo se caracteriza por la inhibición de la propia posición, lo que suele generar acumulación de tensiones no expresadas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            'La observación de la comunicación no verbal aporta al diagnóstico porque:',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sustituye la aplicación de encuestas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mide la productividad del equipo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Revela incoherencias entre lo que se dice y lo que se expresa corporalmente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Permite prescindir de la retroalimentación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Los gestos, posturas y expresiones aportan indicios que el discurso verbal no siempre manifiesta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            'Cuando el mensaje verbal y el no verbal se contradicen, el receptor tiende a:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignorar ambos mensajes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solicitar el mensaje por escrito.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Confiar en la señal no verbal.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Confiar en la señal verbal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ante una incoherencia, la señal no verbal suele resultar más creíble para el receptor, lo que erosiona la confianza en el mensaje.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: 'La segmentación de públicos internos consiste en:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Jerarquizar al personal según su antigüedad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Dividir a los integrantes en grupos con características y necesidades comunicativas semejantes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Seleccionar a los voceros de la organización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Clasificar los canales por su costo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La segmentación permite adaptar el mensaje, el tono y el canal a cada grupo interno.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Para qué sirven los protocolos de atención por los diferentes medios de contacto?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para restringir el uso de los canales digitales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para estandarizar la forma de responder según el canal utilizado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Para asignar el presupuesto de comunicación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para evaluar el desempeño individual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Los protocolos orientan la forma, el tono y los tiempos de respuesta en cada medio de contacto.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: 'Una técnica de asertividad permite al integrante del equipo:',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evitar toda situación de desacuerdo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Expresar desacuerdo sin deteriorar la relación de trabajo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Imponer su criterio con argumentos de autoridad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Trasladar el conflicto a su jefe inmediato.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Las técnicas de asertividad permiten sostener la propia posición y, al mismo tiempo, preservar el vínculo con el interlocutor.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            'Según el modelo SMCR, ¿qué condiciones influyen tanto en quien emite como en quien recibe un mensaje?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Emisor, mensaje, canal y receptor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Habilidades comunicativas, actitudes, nivel de conocimiento, sistema social y cultura.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Misión, visión, valores y normas internas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ruido, código, contexto y retroalimentación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El modelo SMCR señala cinco factores que actúan de manera conjunta sobre los dos extremos del intercambio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'En el modelo SMART, que un objetivo sea medible significa que:',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se expresa en un solo enunciado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Puede alcanzarse con los recursos disponibles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Define el indicador y la unidad con que se verificará el avance.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Responde a una necesidad del diagnóstico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Sin una medida asociada, el objetivo no puede evaluarse y la validación posterior queda librada a la percepción.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '“Mejorar la comunicación interna” no constituye un objetivo SMART porque:',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Es demasiado extenso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'No indica qué debe cambiar, cuánto ni en qué plazo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'No menciona a los responsables.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No se relaciona con la cultura organizacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Un objetivo debe precisar el resultado esperado, la forma de medirlo y el momento en que se evaluará.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Cuál es el punto de partida de la planeación de la estrategia de comunicación?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El presupuesto anual del área.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La estructura organizacional y el plan institucional vigente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El número de canales disponibles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La cantidad de integrantes del equipo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La estructura define quién decide, quién informa y quién debe ser informado, y el plan institucional fija hacia dónde se apunta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'La programación de las actividades de comunicación debe incluir, como mínimo:',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente la acción y la fecha.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Acción, público, canal, responsable, recursos y fecha.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Acción, presupuesto y proveedor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Público, canal y presupuesto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Estos seis componentes convierten un propósito general en una tarea ejecutable y verificable.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad. Sus respuestas demuestran comprensión de la cultura organizacional y el proceso comunicativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>
