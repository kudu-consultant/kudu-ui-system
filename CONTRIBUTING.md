# Contributing

Kudu UI Design System

<a href="https://www.npmjs.com/package/kudu/ui-system"><img src="https://img.shields.io/npm/v/kudu/ui-system?style=flat&logo=npm" alt="npm version" /></a>

## Table of Contents

- [Contributing](#contributing)
  - [Table of Contents](#table-of-contents)
  - [Code of conduct](#code-of-conduct)
  - [Files and folders](#files-and-folders)
  - [Local development](#local-development)
  - [How can I contribute?](#how-can-i-contribute)
    - [Reporting an issue](#reporting-an-issue)
    - [Code contribution](#code-contribution)
      - [Commit and push on your branch](#commit-and-push-on-your-branch)
    - [Pull Request guidelines](#pull-request-guidelines)
    - [Contribution acceptance criteria](#contribution-acceptance-criteria)
  - [License](#license)
  - [Helper tools](#helper-tools)
    - [Automatic update packages](#automatic-update-packages)

## Code of conduct

This project and everyone participating in it is governed by the [following code of conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Files and folders

| File(s)           | Description                                            |
| ----------------- | ------------------------------------------------------ |
| `package.json`    | Configuration file for the project                     |
| `tsconfig.json`   | Config file for TypeScript                             |
| `renovate.json`   | Config file for renovate bot (Github app)              |
| `.gitignore`      | Config file for git ignore                             |
| `.github`         | Folder for GitHub-specific files and workflows (CI/CD) |
| `LICENSE`         | License file                                           |
| `CHANGELOG.md`    | Log of changes in the project                          |
| `CONTRIBUTING.md` | Guidelines for contributing to the project             |
| `src`             | Folder containing all source files                     |
| `src/tailwind`    | Folder for tailwind-related files                      |
| `src/postcss`     | Folder for postcss-related files.                      |
| `src/styles`      | Folder containing all CSS styles                       |

## Local development

TODO

## How can I contribute?

### Reporting an issue

The first way to contribute to a project is simply proposing an issue. If you find anything which is not working well or as expected you can [open an issue](https://github.com/kudu-consultant/kudu-ui-system/issues/new).

Before to open the issue please check if there is one similar already opened. It will save us hours of work and it will allow us to answer you quickly with the desired hotfix or implementation.

> **NOTE:** if looking for existing issues you will find the same problem, or similar, in **closed** state, please refer to this issue (with its number) when you are opening your one. It is maybe a regression we didn't see. In this way you will help to go faster and to find a definitive solution to the recurrent problem.

When you are opening an issue, please be sure to report as much information as you can to allow us to replicate the problem and faster find the solution.

### Code contribution

If you are a dev and you want to directly fix a problem or implement a new feature... you are the best one! :clap::clap:

To propose any change you have to submit us a [Pull Request](https://help.github.com/articles/about-pull-requests/)

The workflow we are using is:

1. Fork this repository (as you don't have a direct write access to the main one).
2. Create your code, `Commit` and `Push the code` on your forked repo
3. Create a GitHub `Pull Request` to our **develop** branch.

We will take the time to review your code, make some comments or asking information if needed. But, as you took time to help us, we will take in serious consideration what you are proposing.
To quickly have your code available on production, please take care and read our [Contribution acceptance criteria](#contribution-acceptance-criteria)

#### Commit and push on your branch

```bash
git add <files>
git commit -m "<type>[optional scope]: <description>" (the message must follow https://www.conventionalcommits.org guidelines)
git push origin <my-branch-name>
```

### Pull Request guidelines

When you open your Pull Request provide as much information as possible.

- For an issue, describe what you are fixing with your pull request and how you had found the defect.
- If you are proposing an enhancement, describe what you are adding to the code (new function, performance enhancement, documentation update, changing an existing function, ...).

### Contribution acceptance criteria

We love maintenable software and we are happy when some else than us is able to take the code, **understand it** and be able to change it.
To reach this goal we fixed some rule in our team and we would love to go ahead in this way, even with the external contribution:

1. Be sure your code compile: no syntax error, no missing library, ...
2. Add comments on the code if you want to explain better what is happening in the code.
3. Add documentation for any API, if needed, or functional explaining what changed/added with your code.
4. After you proposed the PullRequest. If you will receive any mail or find any automatic comment on the Pull Request you opened, it means there is something which is not respecting the project defined code style.

If you respect all these rules you will help us saving time and we will be able to check your pull request faster.

## License

By contributing to kudu-ui-system, you agree that your contributions will be licensed
under the [LICENSE](LICENSE) of the project.

## Helper tools

### Automatic update packages

This repo use renovate for up to date all packages

- [How to set up Renovate](https://github.com/renovatebot/tutorial)
- [Renovate dashboard](https://developer.mend.io/github/kudu-consultant/landing)
- [Renovate docs](https://docs.renovatebot.com/)
