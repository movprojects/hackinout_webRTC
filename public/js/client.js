var io = io();
var peerId ;
var picasso = _('picasso');
var ctx     = picasso.getContext('2d');

io.on('welcome',function(data){
    console.log(data.data);
    peerId = data.data.split(':')[1];
    io.emit('welcomeack',{ data: 'hello back from client:'+peerId});
});

io.on('irec',function(data){
    blob = data.data;
    var bytes = new Uint8Array(blob.size);
    var image = ctx.createImageData(picasso.width, picasso.height);
    
    for (var i=0; i<image.length; i++) {
        image[i] = bytes[i];
    }
    
    ctx.putImageData(image,0,0);
    console.log(image);
});

$(document).ready(function(){
    console.log("app ready 2 use !!");
});

function _(el){
    return  document.getElementById(el);
}