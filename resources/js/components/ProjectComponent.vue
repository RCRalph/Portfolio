<template>
	<a :href="`/projects/${data.id}`">
		<div class="project-wrapper">
			<div
				class="project-thumbnail"
				:style="`background-image: url(/img/thumbnails/${data.thumbnail});`"
			>
			</div>

			<div class="project-text">
				<div class="project-title">{{ data.title }}</div>
				<div class="project-tags" v-html="joinWithCommas(data.tags)"></div>
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
	methods: {
		joinWithCommas(input) {
			let joined = input
				.slice(0, 3)
				.map(item => item.replaceAll(" ", "&nbsp;"))
				.join(", ");
			
			if (input.length > 3) {
				joined += " and&nbspmore";
			}

			return joined;
		}
	}
}
</script>