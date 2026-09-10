<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Diagnosticar la comunicación de un equipo de trabajo es el paso previo a cualquier mejora. El recorrido va de lo general a lo concreto: parte de la cultura de la organización y del camino que sigue un mensaje, sigue con las barreras que lo interrumpen, describe los estilos de comunicación y las señales no verbales que los delatan, distingue los públicos internos y las formas de conversar con cada uno, y termina en la planeación. Cada eje aporta un criterio, y todos conducen a la misma conclusión: una estrategia de comunicación interna se sustenta en hallazgos y en objetivos que pueden verificarse.
    p.mb-4 El mapa conceptual que se presenta a continuación organiza esos ejes y las relaciones que los articulan:

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual con los cinco ejes del componente formativo: cultura y proceso comunicativo, barreras de la comunicación, estilos y lenguaje no verbal, segmentación y asertividad, y planeación de la estrategia. Estos ejes conducen del diagnóstico a un plan que puede evaluarse.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
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
