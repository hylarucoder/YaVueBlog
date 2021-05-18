<template>
  <div :id="id" style="width: 100%;"></div>
</template>

<script lang="ts">
import G2 from "@antv/g2"
import DataSet from "@antv/data-set"
import Component from "vue-class-component"
import { Mixin } from "av-ts"
import G2Mixin from "../../components/Charts/G2Mixin"

@Component
export default class TestPie extends Mixin(G2Mixin) {
  renderChart(newVal: Object) {
    function getTextAttrs(cfg: any) {
      return Object.assign(
        {},
        {
          fillOpacity: cfg.opacity,
          fontSize: cfg.origin._origin.size,
          rotate: cfg.origin._origin.rotate,
          text: cfg.origin._origin.text,
          textAlign: "center",
          fontFamily: cfg.origin._origin.font,
          fill: cfg.color,
          textBaseline: "Alphabetic",
        },
        cfg.style
      )
    }

    // 给point注册一个词云的shape
    G2.Shape.registerShape("point", "cloud", {
      drawShape(cfg: any, container: any) {
        const attrs = getTextAttrs(cfg)
        return container.addShape("text", {
          attrs: Object.assign(attrs, {
            x: cfg.x,
            y: cfg.y,
          }),
        })
      },
    })

    const data = [
      {
        x: "Python",
        value: 138,
        category: "asia",
      },
      {
        x: "JavaScript",
        value: 131,
        category: "asia",
      },
      {
        x: "United States",
        value: 324,
        category: "america",
      },
      {
        x: "Ind",
        value: 263510000,
        category: "asia",
      },
    ]
    const dv = new DataSet.View().source(data)
    const range = dv.range("value")
    const min = range[0]
    const max = range[1]
    dv.transform({
      type: "tag-cloud",
      fields: ["x", "value"],
      size: [window.innerWidth, window.innerHeight],
      font: "Verdana",
      padding: 0,
      timeInterval: 5000, // max execute time
      rotate() {
        let random = ~~(Math.random() * 4) % 4
        if (random === 2) {
          random = 0
        }
        return random * 90 // 0, 90, 270
      },
      fontSize(d: any) {
        if (d.value) {
          return ((d.value - min) / (max - min)) * (80 - 24) + 24
        }
        return 0
      },
    })
    const chart = new G2.Chart({
      container: this.id,
      forceFit: true,
      height: 500,
      padding: 0,
    })
    chart.source(dv, {
      x: { nice: false },
      y: { nice: false },
    })
    chart.legend(false)
    chart.axis(false)
    chart.tooltip({
      showTitle: false,
    })
    chart.coord().reflect()
    chart
      .point()
      .position("x*y")
      .color("category")
      .shape("cloud")
      .tooltip("value*category")
    chart.render()
  }
  mounted() {
    this.renderChart(1)
  }
}
</script>

<style></style>
