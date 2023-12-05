/**
 *
 * Pinterest-like script - a series of tutorials
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2012, Script Tutorials
 * http://www.script-tutorials.com/
 */

var files = [
    // '0.bmp',
    '000718.jpg',
    '000822.jpg',
    '001025.jpg',
    '001031.png',
    '001101.gif',
    '001110.jpg',
    '001113.jpg',
    '001116.gif',
    '001128.jpg',
    '001207.jpg',
    // '001219.jpg',
    '001219.png',
    // '001222.jpg',
    '001222.png',
    '001224.jpg',
    // '01.jpg',
    '010102.jpg',
    '010123.jpg',
    // '010128.jpg',
    // '0102.jpg',
    // '0102_s.jpg',
    '010301.jpg',
    '010307.jpg',
    '0104.jpg',
    '010529.jpg',
    '010909.jpg',
    // '0122.bmp',
    // '0123.jpg',
    // '02.jpg',
    // '0225.jpg',
    // '03.jpg',
    // '0301.jpg',
    // '0307.jpg',
    '0325.gif',
    '04.gif',
    // '04.jpg',
    // '05.jpg',
    // '052.JPG',
    // '06.jpg',
    '062.JPG',
    // '07.jpg',
    // '08.jpg',
    // '09.gif',
    '09.jpg',
    // '1.BMP',
    '1.gif',
    '1111.jpg',
    // '20010102.jpg',
    '20010102.png',
    // '20010123.jpg',
    // '20010301.jpg',
    // '20010425.jpg',
    '200104251.jpg',
    // '20010425_copy.jpg',
    '20010426.jpg',
    // '200104261.jpg',
    // '20010426_copy.jpg',
    '20020606.jpg',
    '20020916.jpg',
    // '20020916.psd',
    '20021018.jpg',
    // '20021018.psd',
    '20021214.gif',
    // '20021215.jpg',
    '20021215.png',
    '20030104.jpg',
    // '20030105.gif',
    // '20030105.jpg',
    '20030105.png',
    // '20030106.jpg',
    '20030107.jpg',
    // '20030118.jpg',
    '20030118.png',
    // '20030119.jpg',
    // '20030119_01.jpg',
    '20030119_01.png',
    // '20030119_02.jpg',
    '20030119_02.png',
    // '20030119_03.jpg',
    '20030119_03.png',
    // '20030124.jpg',
    '20030124.png',
    '20030201.jpg',
    '20031012.jpg',
    '20031013.jpg',
    '20031014.jpg',
    // '200310140.jpg',
    '20031017.jpg',
    // '20031217.jpg',
    '20031217.png',
    '20040605.jpg',
    // '2876.jpg',
    // '2k1031.jpg',
    // '2k1101.gif',
    '2k1106.png',
    '2k1107.png',
    // '2k1110.jpg',
    // '2k1113.gif',
    '2k1115.png',
    // '2k1116.gif',
    '2k1117.gif',
    '2k1118.jpg',
    // '2k1123.jpg',
    '2k1124.png',
    // 'a.gif',
    'box1.gif',
    // 'china.bmp',
    'contrabass.jpg',
    // 'crazy.bmp',
    'crazy.gif',
    // 'dark.bmp',
    'door_c.png',
    'du.png',
    // 'hat.png',
    'left.png',
    'noname.jpg',
    // 'nood.bmp',
    // 'pic1.jpg',
    // 'pic1_full.jpg',
    // 'pic2.jpg',
    // 'pic2_full.jpg',
    // 'pic3.jpg',
    // 'pic3_full.jpg',
    // 'pic4.jpg',
    // 'pic4_full.jpg',
    'pop.jpg',
    'redtree.png',
    'relieve.png',
    // 'tree.bmp',
];

console.log("script.js");
console.log(files.length);

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// shuffle(numbers);
// var numbers2 = numbers.splice(5);
// console.log(numbers);
// console.log(numbers2);

