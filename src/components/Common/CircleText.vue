<template>
  <svg :height="width" :width="width">
    <circle
      cx="60"
      cy="60"
      r="40"
      stroke="#392F32"
      stroke-width="8"
      fill="none"
    />
    <circle
      r="40"
      cx="60"
      cy="60"
      stroke="#ff7171"
      fill="transparent"
      stroke-dasharray="150"
      stroke-dashoffset="60"
      stroke-width="7"
    ></circle>
    <text x="45" y="65" fill="#F8F9F9">33%</text>
  </svg>
</template>

<script>
import Vue from "vue"

@Component
export default class CircleText extends Vue {
  @Prop
  width = p({
    type: Number,
    required: true,
  })
  @Prop
  height = p({
    type: Number,
    required: true,
  })
}
</script>

<style></style>
