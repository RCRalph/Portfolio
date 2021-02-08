<template>
	<div class="container">
		<div class="row px-3">
			<div class="projects-wrapper">
				<div class="title">My projects:</div>

				<div class="select-tags">
					<div class="select-tags-text">
						Select tags:
					</div>
					<div class="select-tags-select">
						<multiselect
							v-model="selected"
							:options="tags"
							tag-placeholder="Add this as new tag"
							placeholder="Search or add a tag"
							:multiple="true"
							:taggable="true"
						></multiselect>
					</div>
				</div>

				<hr>
			</div>
		</div>
	</div>
</template>

<script>
import Multiselect from 'vue-multiselect';

export default {
	components: {
		Multiselect
	},
	data() {
		return {
			tags: [],
			selected: [],
			projects: []
		}
	},
	mounted() {
		fetch("/api/projects")
			.then(response => response.json())
			.then(response => {
				this.projects = response;

				// Get all tags
				let tags = {};
				response.forEach(item => {
					item.tags.forEach(item => tags[item] = 1);
				});
				this.tags = Object.keys(tags);
				this.tags.sort();
			})
	}
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>