<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/intro/img-01.png', alt='')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .row.mb-0
          .col-lg-auto.d-none.d-lg-block.svg-podcast-console
            figure
              img(src='@/assets/curso/temas/intro/img-02.svg', alt='')
          .col-lg-10.col-12
            p.mb-4 La comunicación organizacional constituye uno de los ejes funcionales más importantes para la sostenibilidad de cualquier organización, ya que permite coordinar procesos, alinear expectativas, consolidar la cultura institucional y fortalecer las relaciones entre las personas que integran un equipo de trabajo.
          p.mb-4 Cuando la comunicación se gestiona de manera adecuada, facilita la comprensión de objetivos, mejora la toma de decisiones y reduce las tensiones derivadas de la desinformación, la ambigüedad o la ausencia de retroalimentación oportuna.
          .cajon.cajon.C01.color-primario.px-4.py-3.mb-4
            p.mb-0(data-aos="fade-down") Antes de diseñar una estrategia conviene saber qué está fallando y por qué. Por eso el recorrido parte de lo elemental: cómo viaja un mensaje de una persona a otra y qué peso tiene la cultura de la organización en lo que se dice y en lo que se calla. Después identifica los obstáculos que interrumpen ese flujo y examina de qué modo la forma de expresarse afecta la convivencia y el rendimiento del equipo.

    p.mb-4 Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/B8lPq__10s0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
