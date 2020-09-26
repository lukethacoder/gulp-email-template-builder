# 🏭 Gulp Email Template Builder

A small html templating engine built to make building email templates more enjoyable.

The purpose of this small engine is to "componentise" html blocks and allow you to build reusable HTML components to be used by a suite of email templates.

Under to hood we're using [Gulp](https://gulpjs.com/), [PostHTML](https://posthtml.org/) (with [posthtml-include](https://github.com/posthtml/posthtml-include)) and [BrowserSync](https://browsersync.io/).

> Any css added to `style.css` will be pulled inline when compiled

## 🔥 Features

- HTML Components
- BrowserSync/Hot Reload
- CSS Inlining

## 🚀 Getting started

```bash
yarn
# or npm i

yarn dev
# or npm run dev
```

> NOTE: make sure you have the [Gulp cli](https://gulpjs.com/) installed.


## 🦕 Example

Included in the src folder is an example setup. All `blocks` are in a separate folder and are being referenced by the `index.html` file.

```html
<table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell">
  <tr>
    <td class="td" style="width: 650px; min-width: 650px; font-size: 0pt; line-height: 0pt; padding: 0; margin: 0; font-weight: normal">
      <!-- The include markup is where the magic happens -->
      <include src="blocks/header.html"></include>
      <include src="blocks/feature-one.html"></include>
      <!-- include more blocks here -->
      <include src="blocks/footer.html"></include>
    </td>
  </tr>
</table>
```

## 📝 License

Licensed under the [MIT License](./LICENSE).