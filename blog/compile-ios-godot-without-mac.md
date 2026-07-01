---
layout: blog
title: How to export a Godot Project to iOS without a Mac for free
permalink: /blog/compile-ios-godot-without-mac
description: Ever wanted to compile a Godot app to an iPhone IPA without owning a Mac or renting a Mac in the cloud? This guide teaches you how to export a Godot Project or XCodeProject to iOS without owning a Mac.
date: July 22, 2024
edited: July 1, 2026
---

Ever wanted to export a Godot app or project to an iPhone IPA without owning a Mac or renting a Mac in the cloud? This guide is for you!

Please give [my repository](https://github.com/mak448a/build-ios) a star on GitHub if this helps!


## Requirements
- GitHub CLI (2.63.2 tested, other versions untested.)
- Git (2.50.1 tested)
- Python (3.12+)
- Godot Engine

## Installation and Configuration
1. First, download [Python](Python.org/downloads), Git, and [GitHub CLI](https://cli.github.com/). Make sure to check the box that says "Add to PATH" when installing Python if you're on Windows. Run this command if you want to install Python, Git, and GitHub CLI on Windows: `winget install Git.Git GitHub.cli Python.Python.3.13`, then log into GitHub with `gh auth login`.
2. Inside your project, go to `Project>Export...>Add..>iOS` and set team and bundle identification. Since this project builds an unsigned IPA, you can put anything for the team.
3. Press `Export Project` and save it to a new folder.
4. Open a Terminal/Command Prompt and download [build-ios](https://github.com/mak448a/build-ios) with the following command.
```shell
git clone https://github.com/mak448a/build-ios --depth=1
```
5. Change the current directory to build-ios with
```shell
cd build-ios
```
6. Install dependencies with the commands below. Choose the one for your operating system.

**Windows**
(Run in command prompt)

```shell
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

**Linux**
```shell
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```
7. Visit https://www.dropbox.com/developers/apps to get your Dropbox token for use with the tool.
![Screenshot of "create new app"](https://raw.githubusercontent.com/mak448a/build-ios/refs/heads/main/tutorial/1.png)
You can name your app whatever you want, as long as it's unique.
![Screenshot of app naming](https://raw.githubusercontent.com/mak448a/build-ios/refs/heads/main/tutorial/2.png)
![Screenshot of generating access token](https://raw.githubusercontent.com/mak448a/build-ios/refs/heads/main/tutorial/3.png)
![Screenshot of going to permissions tab](https://raw.githubusercontent.com/mak448a/build-ios/refs/heads/main/tutorial/4.png)
![Screenshot of permissions](https://raw.githubusercontent.com/mak448a/build-ios/refs/heads/main/tutorial/5.png)
![Screenshot of submit button](https://raw.githubusercontent.com/mak448a/build-ios/refs/heads/main/tutorial/6.png)
8. Create the file `.env` and add `TOKEN=YOURKEYHERE` (replace the token with your token) to it.
9. Run the Python script!
```shell
python main.py
```
10. (Optional) If you want to skip writing in the questions every time you want to build, add the answers to the `.env` file. Make sure to check `example.env` for how to do this!
11. When you launch the CLI with `python main.py`, it'll prompt you to choose whether you want to build or edit an IPA. For the first time, choose build IPA.

## Usage
When you launch the CLI with `python main.py`, it'll prompt you to choose whether you want to build or edit an IPA. For the first time, choose build IPA.

If you want to save your answers, you can edit `.env` with your DropBox token, GitHub username, repository name, and output file.

When the program asks you for a path, you can drag in a file into the terminal window.

### Options

**Build IPA:**
- Follow the prompts. After it builds, you can download your IPA file from GitHub.

**Edit IPA:**
- When exporting your Godot Project, choose "Export PCK/ZIP" and save it as `yourproject.pck`. The IPA file will be changed to include the new changes in the `.pck` file.

### But what's the difference?
- Build IPA is for the first time you run the CLI. It makes a fresh build of your project.
- Edit IPA is for afterwards. You can export with the PCK only, and it'll replace some of the files in the IPA. If you didn't change any settings in `project.godot`, it should work perfectly! If you did though, rebuild the IPA.

## Troubleshooting
### AuthError('expired_access_token', None)
Your token is probably expired. Get a new OAuth token from Dropbox.

If you still have problems, check [the other troubleshooting thread](https://github.com/mak448a/build-ios/issues/13) or open an issue in [this repository](https://github.com/mak448a/build-ios/issues)!
While you're waiting, try following the [original instructions](https://github.com/mak448a/build-ios/tree/main/original_repo).
### Invalid files
Did you add double quotes around the file path?

### Edit IPA not working
Did you place your pck file in the same directory as your ipa file?

## Notes and credits
- Edit IPA function inspired by [this article by RandomMomentania](https://randommomentania.com/2022/01/godot-easy-ios-app-testing/)
- Started work on this project ~11/2024.
- Inspired by [u/_atreat](https://www.reddit.com/r/godot/comments/vlwrj0/comment/idxn5z8/) and [u/Host127001](https://www.reddit.com/r/godot/comments/s0pj02/comment/hs3rjl3/) who suggested building with GitHub Actions.