shuffle(files);
// console.log(files);
var files2 = files.splice(files.length / 4);
console.log("files:");
console.log(files);
console.log("files2:");
console.log(files2);

// After Image Load, Apply Event
function imgResizeEvnet(e){
    // Get Image Width
    var imgWidth = $(e).prop('naturalWidth');
    
    // Get Image Height
    var imgHeight = $(e).prop('naturalHeight');

    // $(e).css({
    //     width: '100%',
    //     height: '100vh',
    //     position: absolute
    // })
    if (imgWidth < imgHeight) {
    
        // width auto, height 100%, max-height 100%
        $(e).css({
            width: '100%',
            // height: '100%',
            // maxWidth: 'none'
        })
        
    } else {   
    
        // width auto, height 100%, max-width 100%
        $(e).css({
            width: '100%',
            // height: 'auto',
            // width: '200%',
            // maxWidth: '200%'
            // width: '200px',
            // maxWidth: '200px'
        })
    }
}

// async function loadImage(imageUrl) {
//     let img;
//     const loadImagePromise = new Promise(resolve => {
//         img = new Image();
//         img.onload = resolve;
//         img.src = imageUrl;
//     });
 
//     await loadImagePromise;
//     console.log("Image loaded - YAY!");
//     return img;
// }

// function loadImages(images) {
//     return {
//         list: images,
//         loaded: {},
//         failed: {},
//         _load(src, name){
//             return new Promise((resolve)=>{
//                 let image = new Image()
//                 image.onload = e => resolve({ name, src, image, error: false })
//                 image.onerror = e => resolve({ name, src, image: null, error: true })
//                 image.src = src
//             })
//         }
//     }
// }

// let myLoader = loadImages("some image list")
// // let image = await myLoader._load("https://someUrl.com/img.png", "imageName")

// $(document).ready(function() {
// // $(window).load(function() {
//     console.log("world")
//     // var toAdd = document.createDocumentFragment();
//     // var container = document.getElementById('main_container');

//     // for (i = 0; i < files.length; ++i) {
//     //     // console.log(files[i])
//     //     var newPin = document.createElement('div');
//     //     newPin.className = "pin";
//     //     var newHolder = document.createElement('div');
//     //     newHolder.className = "holder";
//     //     var newAction = document.createElement('div');
//     //     newAction.className = "actions";
//     //     var newLink = document.createElement('a');
//     //     newLink.className = "image ajax";
//     //     var newImage = new Image();
//     //     newImage.src = "photos/" + files[i];
//     //     newImage.onload = function() {
//     //         console.log(this.width + 'x' + this.height);
//     //     }
          
//     //     newLink.appendChild(newImage);
//     //     newHolder.appendChild(newAction);
//     //     newHolder.appendChild(newLink);
//     //     newPin.appendChild(newHolder);

//     //     toAdd.appendChild(newPin);
//     // };
//     // document.getElementById('main_container').appendChild(toAdd);
//     // $(document).ready(function(){
//     //     for(i = 0; i < 35; i++) {
//     //       $('body').append('<div id="div'+ i +'" />');
//     //     }
//     //   });

//     // console.log(figure);
//     // $('#main_container').append(figure);
//     // var container = document.querySelector('.gallery');
//     // console.log(container);

//     // // init Masonry
//     // var $grid = $('.grid').masonry({
//     //     itemSelector: '.grid-item',
//     //     percentPosition: true,
//     //     columnWidth: '.grid-sizer'
//     // });

//     // console.log(".grid.masonry");
//     // // layout Masonry after each image loads
//     // $grid.imagesLoaded().progress( function() {
//     //     console.log(".grid.imagesLoaded");
//     //     $grid.masonry();
//     // });

//     var container = document.getElementById('grid');

