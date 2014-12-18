Yoolk Image Crop
==================

### See example
[Working example on CODEPEN](http://codepen.io/simleap/pen/gbMrxd)

AngularJS Directive which will allow you to crop an image using [Jcrop](https://github.com/tapmodo/Jcrop).

### Features

* Very similar to Google plus cover photo funtionality

### Usage

1. get [Jcrop](https://github.com/tapmodo/Jcrop) and include into your project
2. Add the dependency : `angular.module('myApp',['YoolkImageCrop'])`
3. Initiatlise the directive [see standalone CODEPEN](http://codepen.io/simleap/pen/gbMrxd) for example code.

### Parameters

* x (integer) - start X
* y (integer) - start Y
* x2 (integer) - end X
* y2 (integer) - end Y
* minWidth (integer) - the width of the cropper
* minHeight (integer) - the height of the cropper
* boxWidth (integer) - the width of image box
* boxHeight (integer) - the height of image box
* imageSrc (string) - can use with data uri or image url
* result (object {}) - the variable which will have the resulting data uri bound to it

### Example markup
```html
<yoolk-image-crop
  data-x='200'
  data-y='200'
  data-x2='400'
  data-y2='400'
  data-min-width= '200'
  data-min-height= '200'
  boxWidth= '800'
  boxHeight= '600'
  data-image-src="imageSrc"
  data-result='imageCropResult'
></yoolk-image-crop>
```
Note only boxWidth and boxHeight can be blank.