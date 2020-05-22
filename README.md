# K-State CS Hugo Theme

## [DEMO SITE](https://ksucs-hugo.russfeld.me/)

This is an adaptation of [Hugo Theme Learn](https://learn.netlify.com/en/) that has been customized for use by K-State Computer Science to build online textbooks. It contains some featuers that are unique to our use case, but they may be useful to others.

Some unique features to this theme:
* Fonts and layouts customized to match K-State's websites and color scheme, as well as [Instructure Canvas](https://canvas.instructure.com/).
* Each page generates an embeddable version that strips menus, headers and footers (add /embed.html to almost any URL). This is meant to be embedded in an iFrame within another page, such as an HTML wiki page in Canvas. 
  * By doing so, we can embed course content in Canvas while editing it via Hugo, taking advantage of tools such as git for versioning. In addition, by updating the source website, all versions of the course in Canvas are updated immediately. 
* Each page also generates a teleprompter version to allow creation of course videos (add /tele.html to almost any URL). Many pages are used as a video script for multi-modal learning. 
  * The teleprompter pages include auto-scroll capabilities. It is compatible with an [IKAN Teleprompter Remote](https://ikancorp.com/shop/teleprompters/tablet-teleprompters-accessories/ikan-elite-remote-bluetooth-teleprompter-remote-for-pt-elite-prompters/), but can be controlled using the number keys or easily customized. See /static/js/tele-scroll.js for details.

See below for the original README information from [Hugo Theme Learn](https://learn.netlify.com/en/).

---

# Sample Site

You can clone a [sample site](https://gitlab.cs.ksu.edu/russfeld/ksucs-hugo) that is already preconfigured to use this template. 

---

# Quick Start Guide

This is a quick start guide for using this theme within a new Hugo website. 

1. [Install Hugo](https://gohugo.io/getting-started/installing/) using the method of your choice. You will need a version of Hugo at 0.60 or later.
  1. I prefer to use [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10) on Windows 10 coupled with [Visual Studio Code](https://code.visualstudio.com/) and the [WSL Extension](https://code.visualstudio.com/docs/remote/wsl). This allows native editing coupled with a Linux terminal. 
  1. On WSL, I usually download the .deb package from [Hugo Releases](https://github.com/gohugoio/hugo/releases) and install it using `sudo dpkg -i <.deb file>`
2. Use Hugo to create a new site. See the [Hugo Quick Start Guide](https://gohugo.io/getting-started/quick-start/#step-2-create-a-new-site). 
  1. `hugo new site <website name>`
3. Install this repository as the theme. See the [Hugo Quick Start Guide](https://gohugo.io/getting-started/quick-start/#step-3-add-a-theme). 
  1. I recommend using Git submodules as directed in the Quick Start Guide. This allows you to pull updated versions of this template onto your site. 
  1. `git init`
  1. `git submodule add https://github.com/russfeld/ksucs-hugo-theme.git`
4. Copy the contents of `config.toml.sample` in this repository to your `config.toml` file in the root of your Hugo website, and edit accordingly. 

---

# Hugo Learn Theme

This repository contains a theme for [Hugo](https://gohugo.io/), based on great [Grav Learn Theme](https://learn.getgrav.org/).

Visit the [theme documentation](https://learn.netlify.com/en/) to see what is going on. It is actually built with this theme.

[![wercker status](https://app.wercker.com/status/233466a2be73fcea400e7dc02ef6adf9/s/master "wercker status")](https://app.wercker.com/project/byKey/233466a2be73fcea400e7dc02ef6adf9)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fmatcornic%2Fhugo-theme-learn.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fmatcornic%2Fhugo-theme-learn?ref=badge_shield)

## Main features

- Automatic Search
- Multilingual mode
- Unlimited menu levels
- Automatic next/prev buttons to navigate through menu entries
- Image resizing, shadow…
- Attachments files
- List child pages
- Mermaid diagram (flowchart, sequence, gantt)
- Customizable look and feel and themes variants
- Buttons, Tip/Note/Info/Warning boxes, Expand

## Installation

Navigate to your themes folder in your Hugo site and use the following commands:

```shell
cd themes/
git clone https://github.com/matcornic/hugo-theme-learn.git
```

Check that your Hugo version is minimum `0.67` with `hugo version`.

![Overview](https://github.com/matcornic/hugo-theme-learn/raw/master/images/tn.png)

## Usage

- [Visit the documentation](https://learn.netlify.com/en/)

## Download old versions (prior to 2.0.0)

If you need old version for compatibility purpose, either download [theme source code from releases](https://github.com/matcornic/hugo-theme-learn/releases) or use the right git tag. For example, with `1.1.0`

- Direct download way: https://github.com/matcornic/hugo-theme-learn/archive/1.1.0.zip
- Git way:

```shell
cd themes/hugo-theme-learn
git checkout tags/1.1.0
```

For both solutions, the documentation is available at https://github.com/matcornic/hugo-theme-learn/releases/download/1.1.0/hugo-learn-doc-1.1.0.zip

## Credits

Many thanks to [@vjeantet](https://github.com/vjeantet/) for the fork [docdock](https://github.com/vjeantet/hugo-theme-docdock). The v2 of this theme is mainly based on his work !

## License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fmatcornic%2Fhugo-theme-learn.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fmatcornic%2Fhugo-theme-learn?ref=badge_large)

## Releasing

Somewhat work-in-progress steps to release with [gren](https://github.com/github-tools/github-release-notes)

- Check all MRs assigned to the milestone are closed or pushed back to another release
- Close the milestone
- Check merged MRs on the milestone have a tag (Bug, Enhancement, etc.)
- Tag and push the repo

  ```shell
  git tag <tag>
  git push origin <tag>
  ```

- Generate CHANGELOG.md with _gren_

  ```shell
  gren changelog  --override --generate --tags=all
  ```

- Fix the date for the current release in CHANGELOG.md
- Add the changelog to git and update the tag

  ```shell
  git add CHANGELOG.md
  git commit -m "Ship tag <tag>"
  git push origin master
  git tag -f <tag>
  git push --force origin <tag>
  ```

- Generate release with _gren_

  ```shell
  gren release -t <tag>
  ```