//     // for (var i = 0; i < files.length; i++) {
//     for (var i = 0; i < 3; i++) {
//         // let div =
//         // `<div class="pin">
//         //     <div class="holder">
//         //         <div class="actions" pin_id="2">
//         //             <a href="#" class="button">Repin</a>
//         //             <a href="#" class="button">Like</a>
//         //             <a href="#" class="button comment_tr">Comment</a>
//         //         </div>
//         //         <a class="image ajax" href="#" title="Photo number 2">
//         //             <img alt="Photo number 2" src="photos/` + files[i] + `">
//         //         </a>
//         //     </div>
//         //     <p class="desc">` + files[i] + `</p>
//         //     <p class="info">
//         //         <span>2 likes</span>
//         //         <span>2 repins</span>
//         //     </p>
//         //     <form class="comment" method="post" action="" style="display: none">
//         //         <input type="hidden" name="id" value="2" />
//         //         <textarea placeholder="Add a comment..." maxlength="1000"></textarea>
//         //         <button type="button" class="button">Comment</button>
//         //     </form>
//         // </div>`;

//         // var figure_html = `<figure class="grid-item">
//         //     <figcaption>
//         //         <img src="photos/` + files[i] + `" >
//         //     </figcaption>
//         // </figure>`;

//         var grid_item_html = `<div class="grid-item"><img class="grid-item-img" onload="javascript: alert('success')" onerror="javascript: alert('failure')" src="photos/` + files[i] + `" ></div>`;

//         // var grid_item = document.createElement("div");
//         // grid_item.classList.add('grid-item');
//         // grid_item.classList.add('grid-sizer');
//         // var figcaption = document.createElement("figcaption");
//         // var img = document.createElement("img");
//         // var img = new Image();
//         // // img.onload = function() {
//         // //     console.log(this.width + 'x' + this.height);
//         // // }
//         // img.classList.add("grid-item-img");
//         // img.onload = function() {
//         //     console.log("onload: " + this.width + 'x' + this.height);
//         // }
//         // img.onerror = function() {
//         //     console.log("onerror: " + this.width + 'x' + this.height);
//         // }
//         // // img.src = 'http://www.google.com/intl/en_ALL/images/logo.gif';
//         // img.src = "http://beloved.woobi.co.kr/photos/" + files[i];
//         // console.log(img.naturalWidth);
//         // console.log(img.width);
//         // var isLoadedSuccessfully = img.complete && img.naturalWidth !== 0;
//         // alert(isLoadedSuccessfully);

//         $('#grid').append(grid_item_html);
//         // container.append(grid_item_html);

//         // grid_item.append(img);

//         // console.log(grid_item);
//         // container.append(grid_item);
//         // container.append(img);
//         // $('#main_container').append(div);

//         // console.log(files[i]);
//         // console.log(grid_item);
//         // console.log(img);
        
//         // $('.main_container').append('<div id="div'+ i +'" />');
//         // console.log(div);
//         // $('#main_container').append(div);
//         // console.log(figure);
//         // $('#grid').append(figure_html);
//         // $('#grid').append(grid_item_html);
//         // container.append(figure_html);
//     };

//     // var container = document.querySelector('.grid');
//     console.log(container);

//     // $(".grid-item-img").each(function() {
//     //     var width = $(this).prop("naturalWidth");
//     //     var height = $(this).prop("naturalHeight");
//     //     console.log("each:");
//     //     console.log(width);
//     //     console.log(height);
//     // });
//     // var $boxes = $('.box');
//     // $boxes.hide();
  
//     // var $container = $('#gallery');
//     // $container.imagesLoaded(function() {
//     //     $container.masonry({
//     //         itemSelector : '.gallery-item',
//     //     });
//     // });
//     // var $container = $('#gallery');
//     // $container.imagesLoaded( function() {
//     // //   $boxes.fadeIn();
//     //   $container.masonry({
//     //       itemSelector : '.gallery-item',
//     //     //   columnwidth: 300,
//     //     //   gutter: 20,
//     //     //   isFitWidth: true,
//     //     //   isAnimated: !Modernizr.csstransitions
//     //   });    
//     // });
//     // var $container2 = $('.gallery');
//     // $container2.imagesLoaded(function() {
//     //     $container2.masonry({
//     //         itemSelector : '.gallery-item'
//     //     });
//     // });

