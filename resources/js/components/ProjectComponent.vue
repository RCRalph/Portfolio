<template>
	<div class="container">
		<div class="row px-3">
			<div v-if="ready" class="project-content-wrapper">
				<div class="project-title">
					{{ project.title || "test" }}
				</div>

				<div v-if="project.gallery.length" class="project-content-gallery">
					<carousel :perPage="1" :autoplay="true" :autoplayHoverPause="true" :autoplayTimeout="5000">
						<slide v-for="item, i in project.gallery" :key="i">
							<img :src="item" :alt="`Image #${i + 1}`">
						</slide>
					</carousel>
				</div>

				<div class="project-buttons">
					<a v-if="project.github" :href="project.github" target="_blank">
						<i class="fab fa-github"></i> View on GitHub
					</a>

					<a v-if="project.deployment" :href="project.deployment" target="_blank">
						<i class="fas fa-rocket"></i> View deployment
					</a>
				</div>

				<hr>

				<div class="project-tags">
					<div class="project-tags-text">Created using:</div>

					<div class="project-tags-content" v-html="project.tags"></div>
				</div>

				<div class="project-description-wrapper">
					<div class="project-description">
						<div class="project-description-content" v-html="project.description"></div>
					</div>
				</div>
			</div>

			<div v-else class="project-content-wrapper">
				<div class="spinner"></div>
			</div>
		</div>
	</div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
	components: {
		Carousel,
		Slide
	},
	data() {
		return {
			ready: false,
			error: false,
			project: {},
		}
	},
	mounted() {
		fetch(`/api/my-projects/${this.$route.params.id}`)
			.then(response => response.json())
			.then(response => this.project = response)
			.catch(err => {
				console.error(err);
				this.error = true;
			})
			.finally(() => {
				this.ready = true;
			})
	}
}
</script>
