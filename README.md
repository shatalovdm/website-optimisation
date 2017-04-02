# Website Performance Optimization project

The main goal of this project is to optimize online portfolio for speed and make the pizza restaurant website run 60 fps! 

By optimizing the critical rendering path 'dist/index.html' achieves a PageSpeed score of at least 90 for Mobile and Desktop. For this purpose optimizations such as minification of CSS, JS and HTML and image optimizations were automated using a build tool, in particular Gulp. See `gulpfile.js` for reference.

By optimizing `views/js/main.js` a quite controversial `views/pizza.html` website  renders with a consistent frame-rate at 60fps when scrolling. It was accomplished by reducing the number of calculations and reducing the need to trigger the layout with the CSS `transform` property. Also painting was reduced by forcing objects into its layers with `transform: translateZ(0);`. 



## Getting started

### Installation

1. Clone or download the repository:

```
$ git clone https://github.com/shatalovdm/website-optimisation

``` 

2. Go to the root of the project and install all project's dependencies:

```
$ npm install

```

3. To implement the task runner type:
```
$ gulp

```


