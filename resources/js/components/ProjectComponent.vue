<template>
	<a :href="`/projects/${data.id}`">
		<div class="project-wrapper">
			<div
				class="project-thumbnail"
				:style="`background-image: url(/img/${data.thumbnail});`"
			>
			</div>

			<div class="project-text">
				<div class="project-title">{{ data.title }}</div>
				<div class="project-tags">{{ data.tags | joinWithCommas }}</div>
			</div>
		</div>
	</a>
</template>

<script>
export default {
	props: {
		data: {
			type: Object,
			required: true
		}
	},
	filters: {
		joinWithCommas(input) {
			return input
				.map(item => item.replaceAll(" ", "&nbsp;"))
				.join(", ")
		}
	}
}
</script>