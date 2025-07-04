/**
 * @module This script will get all sceptre files that has changed
 */

import core from "@actions/core";
import github from "@actions/github";

async function run() {
	const token = core.getInput("github-token", { required: true });
	const owner = core.getInput("owner", { required: true });
	const repository = core.getInput("repository", { required: true });
	const pr = core.getInput("pr", { required: true });
	const octokit = github.getOctokit(token);

	const { data: pullRequest } = await octokit.rest.pulls.listFiles({
		owner: owner,
		repo: repository,
		pull_number: Number(pr),
	});

	console.log(pullRequest);
}

run();
