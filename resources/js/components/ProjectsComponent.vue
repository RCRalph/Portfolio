<template>
	<div class="container">
		<div class="row px-3">
			<div class="projects-wrapper">
				<div v-if="ready">
					<div v-if="!error">
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

						<hr class="mx-3">

						<div v-if="projectsWithTags.length">
							<div class="projects-list-wrapper" v-if="projectsWithTags.length">
								<div v-for="(item, index) in projectsWithTags" :key="index" class="projects-list-item">
									<router-link :to="`/my-projects/${item.id}`">
										<div class="project-wrapper">
											<div
												class="project-thumbnail"
												:style="`background-image: url(/img/thumbnails/${item.thumbnail});`"
											>
											</div>

											<div class="project-text">
												<div class="project-title">{{ item.title }}</div>
												<div class="project-tags" v-html="joinWithCommas(item.tags)"></div>
											</div>
										</div>
									</router-link>
								</div>
							</div>

							<div class="projects-list-caption">
								Projects are ordered from the most to the least complex.
							</div>
						</div>


						<div v-else>
							<div class="h2 font-weight-bold text-center my-4">Couldn't find any projects :(</div>
						</div>
					</div>

					<div v-else>
						<div class="h1 font-weight-bold text-center my-3">An error has occured :( Try again...</div>
					</div>
				</div>

				<div v-else>
					<div class="spinner"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Multiselect from "vue-multiselect";
import ProjectComponent from "./ProjectComponent.vue"

export default {
	components: {
		Multiselect,
		ProjectComponent
	},
	data() {
		return {
			tags: [],
			selected: [],
			projects: [],
			error: false,
			ready: false
		}
	},
	computed: {
		projectsWithTags() {
			if (!this.selected.length) {
				return this.projects;
			}

			let retArr = this.projects;
			this.selected.forEach(item => {
				retArr = retArr.filter(item1 => item1.tags.includes(item));
			});

			return retArr;
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
	},
	mounted() {
		fetch("/api/my-projects")
			.then(response => response.json())
			.then(response => {
				this.projects = response;

				// Get all tags
				let tags = {};
				response.forEach(item => {
					item.tags.forEach(item => tags[item] = 1);
				});
				this.tags = Object.keys(tags);
				this.tags.sort(
					(a, b) => a.toLowerCase().localeCompare(b.toLowerCase())
				);
			})
			.catch(err => {
				console.error(err);
				this.error = true;
			})
			.then(() => {
				this.ready = true;
			})
	}
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>
	.multiselect__tag {
		background: #00b8ff;
		color: black;
	}

	.multiselect__option--highlight {
		background: #00b8ff;
		color: black;
	}

	.multiselect__option--highlight::after {
		background: #00b8ff;
		color: black;
	}

	.multiselect__option--selected.multiselect__option--highlight {
		background: #ff4000;
	}

	.multiselect__option--selected.multiselect__option--highlight::after {
		background: #ff4000;
	}

	.multiselect__tag-icon:hover {
		background-color: #0093cc;
	}
</style>
