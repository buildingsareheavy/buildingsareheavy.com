---
title: Making A Snippet In VSCode
excerpt: A quick reference to how I made my own Visual Studio Code snippet.
date: 2019-09-12
cover_image: ./images/making-a-vue-snippet-in-vscode/cover.jpg
tags:
  - VS Code
  - Javascript
  - Vue
---

I noticed in the last few weeks, for some reason the Vue tooling extension [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) got all janky, so I decided to research how to write something custom.

I found the VSCode page about [snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_create-your-own-snippets) and read up on how to create your own, which actually turned out to be quiet simple.

Here we go homies....

Open the _command palette_ and search for `Preferences: Configure User Snippets`.

Then select the `New Global Snippets File` and type in the file name you want and hit _enter_.

You will then get the following boilerplate:

```json
{
  // Place your global snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and
  // description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope
  // is left empty or omitted, the snippet gets applied to all languages. The prefix is what is
  // used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
  // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders.
  // Placeholders with the same ids are connected.
  // Example:
  // "Print to console": {
  // 	"scope": "javascript,typescript",
  // 	"prefix": "log",
  // 	"body": [
  // 		"console.log('$1');",
  // 		"$2"
  // 	],
  // 	"description": "Log output to console"
  // }
}
```

I have configured mine to say:

```json
{
  "scaffold": {
    "scope": "javascript,vue",
    "prefix": ["scaffold"],
    "body": [
      "<template>",
      "$2",
      "</template>",
      "",
      "<script>",
      "$3",
      "export default {",
      "name: \"$1\"",
      "}",
      "</script>",
      "",
      "<style lang=\"scss\">",
      "$0",
      "</style>"
    ],
    "description": "scaffold vue template with scss"
  }
}
```

Now my snippet "_scaffold_" will only be available in `.vue` files. The cursor starts on the `name: ""` then tabs to the `template`, then to `script` above `export default` if I need to import anything, then it stops at `style`. I have added `lang="scss"` since I always use SCSS and it got super annoying to have to add that each time I created a new component.

You can add whatever you want in the snippet and scope it to whichever file extension(s) fit most appropriately. Enjoy 😇
