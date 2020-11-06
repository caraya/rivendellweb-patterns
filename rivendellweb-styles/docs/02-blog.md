---
title: Blog
status: draft
---

The styles for the blog are derived from the [Publishing Project](https://publishing-project.rivendellweb.net) where I've been experimenting with Gutenberg-based content, new layouts using Frames and crazy ideas that Gutenberg allows.

These styles reflect the part of the UI that I may want to duplicate in other projects, not the exact architecture of a WordPress blog.

## The default layout

I took the idea for the default layout from [Andy Clarke](https://twitter.com/malarkey)'s example from one of the [Inspired by Design](https://www.smashingmagazine.com/author/andy-clarke/) presentations that he did for [Smashing Magazine](https://www.smashingmagazine.com/).

What attracted me to this layout is that it makes it easier to create traditional layouts without having to guess the number of columns that I want to use.

The basic code looks like this:

```css
@supports (display: grid) {
  .container {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 2fr 2fr 1fr 1fr 2fr;
    grid-auto-rows: minmax(200px, auto);
    grid-gap: 1em 1em;
  }

  .site-header {
    grid-column: 2/-2;
  }
  .site-content {
    grid-column: 3/7;
  
  width: 100%;
  }
  
  .site-footer {
    grid-column: 3/8;
  }
}
```

We can further qualify the grid-based styles so we can add styles where we do have sidebars or we decide to lay the content out differently.

```css
@supports (display: grid) {
  .no-sidebar .site {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 2fr 2fr 1fr 1fr 2fr;
    grid-auto-rows: minmax(200px, auto);
    grid-gap: 1em 1em;
  }

  .no-sidebar .site-header {
    grid-column: 2/-2;
  }
  .no-sidebar .site-content {
    grid-column: 3/7;
    width: 100%;
  }

  .no-sidebar .site-footer {
    grid-column: 3/8;
  }
}
```

This is not a generic layout. We'll look at a more generic layout next.

## Twelve column layout

This is one of the simplest layouts you can do with CSS Grid. It will create twelve columns that split the screen evenly and any number of rows that are at least 200 pixels high and it will have a 1em gap between columns and 1em gap between rows.

```css
@supports (display: grid) {
  .container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: minmax(200px, auto);
    grid-gap: 1em 1em;
  }
}
```

This layout gives a lot more flexibility

## Typography

The blog uses [Recursive](https://recursive.design) variable font as the primary font for the design.

Recursive is a very rich font that does three things I particularly like:

* It covers everything from monospace to sans serif and everything in between
* It provides bold, slanted and italic variations
* It provides a rich set of Open Type features

I first documented how to use recursive in 2019's [Recursive variable font&hellip; How To Use it](https://publishing-project.rivendellweb.net/recursive-variable-font-how-to-use-it/) and I will use a similar process for these styles.

[Inspecting your variable fonts](https://publishing-project.rivendellweb.net/inspecting-your-variable-fonts/)

```css
@font-face {
  font-family: 'Recursive VF';
  src: url("./fonts/recursive-subset.woff2") format("woff2 supports variations"),
  url("./fonts/recursive-subset.woff2") format("woff2-variations");
  font-weight: 300 1000;
  font-display: swap;
}
```

I've used [Wakamaifondue](https://wakamaifondue.com/) to generate the CSS below, working around the [inheritance problem of font-feature-settings](https://github.com/w3c/csswg-drafts/issues/552) and the lack of support for [font-variant-*](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant).

We create [CSS Variables](https://developers.google.com/web/updates/2016/02/css-variables-why-should-you-care) in the `:root` element to define every OpenType layout feature with its default state.

```css
:root {
  --recursive-aalt: 'aalt' off;
  --recursive-case: 'case' off;
  --recursive-dlig: 'dlig' off;
  --recursive-dnom: 'dnom' off;
  --recursive-frac: 'frac' off;
  --recursive-numr: 'numr' off;
  --recursive-ordn: 'ordn' off;
  --recursive-pnum: 'pnum' off;
  --recursive-sinf: 'sinf' off;
  --recursive-ss01: 'ss01' off;
  --recursive-ss02: 'ss02' off;
  --recursive-ss03: 'ss03' off;
  --recursive-ss04: 'ss04' off;
  --recursive-ss05: 'ss05' off;
  --recursive-ss06: 'ss06' off;
  --recursive-ss07: 'ss07' off;
  --recursive-ss08: 'ss08' off;
  --recursive-ss09: 'ss09' off;
  --recursive-ss10: 'ss10' off;
  --recursive-ss11: 'ss11' off;
  --recursive-ss12: 'ss12' off;
  --recursive-sups: 'sups' off;
  --recursive-titl: 'titl' off;
  --recursive-zero: 'zero' off;
  --recursive-mono: 0;
  --recursive-casual: 0;
  --recursive-weight: 400;
  --recursive-slant: 0;
  --recursive-italic: 0.5;
}
```

We then create classes for each feature and change the value of the corresponding variable to enable it.

```css
.recursive-aalt {
  --recursive-aalt: 'aalt' on;
}

.recursive-case {
  --recursive-case: 'case' on;
}

.recursive-dlig {
  --recursive-dlig: 'dlig' on;
}

@supports (font-variant-ligatures: discretionary-ligatures) {
  .recursive-dlig {
    --recursive-dlig: '____';
    font-variant-ligatures: discretionary-ligatures;
  }
}

.recursive-dnom {
  --recursive-dnom: 'dnom' on;
}

.recursive-frac {
  --recursive-frac: 'frac' on;
}

@supports (font-variant-numeric: diagonal-fractions) {
  .recursive-frac {
    --recursive-frac: '____';
    font-variant-numeric: diagonal-fractions;
  }
}

.recursive-numr {
  --recursive-numr: 'numr' on;
}

.recursive-ordn {
  --recursive-ordn: 'ordn' on;
}

@supports (font-variant-numeric: ordinal) {
  .recursive-ordn {
    --recursive-ordn: '____';
    font-variant-numeric: ordinal;
  }
}

.recursive-pnum {
  --recursive-pnum: 'pnum' on;
}

@supports (font-variant-numeric: proportional-nums) {
  .recursive-pnum {
    --recursive-pnum: '____';
    font-variant-numeric: proportional-nums;
  }
}

.recursive-sinf {
  --recursive-sinf: 'sinf' on;
}

.recursive-ss01 {
  --recursive-ss01: 'ss01' on;
}

.recursive-ss02 {
  --recursive-ss02: 'ss02' on;
}

.recursive-ss03 {
  --recursive-ss03: 'ss03' on;
}

.recursive-ss04 {
  --recursive-ss04: 'ss04' on;
}

.recursive-ss05 {
  --recursive-ss05: 'ss05' on;
}

.recursive-ss06 {
  --recursive-ss06: 'ss06' on;
}

.recursive-ss07 {
  --recursive-ss07: 'ss07' on;
}

.recursive-ss08 {
  --recursive-ss08: 'ss08' on;
}

.recursive-ss09 {
  --recursive-ss09: 'ss09' on;
}

.recursive-ss10 {
  --recursive-ss10: 'ss10' on;
}

.recursive-ss11 {
  --recursive-ss11: 'ss11' on;
}

.recursive-ss12 {
  --recursive-ss12: 'ss12' on;
}

.recursive-sups {
  --recursive-sups: 'sups' on;
}

@supports (font-variant-position: super) {
  .recursive-sups {
    --recursive-sups: '____';
    font-variant-position: super;
  }
}

.recursive-titl {
  --recursive-titl: 'titl' on;
}

@supports (font-variant-caps: titling-caps) {
  .recursive-titl {
    --recursive-titl: '____';
    font-variant-caps: titling-caps;
  }
}

.recursive-zero {
  --recursive-zero: 'zero' on;
}

@supports (font-variant-numeric: slashed-zero) {
  .recursive-zero {
    --recursive-zero: '____';
    font-variant-numeric: slashed-zero;
  }
}
```

The last step is to set up `font-variation-settings` with the values of all the variables we defined earlier. We have to do it this way because every time we change the settings will reset the values we don't add to their default values.

```css
.recursive-aalt,
.recursive-case,
.recursive-dlig,
.recursive-dnom,
.recursive-frac,
.recursive-numr,
.recursive-ordn,
.recursive-pnum,
.recursive-sinf,
.recursive-ss01,
.recursive-ss02,
.recursive-ss03,
.recursive-ss04,
.recursive-ss05,
.recursive-ss06,
.recursive-ss07,
.recursive-ss08,
.recursive-ss09,
.recursive-ss10,
.recursive-ss11,
.recursive-ss12,
.recursive-sups,
.recursive-titl,
.recursive-zero {
  font-feature-settings: var(--recursive-aalt),
  var(--recursive-case),
  var(--recursive-dlig),
  var(--recursive-dnom),
  var(--recursive-frac),
  var(--recursive-numr),
  var(--recursive-ordn),
  var(--recursive-pnum),
  var(--recursive-sinf),
  var(--recursive-ss01),
  var(--recursive-ss02),
  var(--recursive-ss03),
  var(--recursive-ss04),
  var(--recursive-ss05),
  var(--recursive-ss06),
  var(--recursive-ss07),
  var(--recursive-ss08),
  var(--recursive-ss09),
  var(--recursive-ss10),
  var(--recursive-ss11),
  var(--recursive-ss12),
  var(--recursive-sups),
  var(--recursive-titl),
  var(--recursive-zero);
  }
```

The last bit of typographical work we need to do is assign Recursive and its font stack and then add the values for all the variables that we've defined.

We do it again here to make sure that all the changes are taken into account in our last definition of `font-variation-settings`. In an ideal world all browsers would support `font-variant-*` equally, but they don't so we need to do this workaround.

```css
body {
  font-family: 'Recursive VF',
                Verdana,
                sans-serif;
  font-weight: var(--recursive-weight);
  font-variation-settings: var(--recursive-aalt),
  var(--recursive-case),
  var(--recursive-dlig),
  var(--recursive-dnom),
  var(--recursive-frac),
  var(--recursive-numr),
  var(--recursive-ordn),
  var(--recursive-pnum),
  var(--recursive-sinf),
  var(--recursive-ss01),
  var(--recursive-ss02),
  var(--recursive-ss03),
  var(--recursive-ss04),
  var(--recursive-ss05),
  var(--recursive-ss06),
  var(--recursive-ss07),
  var(--recursive-ss08),
  var(--recursive-ss09),
  var(--recursive-ss10),
  var(--recursive-ss11),
  var(--recursive-ss12),
  var(--recursive-sups),
  var(--recursive-titl),
  var(--recursive-zero),
  "MONO" var(--recursive-mono),
  "CASL" var(--recursive-casual),
  "slnt" var(--recursive-slant),
  "ital" var(--recursive-italic);
}
```

### Finding a good fallback

A problem that I've found when working with variable fonts is how to find a good fallback font that will work with all the variations the master font makes available.

For the time being, I've settled on [Verdana](https://docs.microsoft.com/en-us/typography/font-list/verdana) which offers the least shift on sizes with the sans serif end of Recursive.
