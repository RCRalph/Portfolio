const dirTree = require("directory-tree");
const moveFile = require("move-file");

const filesToMove = dirTree("./dist")
	.children
	.filter(item => item.type == "file")
	.forEach(item => {
		moveFile.sync(item.path, "dist/public/" + item.name)
	})