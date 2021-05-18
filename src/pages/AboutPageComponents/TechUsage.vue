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
export default class TechUsage extends Mixin(G2Mixin) {
  renderChart(newVal: Object) {
    const { DataView } = DataSet
    const data = [
      { 语言: "后端", 评分: 80 },
      { 语言: "爬虫", 评分: 70 },
      { 语言: "前端", 评分: 30 },
      { 语言: "数据分析", 评分: 30 },
      { 语言: "客户端", 评分: 30 },
    ]
    const dv = new DataView().source(data)
    dv.transform({
      type: "fold",
      fields: ["评分"], // 展开字段集
      key: "user", // key字段
      value: "score", // value字段
    })
    const chart = new G2.Chart({
      container: this.id,
      forceFit: true,
      height: 500,
      padding: [20, 20, 95, 20],
    })
    chart.source(dv, {
      score: {
        min: 0,
        max: 100,
      },
    })
    chart.coord("polar", {
      radius: 0.8,
    })
    chart.axis("item", {
      line: null,
      tickLine: null,
      grid: {
        lineStyle: {
          lineDash: null,
        },
        hideFirstLine: false,
      },
    })
    chart.axis("score", {
      line: null,
      tickLine: null,
      grid: {
        type: "polygon",
        lineStyle: {
          lineDash: null,
        },
      },
    })
    chart.legend("user", {
      marker: "circle",
      offset: 30,
    })
    chart.line().position("语言*score").color("user").size(2)
    chart
      .point()
      .position("语言*score")
      .color("user")
      .shape("circle")
      .size(4)
      .style({
        stroke: "#fff",
        lineWidth: 1,
        fillOpacity: 1,
      })
    chart.area().position("语言*score").color("user")
    chart.render()
  }
  mounted() {
    this.renderChart(1)
  }
}
</script>

<style></style>
