# Grid research

I'm working on different Grid systems and models. The ideaa is that once we have the grids set up, we can create different layouts and styles for different designs and devices.

The current grids versions are:

* 4 columns
* 6 columns
* 8 columns
* 12 columns
* 15 columns

All these columns use the `fr` (flexible ratio) unit to create equal-width columns. We can also use absolute values for the different columns and we can mix and match different units to geet the reults we want.

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
