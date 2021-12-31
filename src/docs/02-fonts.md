# Variable Fonts and Typography

The primary font used in the site is [Recursive](https://recursive.design), a [variable font](https://web.dev/variable-fonts/).

Recursive provides a lot of functionality in the available axes:

## **Weight**

Recursive comes in a wide range of weights, from Light (`300`) to a super-heavy ExtraBlack (`1000`). You can choose from its seven predefined weights, or set a custom value through its *Weight* (`wght`) axis. And because Recursive maintains consistent letterforms along the entire *Weight* axis, it allows for smooth animations between any of its different weights.

## **Slant** and **Cursive**

In Recursive, slant and cursive letterforms can be controlled separately. The *Slant* axis (`slnt`) defines the angle of the letters, while the *Cursive* axis (`CRSV`) lets you tweak how cursive letterforms are substituted in along `slnt`.

Recursive’s cursive letterforms (`CRSV 1`) replace familiar “roman” letterforms with cursive alternates like the single-story “a” and “g”. By default, Recursive will automatically apply these cursive alternates when setting the *Slant* axis (`slnt`) beyond `-14`. This allows smooth, animated transitions from normal to oblique type up to 13.99° of slope, but also a “true italic” style with cursive letterforms at 14°. It is also possible to use sloped romans (`slnt -15, CRSV 0`), upright italics (`slnt 0, CRSV 1`), or set custom values on both axes for more options to play with.

## **Casual**

*Linear* (`CASL 0`) styles have subtly-flattened edges and simple, open forms. This optimizes readability and enables enhanced focus in dense information, such as long-form text and complex code.

*Casual* (`CASL 1`) echoes the soft & curvy brush strokes of casual signpainting, but simplifies these forms for a striking and inviting tone. This makes it ideal for web headlines, code snippets, and command line interfaces.

## **Sans** and **Mono**

The typeface comes in two practical and highly readable subfamilies, Sans and Mono. Thanks to its *Monospace* axis (`MONO`),both of these subfamilies can be used in a single font file. You can even select custom instances that are semi-proportional or semi-monospaced.

*Recursive Sans* is made for text & user interface design. While its proportional characters deliver comfortable reading at text sizes, its heaviest weights are perfect to create punchy, tightly-spaced headlines.

*Recursive Mono* is made for code. Its characters share the same width for clear legibility and perfect alignment. This is particularly helpful for use in programming and data-heavy design tasks, but also allows for creative possibilities in display typography.
