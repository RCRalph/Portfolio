module.exports = (app) => {
	app.get("/api/projects", (req, res) => {
		const projectsJson = require("../resources/json/projects.json")
			.map((item, id) => {
				const retObj = ({ title, thumbnail, tags } = item, { title, thumbnail, tags });
				retObj.id = id + 1;
				return retObj;
			})
			.reverse();

		return res.json(projectsJson);
	});
}