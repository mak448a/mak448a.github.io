---
layout: blog
title: How to Export an IPA without an Apple Developer Subscription
description: Apple doesn't let you export to IPA format without a subscription. But thankfully, there's an easy way to get around this. Follow this quick tutorial and you too will know how to export an IPA! This works as of November 14, 2024.
date: November 14, 2024
---

## Requirements
- A macOS computer with XCode

## Tutorial
1. Open your XCode Project and get ready to export it.
2. Move your mouse cursor to the top of the screen to reveal the menu bar.
3. Go to `Product`, then click `Archive`.
4. When it's done building, it should show a popup with your archived app. Right click on the entry and click `Show in Finder`.
5. Right click on the file that is shown in Finder and click `Show Package Contents`.
6. Inside this folder, go to `Products/Applications`. Inside will be a file like `yourapp.app`.
7. Make a folder called `Payload` on your Desktop. Copy `yourapp.app` to the `Payload` folder.
8. Right click the Payload folder and compress it.
9. Rename the file from `Payload.zip` to `yourapp.ipa`.
10. Enjoy your exported IPA! You can now sideload it with something like AltStore!

## Credits
This guide is based on [a tutorial from YouTube](https://youtu.be/rrlOPUgbae8).