//     // var $container = $('#main_container');
//     // $container.imagesLoaded(function() {
//         // $container.masonry({
//         //     itemSelector : '.pin',
//         //     isFitWidth: false,
//         // }).masonry('reload');
//         // }).masonry('reload');
//         // });
//     // }

//     // var $grid = $('.grid').masonry({
//     //     // options...
//     //     itemSelector: '.grid-item',
//     //     horizontalOrder: true,
//     //     fitWidth: true,
//     // });
//     // console.log(".grid.masonry");
//     // // layout Masonry after each image loads
//     // $grid.imagesLoaded().progress( function() {
//     //     console.log(".grid.imagesLoaded");
//     //     $grid.masonry('layout');
//     // });


//     // layout Masonry after each image loads
//     // $grid.imagesLoaded().progress( function() {
//     //     console.log(".grid.imagesLoaded.progress");
//     //     $grid.masonry('layout');
//     // });
//     // console.log(".grid.imagesLoaded");

//     // var $grid = $('.grid').imagesLoaded( function() {
//     // // init Masonry after all images have loaded
//     //     console.log(".grid.imagesLoaded")
//     //     $grid.masonry({
//     //         // options...
//     //         itemSelector: '.grid-item',
//     //         columnWidth: 200,
//     //     });
//     // });
//     // $('.grid').masonry({
//     //     // options
//     //     itemSelector: '.grid-item',
//     //     // columnWidth: 200,
//     //     columnWidth: '.grid-sizer',
//     //     percentPosition: true
//     // });

//     // var elem = document.querySelector('.galery');
//     // var msnry = new Masonry( elem, {
//     // // options
//     //     itemSelector: '.galery-item',
//     //     columnWidth: 200
//     // });
//     // masonry initialization
//     // $('#gallery').masonry({
//     //     // options
//     //     // itemSelector : '.pin',
//     //     itemSelector : '.galery-item',
//     //     columnWidth : 250,
//     //     // gutterWidth: 0,
//     //     // isAnimated: true,
//     //     // isFitWidth: false,
//     //     // columnWidth: 200,
//     //     // gutter: 10,
//     //     // horizontalOrder: true,
//     //     // originLeft: true,
//     //     // originTop: true,
//     // });
//     // }).masonry('reload');

//     // $('#gallery').imagesLoaded()
//     // .always( function( instance ) {
//     //   console.log('all images loaded');
//     // })
//     // .done( function( instance ) {
//     //   console.log('all images successfully loaded');
//     // })
//     // .fail( function() {
//     //   console.log('all images loaded, at least one is broken');
//     // })
//     // .progress( function( instance, image ) {
//     //   var result = image.isLoaded ? 'loaded' : 'broken';
//     //   console.log( 'image is ' + result + ' for ' + image.img.src );
//     // });
  
  
//     // // onclick event handler (for comments)
//     // $('.comment_tr').click(function () {
//     //     $(this).toggleClass('disabled');
//     //     $(this).parent().parent().parent().find('form').slideToggle(250, function () {
//     //         $('.main_container').masonry();
//     //     });
//     // }); 

// });

// var image = document.images[0];
// var downloadingImage = new Image();
// downloadingImage.onload = function(){
//     image.src = this.src;   
// };
// downloadingImage.src = "photos/000718.jpg";

function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
}
  
function test(str) {
    // console.log("before: " + str);
    // sleep(3000).then(() => console.log("after:" + str));
    // console.log("before");
    // sleep(3000)
    //   .then(() => console.log("after: " + str))
    //   .then(() => console.log("done! " + str));
}

