Yoolk Image Crop
==================

# See example
[Working example on JSBin](http://jsbin.com/fovovu/1/edit?javascript,output)

AngularJS Directive which will allow you to crop an image using [Jcrop](https://github.com/tapmodo/Jcrop).

# Features

* Very similar to Google plus cover photo funtionality

# Usage

1. get [Jcrop](https://github.com/tapmodo/Jcrop) and include into your project
2. Add the dependency : `angular.module('myApp',['YoolkImageCrop'])`
3. Initiatlise the directive [see standalone JSBin](http://jsbin.com/fovovu/1/edit?javascript,output) for example code.

## Parameters

* width (string) - the width of the cropper
* height (string) - the height of the cropper
* shape (string) - the cropping guideline shape (circle/square)
* result (bound string) - the variable which will have the resulting data uri bound to it
* step (bound integer) - the variable which dictates which step the user will see (used for resetting purposes)

### Example markup
```html
<yoolk-image-crop
  data-min-width= '480'
  data-min-height= '320'
  boxWidth= '800'
  boxHeight= '600'
  data-image-src="imageSrc"
  data-result='imageCropResult'
></yoolk-image-crop>
```
Note only boxWith and boxHeight can be blank.