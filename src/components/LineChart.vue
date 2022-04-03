<script setup lang='ts'>
import { onMounted, ref, watchEffect, defineProps } from 'vue'
import * as d3 from 'd3'
import useResizeObserver from '@/use/resizeObserver'

const props = defineProps(['data'])
const svgRef = ref(null)
const { resizeRef, resizeState } = useResizeObserver()

onMounted(() => {
	// pass ref with DOM element to D3, when mounted (DOM available)
	const svg = d3.select(svgRef.value);
	// whenever any dependencies (like data, resizeState) change, call this!
	watchEffect(() => {
		const { width, height } = resizeState.dimensions;
		// scales: map index / data values to pixel values on x-axis / y-axis
		const xScale = d3.scaleLinear()
			.domain([0, props.data.length - 1])
			.range([0, width]);
		const yScale = d3.scaleLinear()
			.domain([d3.min(props.data), d3.max(props.data)])
			.range([height, 0]);
		// line generator: D3 method to transform an array of values to data points ("d") for a path element
		const lineGen = d3.line()
			.curve(d3.curveBasis)
			.x((value, index) => xScale(index))
			.y((value) => yScale(value));
		// render path element with D3's General Update Pattern
		svg
			.selectAll('.line')
			.data([props.data]) // pass entire data array
			.join('path')
			.attr('class', 'line')
			.attr('stroke', 'green')
			.attr('d', lineGen);
	});
});
</script>

<template>
    <div ref="resizeRef">
        <svg ref="svgRef"></svg>
    </div>
</template>

<style>
.line {
	@apply fill-transparent stroke-green-400 stroke-2
}
</style>
