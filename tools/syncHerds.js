import fs from 'fs';
import path from 'path';
import { HERDS } from '../herds.js';

// Function to copy files from one directory to another if they don't already exist
function copyFilesIfNotExist(srcDir, destDir) {
	if (!fs.existsSync(destDir)) {
		fs.mkdirSync(destDir, { recursive: true });
	}

	const items = fs.readdirSync(srcDir);

	items.forEach((item) => {
		const srcPath = path.join(srcDir, item);
		const destPath = path.join(destDir, item);

		if (!fs.existsSync(destPath)) {
			fs.cpSync(srcPath, destPath, { recursive: true });
			console.log(`Copied: ${srcPath} -> ${destPath}`);
		}
	});
}

// Function to create a file with specific content if it doesn't already exist
function createEnvFile(arg) {
	const envFilePath = path.join(process.cwd(), `.env.${arg}`);
	const envContent = `VITE_CONTENT_KEY=${arg}`;

	if (!fs.existsSync(envFilePath)) {
		fs.writeFileSync(envFilePath, envContent, 'utf8');
		console.log(`Created: ${envFilePath}`);
	} else {
		console.log(`Skipped (already exists): ${envFilePath}`);
	}
}

// Main function
function main(args) {
	if (args.length === 0) {
		console.error('No arguments provided. Please specify at least one argument.');
		process.exit(1);
	}

	const templateDir = path.join(process.cwd(), 'src', 'lib', 'content', 'template');

	args.forEach((arg) => {
		const targetDir = path.join(process.cwd(), 'src', 'lib', 'content', arg);

		copyFilesIfNotExist(templateDir, targetDir);
		createEnvFile(arg);
	});
}

main(HERDS);
