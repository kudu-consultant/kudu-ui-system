# Kudu UI System

Kudu UI Design System is a CSS library used across all products developed by Kudu.

<a href="https://www.npmjs.com/package/kudu-ui-system"><img src="https://img.shields.io/npm/v/kudu-ui-system?style=flat&logo=npm" alt="npm version" /></a>

## Install package

> **Note:**
>
> In order to the `kudu-ui-system` package to work correctly, you need to
> have Tailwind and PostCSS configured in your project beforehand.
> You can learn how to configure Tailwind and PostCSS in your project
> by following this [link](https://tailwindcss.com/docs/installation).

After installing [ppnpm](https://pnpm.io/installation), Tailwind and PostCSS, you can install `kudu-ui-system` with this command:

```sh
pnpm i kudu-ui-system
```

## Usage

1. Import and include the preset configuration from `kudu-ui-system` in your `tailwind.config.js`.

```js
const { tailwindPreset } = require("kudu-ui-system/tailwindcss");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  presets: [tailwindPreset],
};
```

2. Import and include the postcss configuration from `kudu-ui-system` in your `postcss.config.js`.

```js
const { kuduuisystem } = require("kudu-ui-system/postcss");

export default {
  plugins: {
    ...kuduuisystem,
    ...
  }
};
```

3. In your main CSS file, import `kudu-ui-system` at the beginning of the file

```css
@import "kudu-ui-system/styles";
```

4. Set the custom atrribute `data-theme="kududesign"` in your HTML file:

```html
<!DOCTYPE html>
<html lang="en" dir="ltr" data-theme="kududesign">
  ...
</html>
```

## Development

All this package is generated with Tailwind CSS and DaisyUI.

Tailwind CSS allows for more efficient CSS writing and maintains a structured
approach. Daisy UI is a class library that provides styles for commonly used components.

For
more details, you can refer to the documentation of [Tailwind CSS](https://tailwindcss.com/docs/utility-first) and [Daisy UI](https://daisyui.com/docs/use/).

## Changelog

If you want to know the different changes between versions of this package,
[look at the changelog here](https://github.com/kudu-consultant/kudu-ui-system/CHANGELOG.md).

## I have an issue, what should I do?

Please file the issue [here](https://github.com/kudu-consultant/kudu-ui-system/issues/new).

## Security Policy

See [the security Policy](https://github.com/kudu-consultant/kudu-ui-system/SECURITY.md).

## Contributing

See [the contributing docs](https://github.com/kudu-consultant/kudu-ui-system/CONTRIBUTING.md).

## License

By contributing to kudu-ui-system, you agree that your contributions will be licensed
under the [LICENSE](https://github.com/kudu-consultant/kudu-ui-system/blob/main/LICENSE) of the project.
