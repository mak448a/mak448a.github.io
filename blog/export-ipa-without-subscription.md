---
layout: blog
title: How to Export an IPA without an Apple Developer Subscription
description: Apple doesn't let you export to IPA format without a subscription. But thankfully, there's an easy way to get around this. Follow this quick tutorial and export your IPA files today without an Apple Developer subscription!
date: November 14, 2024
---

## Requirements
- A macOS computer with XCode

## Tutorial
1. Open your XCode Project and get ready to export it.
2. In build settings, set everything under "Signing" to "Apple Developer."
3. In the “Signing and Capabilities” tab, set the team to yourself.
4. Move your mouse cursor to the top of the screen to reveal the menu bar.
5. Go to `Product`, then click `Archive`.
6. When it's done building, it should show a popup with your archived app. Right click on the entry and click `Show in Finder`.
7. Right click on the file that is shown in Finder and click `Show Package Contents`.
8. Inside this folder, go to `Products/Applications`. Inside will be a file like `yourapp.app`.
9. Make a folder called `Payload` on your Desktop. Copy `yourapp.app` to the `Payload` folder.
10. Right click the Payload folder and compress it.
11. Rename the file from `Payload.zip` to `yourapp.ipa`.
12. Enjoy your exported IPA! You can now sideload it with something like AltStore!

## Credits
This guide is based on [a tutorial from YouTube](https://youtu.be/rrlOPUgbae8).
