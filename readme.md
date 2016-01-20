## Postcss boilerplate

> v.0.0.6

### What Is It?

Stylus Postcss project boilerplate following the ITCSS (Inverted Triangle CSS) methodology. If you're interested in finding out more about ITCSS you can [watch this talk by Harry Roberts](http://youtu.be/1OKZOV-iLj4).

For each new project I set up I keep finding myself creating the same directory and `@import` file structure. To speed things up I've generated this repo as a quick and easy starting point.

### Plugins

* [Axis](http://axis.netlify.com/)
* [Kouto Swiss](http://kouto-swiss.io/)
* [Lost Grid](http://corysimmons.github.io/lost/)

### Libreries

* [Normalize](https://necolas.github.io/normalize.css/)
* [Marx](http://matthewblode.com/marx/)
* [Basscss](http://www.basscss.com/docs/)

### Features

* Architecture:
 [ITCSS](http://csswizardry.net/talks/2014/11/itcss-dafed.pdf) is a sane, scalable, managed architecture for CSS.

* Naming convention:
 [BEMIT](http://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/)  is an approach to front-end development designed with flexibility and ease of modification in mind.

### Directory structure

1. `Settings`
    * Globally-available settings.
    * Config switches.
    * Brand colours, etc.
2. `Tools`
    * Globally-available tools.
    * Public mixins.
    * Helper functions.
3. `Generic`
    * Ground zero styles.
    * Low-specificity, far-reaching.
    * Resets, Normalize.css, etc.
4. `Base`
    * Unclassed HTML elements.
    * H1–H6, basic links, lists, etc.
    * Last layer we see type selectors (e.g. a {},  blockquote {}).
5. `Objects`
    * OOCSS.
    * Design patterns.
    * No cosmetics.
    * Begin using classes exclusively.
    * Agnostically named (e.g. .o-list {}).
6. `Components`
    * Designed pieces of UI.
    * Still only using classes.
    * More explicitly named (e.g. .c-products-list {}).
7. `Trumps`
    * Overrides, helpers, utilities.
    * Only affect one piece of the DOM at a time.
    * Usually carry !important.

## Changelog

### 0.0.6

  * Add Marx css reset librerie
  * Update Normalize
  * Comment base files
