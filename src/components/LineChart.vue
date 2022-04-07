<script setup lang='ts'>
import { onMounted, ref, watchEffect, defineProps, onBeforeUnmount, reactive } from 'vue'
import * as d3 from 'd3'

const props = defineProps(['data', 'percentage'])
const svgRef = ref(null)
const resizeRef = ref()
const resizeState = reactive({
	dimensions: {}
})

interface ResizeStateDimensions {
	width?: number
	height?: number
}

const observer = new ResizeObserver(entries => {
	entries.forEach(entry => {
		resizeState.dimensions = entry.contentRect
	})
})

onMounted(() => {
	const chartColor = parseFloat(props.percentage) > 0
	resizeState.dimensions = resizeRef.value.getBoundingClientRect()
	observer.observe(resizeRef.value)
	// pass ref with DOM element to D3, when mounted (DOM available)
	const svg = d3.select(svgRef.value)
	// whenever any dependencies (like data, resizeState) change, call this!
	watchEffect(() => {
		const { width, height }: ResizeStateDimensions = resizeState.dimensions
		// scales: map index / data values to pixel values on x-axis / y-axis
		const xScale = d3.scaleLinear()
			.domain([0, props.data.length - 1])
			.range([0, width])
		const yScale = d3.scaleLinear()
			.domain([d3.min(props.data), d3.max(props.data)])
			.range([height, 0])
		// line generator: D3 method to transform an array of values to data points ("d") for a path element
		const lineGen = d3.line()
			.curve(d3.curveBasis)
			.x((value, index: number) => xScale(index))
			.y(yScale)
		svg
			.selectAll('.chart-line')
			.data([props.data]) // pass entire data array
			.join('path')
			.attr('class', 'chart-line')
			.attr('stroke', 'green')
			.classed('chart-green-line', chartColor)
			.attr('d', lineGen)
	})
})

onBeforeUnmount(() => {
	observer.unobserve(resizeRef.value)
})
</script>

<template>
    <div ref="resizeRef">
        <svg ref="svgRef"></svg>
    </div>
</template>

<style>
.chart-green-line {
	@apply fill-transparent stroke-green-400 stroke-2
}
.chart-line {
	@apply fill-transparent stroke-red-600 stroke-2
}
.line-chart svg {
	@apply w-full
}
</style>
