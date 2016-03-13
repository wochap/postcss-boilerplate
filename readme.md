## Stylus Base

> v.0.1.0

### What Is It?

It is a Stylus Base following the ITCSS (Inverted Triangle CSS) methodology. If you're interested in finding out more about ITCSS you can [watch this talk by Harry Roberts](http://youtu.be/1OKZOV-iLj4).

For each new project I set up I keep finding myself creating the same directory and `@import` file structure. To speed things up I've generated this repo as a quick and easy starting point.

### Plugins

#### Stylus

* [Axis](http://axis.netlify.com/) (optional)
* [Rupture](http://jenius.github.io/rupture/) (optional)
* [Modernizr Stylus](https://www.npmjs.com/package/modernizr-stylus) (optional)

#### PostCSS

* [Lost Grid](http://corysimmons.github.io/lost/) (optional)
* [Position](https://github.com/seaneking/postcss-position) (optional)

### Libraries

* [Normalize](https://necolas.github.io/normalize.css/) (modified)
* [Basscss](http://www.basscss.com/docs/) (modified)

### CSS Methodologies

* Architecture:
 [ITCSS](http://csswizardry.net/talks/2014/11/itcss-dafed.pdf) is a sane, scalable, managed architecture for CSS.

* Naming convention:
 [BEMIT](http://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/)  is an approach to front-end development designed with flexibility and ease of modification in mind.

* CSS Namespacing:
 [Transparent UI code](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/)

### Directory Structure

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

## Running Tests

*** Note: Note: stylus-test-runner has outdated stylus dependencie ***

All bourbon mixins have test coverage to ensure everything works as expected. To run the tests, clone this repo and run:

```sh
$ npm test
```

## [Docs](https://github.com/wochap/stylus-base/blob/master/docs.md)

## Changelog

### 0.1.0

  * Update utilities Basscss
  * Update base styles
  * Update Tools/mixins folder structure
  * Update repo folder structure
  * Add bourbon mixins tests
  * Replace custom normalize by original normalize

### 0.0.9

  * Rename partials files (index to main)
  * Double quotes to single

### 0.0.8

  * Move utilities to Trumps folder
  * Update Settings variables
  * Fix contains-falsy function

### 0.0.7

  * Remove Marx css reset librerie
  * Add custom styles to Normalize
  * Update base styles, inspired in Marx styles
  * Fix directional mixin (can't use null)
  * Add wrap mixin and utility
  * Update variables colors
  * Add more headings levels

### 0.0.6

  * Add Marx css reset librerie
  * Update Normalize
  * Comment base files

## Todo

  * Add mixins and functions docs  
  * Add mixins and functions tests
