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
- Python

## Installation and Configuration
1. Download the GitHub repository for building an IPA with 
```shell
git clone https://github.com/mak448a/build-ios
```
2. Change the current directory to build-ios with
```shell
cd build-ios
```
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
4. Visit https://www.dropbox.com/developers/apps to get a token for using with the tool.
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