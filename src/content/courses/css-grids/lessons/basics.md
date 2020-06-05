---
id: 'basics'
title: 'Basics'
author: '@rubenofen'
date: '2020'
templateKey: 'lesson-page'
type: 'lesson'
---

## Basics

As of March 2017, most browsers shipped native, unprefixed support for CSS Grid: Chrome (including on Android), Firefox, Safari (including on iOS), and Opera. Internet Explorer 10 and 11 on the other hand support it, but it’s an old implementation with an outdated syntax. The time to build with grid is now!

To get started you have to define a container element as a grid with display: grid, set the column and row sizes with grid-template-columns and grid-template-rows, and then place its child elements into the grid with grid-column and grid-row. Similarly to flexbox, the source order of the grid items doesn’t matter. Your CSS can place them in any order, which makes it super easy to rearrange your grid with media queries. Imagine defining the layout of your entire page, and then completely rearranging it to accommodate a different screen width all with only a couple lines of CSS. Grid is one of the most powerful CSS modules ever introduced.

This browser support data is from Caniuse, which has more detail. A number indicates that browser supports the feature at that version and up.

Desktop
Chrome Firefox IE Edge Safari
57 52 11\* 16 10.1
Mobile / Tablet
Android Chrome Android Firefox Android iOS Safari
81 68 81 10.3
