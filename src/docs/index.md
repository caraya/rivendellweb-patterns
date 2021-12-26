---
title: Rivendellweb Pattern Library
---

These are the design patterns and design ideas for my projects under the Rivendellweb umbrella. It is also a starting point for research for my own projects.

## Color Palettes & Design Tokens

## The new defaults

I took the color palette from [The New Defaults](http://dudleystorey.github.io/thenewdefaults/) by [Dudley Storey](https://twitter.com/dudleystorey) and converted them to [CSS Custom Properties](CSS Custom Properties for Cascading Variables Module Level 1) so I can play with them easier in code accross the system.

## Mopar Colors

The second set of colors, the one I labeled Funky Colors, are my interpretation of the colors used in Mopar cars in the late 1960s and early 1970s... nothing screamed out loud like cars painted in colors like Plum Crazy Purple or Top Banana :).

## Lightening and Darkening colors

The last two blocks of colors are experimental. They use the [color-mix()](https://drafts.csswg.org/css-color-5/#color-mix) function, part of the CSS Color Module level 5, to lighten and darken the corresponding colors. This will only work on Safari TP 122 and Firefox Nightly right now.

## Variable Fonts and Typography

The primary font used in the site is [Recursive](https://recursive.design), a [variable font](https://web.dev/variable-fonts/).

Recursive provides a lot of functionality in the available axes:

<dl>
<dt><strong>Weight</strong></dt>
<dd>Recursive comes in a wide range of weights, from Light (<code>300</code>) to a super-heavy ExtraBlack (<code>1000</code>). You can choose from its seven predefined weights, or set a custom value through its *Weight* (<code>wght</code>) axis. And because Recursive maintains consistent letterforms along the entire *Weight* axis, it allows for smooth animations between any of its different weights.</dd>

<dt><strong>Slant</strong>and <strong>Cursive</strong></dt>
<dd>In Recursive, slant and cursive letterforms can be controlled separately. The *Slant* axis (<code>slnt</code>) defines the angle of the letters, while the *Cursive* axis (<code>CRSV</code>) lets you tweak how cursive letterforms are substituted in along `slnt`.
<dd>Recursive’s cursive letterforms (<code>CRSV 1</code>) replace familiar “roman” letterforms with cursive alternates like the single-story “a” and “g”. By default, Recursive will automatically apply these cursive alternates when setting the <em>Slant</em> axis (<code>slnt</code>) beyond <code>-14</code>. This allows smooth, animated transitions from normal to oblique type up to 13.99° of slope, but also a “true italic” style with cursive letterforms at 14°. It is also possible to use sloped romans (<code>slnt -15, CRSV 0</code>), upright italics (<code>slnt 0, CRSV 1</code>), or set custom values on both axes for more options to play with.

<dt><strong>Casual</strong></dt>
<dd><em>Linear</em> (<code>CASL 0</code>) styles have subtly-flattened edges and simple, open forms. This optimizes readability and enables enhanced focus in dense information, such as long-form text and complex code.
<dd>*Casual* (<code>CASL 1</code>) echoes the soft & curvy brush strokes of casual signpainting, but simplifies these forms for a striking and inviting tone. This makes it ideal for web headlines, code snippets, and command line interfaces.

<dt><strong>Sans</strong> and <strong>Mono</strong></dt>
<dd>The typeface comes in two practical and highly readable subfamilies, Sans and Mono. Thanks to its *Monospace* axis (<code>MONO</code>),both of these subfamilies can be used in a single font file. You can even select custom instances that are semi-proportional or semi-monospaced.
<dd><em>Recursive Sans</em> is made for text & user interface design. While its proportional characters deliver comfortable reading at text sizes, its heaviest weights are perfect to create punchy, tightly-spaced headlines.
<dd><em>Recursive Mono</em> is made for code. Its characters share the same width for clear legibility and perfect alignment. This is particularly helpful for use in programming and data-heavy design tasks, but also allows for creative possibilities in display typography.
</dl>

## Grid research

I'm working on different Grid systems and models. The ideaa is that once we have the grids set up, we can create different layouts and styles for different designs and devices.

The current grids versions are:

* 4 columns
* 6 columns
* 8 columns
* 12 columns
* 15 columns

All these columns use the `fr` (flexible ratio) unit to create equal-width columns. This is not always what we want but it is a good starting point.

## Compound grids

* 2x3 Compound grid (2 + 1 + 1 + 2)
* 3x4 Compound grid (3 + 1 + 2 + 2 + 1 + 3)
* 4x6 Compound grid (2 + 1 + 1 + 2 + 2 + 1 + 1 + 2)

Compound grids make it easier to layout content in a grid. Because not all cells on the grid are equally sized we can play with positioning content in the bigger cells and leaving the smaller ones empty or viceversa depending on the design.

## Experiments

* 6 columns equivalent with a larger center column (1 + 4 + 1). This column positions content in a grid item

For more information about compound grids see [Inspired Design Decisions: Pressing Matters](https://www.smashingmagazine.com/2019/07/inspired-design-decisions-pressing-matters/) by [Andrew Clarke](https://www.smashingmagazine.com/author/andy-clarke/)

To create your own compound grid, check Michelle Barker's [Compoung Grid Generator](https://codepen.io/michellebarker/full/zYOMYWv)

A follow up is the positioning items in the grid. For an idea of how to do it, see this [Codepen](https://codepen.io/caraya/pen/poWdRwP)

## Status

Right now I'm working with the following status labels and definitions:

* **Idea**: Somethign I'm thinking about
* **draft**: First implementation
* **review**: Ready for review
* **done**: I'm done with this.
