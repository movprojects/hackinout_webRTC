var io = io();
var picasso = _('picasso');
var ctx     = picasso.getContext('2d');
var peerId ;
navigator.getUserMedia = navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia;


io.on('welcome',function(data){
    console.log(data.data);
    peerId = data.data.split(':')[1];
    io.emit('server',{data:'server:'+peerId});
});

$(document).ready(function(){
    console.log("app ready to use!!");
    if(navigator.getUserMedia){
        navigator.getUserMedia(
            {video:true,audio:true},
            function(stream){ 
                _('myvideo').src = window.URL.createObjectURL(stream);
                _('myvideo').play();
            },
            function(){ console.log("failed!!");}
        );
    }
    else alert("browser not supporting webRTC");
    
    setInterval(function(){
        if(_('myvideo').paused===false) updateCanvas();
    },0);     
});

var counter = 0;
var idata;

function updateCanvas(){
    ctx.drawImage(_('myvideo'),0,0,picasso.width,picasso.height);
    if(counter==0){
      idata = picasso.toDataURL('image/png');
      console.log(idata);
      _('myimage').style.background = 'yellow';    
      _('myimage').src = idata;    
      counter++;
    }
}

function _(el){
    return document.getElementById(el);
}