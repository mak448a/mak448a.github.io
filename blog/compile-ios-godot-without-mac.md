---
layout: blog
title: How to compile Godot to iOS without a Mac
permalink: /blog/compile-ios-godot-without-mac
description: Ever wanted to compile a Godot app to an iPhone IPA without owning a Mac or renting a Mac in the cloud? This guide is for you!
date: July 22, 2024
edited: December 8, 2024
---

Ever wanted to compile a Godot app to an iPhone IPA without owning a Mac or renting a Mac in the cloud? This guide is for you!

## Requirements
- gh CLI
- git

## Installation and Configuration
1. [Download Python](https://python.org). Make sure to check the box that says "Add to PATH" if you're on Windows.
2. Go to the path where you downloaded this repository. 
   - For Windows, go to the folder and press on the address bar. Then, type in cmd and press enter.
   - For Linux, type `cd` and then the path you want in your terminal.
3. Install dependencies with the commands below. Choose the one for your operating system.

**Windows**
```shell
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

**Linux**
```shell
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```
4. Visit https://www.dropbox.com/developers/apps to get your key.
![Screenshot of "create new app"](https://raw.githubusercontent.com/mak448a/build-ios/refs/heads/main/tutorial/1.png)
You can name your app whatever you want, as long as it's unique.
![Screenshot of app naming](https://raw.githubusercontent.com/mak448a/build-ios/refs/heads/main/tutorial/2.png)
![Screenshot of generating access token](https://raw.githubusercontent.com/mak448a/build-ios/refs/heads/main/tutorial/3.png)
![Screenshot of going to permissions tab](https://raw.githubusercontent.com/mak448a/build-ios/refs/heads/main/tutorial/4.png)
![Screenshot of permissions](https://raw.githubusercontent.com/mak448a/build-ios/refs/heads/main/tutorial/5.png)
![Screenshot of submit button](https://raw.githubusercontent.com/mak448a/build-ios/refs/heads/main/tutorial/6.png)
5. Run the Python script!
```shell
python main.py
```

## Usage
When you launch the CLI with `python main.py`, it'll prompt you to choose whether you want to build or edit an IPA. For the first time, choose build IPA.

### Mode instructions
**Build IPA:**
- Follow the prompts.

**Edit IPA:**
- When exporting your Godot Project, choose "Export PCK/ZIP" and save it as `yourproject.pck`.

### But what's the difference?
- Build IPA is for the first time you run the CLI. It makes a fresh build of your project.
- Edit IPA is for afterwards. You can export with the PCK only, and it'll replace some of the files in the IPA. If you didn't change any settings in `project.godot`, it should work perfectly! If you did though, rebuild the IPA.



## Troubleshooting
If you get an `AuthError('expired_access_token', None))`, that means that you need to get a new OAuth token from Dropbox.

## Other notes
Started work on this project ~11/2024.
Inspired by [u/_atreat](https://www.reddit.com/r/godot/comments/vlwrj0/comment/idxn5z8/) and [u/Host127001](https://www.reddit.com/r/godot/comments/s0pj02/comment/hs3rjl3/) who suggested building with Github actions.
