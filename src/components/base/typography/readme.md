# Typographical concepts

The blog uses [Recursive](https://recursive.design/) for the font stack. The idea is that the font will provide all the typograhical needs for the project, from a monospaced font to a sans-serif font and everything in between.

We also ran the font through [Wakamai Fondue](https://wakamaifondue.com) by [Roel Nieskens/PixelAmbacht](https://pixelambacht.nl) to get a list of all the variable font's instances and OpenType features available in the font. Every instance and feature is assigned its own class and they can be combined to achieve the desired effect.

Paragraphs and headings leverage the named instances defined in the font. Rather than set `font-feature-settings` and have to change them for every specialized type of element, I used the classes created by Wakamai Fondue to achieve the same effect
