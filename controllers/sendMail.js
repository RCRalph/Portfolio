const nodemailer = require("nodemailer");

async function sendMail(message)  {
	const transporter = nodemailer.createTransport({
		host: process.env.TRANSPORTER_HOST,
		port: process.env.TRANSPORTER_PORT,
		secure: process.env.TRANSPORTER_PORT == 465,
		auth: {
			user: process.env.TRANSPORTER_USER,
			pass: process.env.TRANSPORTER_PASS
		},
		tls: {
			rejectUnauthorized: false
		}
	});

	let status = 200;
	try {
		await transporter.sendMail(message, err => {
			if (err) {
				console.error(err);
				status = 500;
			}
		});
	}
	catch {
		status = 500;
	}	
	
	return status;
};

module.exports.sendMail = sendMail;