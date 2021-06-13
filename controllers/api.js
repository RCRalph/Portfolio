module.exports = (app) => {
	app.get("/api/projects", (req, res) => {
		const projectsJson = require("../resources/json/projects.json")
			.map((item, id) => {
				const retObj = ({ title, thumbnail, tags, complexity } = item, { title, thumbnail, tags, complexity });
				retObj.id = id + 1;
				return retObj;
			})
			.sort((a, b) => b.complexity - a.complexity);

		return res.json(projectsJson);
	});
}