$(document).ready(function() {
    console.log("ready")
    // alert(files.length);

    // var container = document.getElementById('grid');
    // var container = document.getElementById('grid');
    var container = document.querySelector('.grid');
    // console.log(container);

    // var header = document.createElement("div");
    // var header_image = document.createElement("img");
    // header_image.src = "photos/1.gif";
    // header.appendChild(header_image);
    // container.append(header);

    for (i = 0; i < files.length; ++i) {
    // for (i = 0; i < 30; ++i) {
        // console.log(files[i])
        var grid_item = document.createElement("div");
        grid_item.classList.add('grid-item');
        // grid_item.classList.add('grid-sizer');
        // grid_item.classList.add('grid-item--width2');
        // grid_item.classList.add('grid-item--height2');

        var image = document.createElement("img");
        // img.src = "http://beloved.woobi.co.kr/photos/000718.jpg";
        // img.classList.add('grid-sizer');
        image.src = "photos/" + files[i];
        // img.alt = files[i];
        // img.title = files[i];
        image.setAttribute("alt", files[i]);
        image.setAttribute("title", files[i]);
        image.onload = function() {
            imgResizeEvnet(this);
            // console.log(this.width + 'x' + this.height);
            // // this.width = this.natu;
            // // this.height = "100%";

            // const originalWidth = this.naturalWidth;
            // const originalHeight = this.naturalHeight;
            // const aspectRatio = originalWidth / originalHeight;
            // let newWidth = 200;
            // let newHeight = newWidth / aspectRatio;
            // this.width = newWidth;
            // this.height = newHeight;
            
            // ctx.drawImage(img, 0, 0, newWidth, newHeight);
        }

        var p = document.createElement("p");
        var node = document.createTextNode(files[i]);
        p.appendChild(node);
        // p.style.background = "maroon";
        p.setAttribute("style", "font-family: arial; color: white; background-color: maroon; margin-block-start: 0em; margin-block-end: 0em;");
    
        grid_item.appendChild(p);
        grid_item.appendChild(image);

        var imageLink = document.createElement("a");
        imageLink.setAttribute('href', image.src);
        // imageLink.setAttribute("class", "container")
        imageLink.appendChild(grid_item);

        // container.append(grid_item);
        container.append(imageLink);
        // container.append(img);
        // document.body.appendChild(img);
    }

    // var $grid = $('.grid').masonry({
    //     itemSelector: '.grid-item',
    //     // percentPosition: true,
    //     // columnWidth: 250,
    // });

    // var $grid = $('.grid');
    // $grid.imagesLoaded(function() {
    //     console.log(".grid.imagesLoaded");
    //     $grid.masonry({
    //         itemSelector : '.grid-item',
    //         percentPosition: true,
    //         columnWidth: 250,
    //     });
    // });

    // $grid.imagesLoaded().progress( function() {
    //     console.log(".grid.imagesLoaded.progress");
    //     $grid.masonry('layout');
    // });

    // var $grid = $('.grid').imagesLoaded( function() {
    //     // init Masonry after all images have loaded
    //     $grid.masonry({
    //         // options...
    //         itemSelector : '.grid-item',
    //         gutter: 5,
    //         percentPosition: true,
    //         // columnWidth: '.grid-sizer',
    //         // grid-item-img
    //         // columnWidth: 160,
    //         // gutter: 1,
    //         // percentPosition: false,
    //         // horizontalOrder: true,
    //         // fitWidth: true,
    //     });
    // });

    var $grid = $('.grid').masonry({
        itemSelector : '.grid-item',
        gutter: 5,
        percentPosition: true,
    });
    var progress = 0;
    $grid.imagesLoaded().progress(function() {
        // console.log("masonry.layout");
        progress++;
        // test(progress);
        // console.log("progress:" + progress);
        // console.log("before");
        // setTimeout(() => console.log("after"), 3000);

        $grid.masonry('layout');
    });

    console.log(container);
});
