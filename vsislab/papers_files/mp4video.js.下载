//正文中输出mp4播放代码 
//浏览器支持flash时，使用flowplayer播放器，否则支持html5时使用html5的video标签播放
function showVsbVideo(vurl,vheight,vwidth,align,style,vautoplay,mid)
{
	if(vurl=="")
	{
	    return;   
	}
	var outputHTML="";
    if (hasPlayHtml5Vedio())
    {
        outputHTML = outPutHTML5Video(vurl, vheight, vwidth, vautoplay, align, style, mid);
    } else {
        outputHTML = outPutFlashVideo(vurl, vheight, vwidth, vautoplay, align, style, mid);
    }
	document.write(outputHTML);      
}

function hasPlayHtml5Vedio()
{
	var a=document.createElement("video"),	c=!!a.canPlayType;
	if(c)
	{
		c=new Boolean(c),
		c.ogg=a.canPlayType('video/ogg; codecs="theora"');
		var d='video/mp4; codecs="avc1.42E01E';
		c.h264=a.canPlayType(d+'"')||a.canPlayType(d+', mp4a.40.2"'),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"')
	}
	return c;			
}
function outPutFlashVideo(videoUrl,wHeight,wWidth,bautoPlay,align,style,mid)
{
		if(!mid||mid=="")
		{
		    mid="id=_vsb_player";
		}
        var flashUrl = "";
		var hasLoadPlayer = false;
		try{
		    //判断是否引用了flowplayer 的相关JS   内容组件是不引用的
            var tmpplayer = flowplayer;
            hasLoadPlayer = true;
        }catch (e){
        }

		if(hasLoadPlayer){
            var realmid = mid.replace("id=","").replace(/\\/g,"").replace(/"/g,"");
            var realwidth = wWidth.replace("width=","").replace(/\\/g,"").replace(/"/g,"");
            var realheight = wHeight.replace("height=","").replace(/\\/g,"").replace(/"/g,"");
            flashUrl = '<a href="'+videoUrl+'" style="display:block;width:'+realwidth+'px;height:'+realheight+'px;" '+mid+'></a><script>flowplayer(\"'+realmid+'\", \"/system/resource/swf/flowplayer.commercial.swf\", {clip:{autoPlay:"+bautoPlay+",autoBuffering:true}});</script>';
        }else{
            flashUrl='<object '+mid+' align="'+align+'" style="'+style+'" type="application/x-shockwave-flash" data="/system/resource/swf/flowplayer.commercial.swf"  '+wWidth+'  '+wHeight+'>';
            var configstr='&quot;playlist&quot;:[{&quot;url&quot;:&quot;'+videoUrl+'&quot;,&quot;scaling&quot;:&quot;fit&quot;,&quot;autoPlay&quot;:'+bautoPlay+',&quot;autoBuffering&quot;:&quot;false&quot;}]';
            flashUrl=flashUrl+'<param name="flashvars" value="config={'+configstr+'}">';
            flashUrl=flashUrl+'<param name="allowfullscreen" value="true"><param name="allowscriptaccess" value="sameDomain"><param name="quality" value="high"><param name="cachebusting" value="false"><param name="bgcolor" value="#000000"><param name="src" value="/system/resource/swf/flowplayer.commercial.swf">';
            flashUrl=flashUrl+'</object>';
        }
		return flashUrl;
}

function outPutHTML5Video(videoUrl,wHeight,wWidth,bautoPlay,align,style,mid)
{
		if(!mid||mid=="")
		{
		    mid="id=_vsb_player";
		}
		var res='<video controlsList="nodownload" controls '+mid+' style="background-color:#474747;'+style+'" align="'+align+'" '+wWidth+'  '+wHeight;
		if(bautoPlay && bautoPlay=="true")
		{
		    res+=' autoplay="autoplay" ';
		}
		res +='><source src="'+videoUrl+'" type="video/mp4" /></video> ';
		return  res;
}	

function outVideoForMobile(vurl,vheight,vwidth,vautoplay)
{
        //手机显示时，视频宽度为设备宽度
        if(hasPlayHtml5Vedio())
        {
		    var res='<video controls="controls" controlsList="nodownload" width="'+document.body.clientWidth+'"';
    		if(vautoplay&&vautoplay=="true")
    		{
    		    res+=' autoplay="autoplay" ';
    		}
    		res +='><source src="'+vurl+'" type="video/mp4" /></video> ';
		
    		document.write(res);    
		}    
		else
		    alert("不支持");        
}
//文章内容组件其实是不需要的  因为newscontent.js里面已经包含了这个方法，加到这里只要是为了简介组件使用
//正文中输出mp3播放代码
function showVsbAudio(aurl,vheight,vwidth,align,styles,vautoplay)
{
    if(aurl=="")
    {
        return;
    }
    var playersrc = "/system/resource/images/ueditor/musicFlash/player_mp3_maxi.swf";
    var flashvars = "mp3="+aurl+"&showstop=1&showvolume=1&bgcolor1=eeeeee&bgcolor2=a0a0a0";
    var autoplayStr = "";
    if(vautoplay=="true")
    {
        autoplayStr = "autoplay = 'true'";
        flashvars +="&autoplay=1";
    }
    var outputHTML="";
    outputHTML +='<audio src="'+aurl+'" width="'+vwidth+'" height="'+vheight+'"  '+autoplayStr+' align="'+align+'" style="'+styles+'"  controls="controls" loop="true"><embed align="'+align+'" style="'+styles+'" width="'+vwidth+'" height="'+vheight+'" src="'+playersrc+'" flashvars="'+flashvars+'" /></audio>';
    document.write(outputHTML);
}


/**
 * 正文中显示PDF
 * @param path
 * @param width
 * @param heigth
 * @param imagenum
 * @param style
 * @param imagedata
 */
function showVsbpdfIframe(path,width,heigth,imagenum,style,imagedata){
    if(path=="")
    {
        return;
    }
    var outputHTML="";

    //判断浏览器版本
    if(isSupportPddfjs()){
        //pdfjs
        outputHTML = "<iframe src=\"/system/resource/pdfjs/viewer.html?file="+encodeURIComponent(path)+"\" width=\""+width+"\" height=\""+heigth+"\" style='"+style+"'></iframe>";
    }else{
        //图片
        if(imagedata && imagedata.length >0){
            var imageStr = "";
            imageStr = "<div style='"+style+";overflow-y: auto;overflow-x:hidden;text-indent: 0;width: "+(width.indexOf("%") != -1?width:width+"px")+";height: "+(heigth.indexOf("%") != -1?heigth:heigth+"px")+"; '>";
            for(var i=0;i<imagedata.length ;i++){
                var tmpimgpath = imagedata[i];
                imageStr += "<img src='"+tmpimgpath+"' width='100%' class='img_vsb_content'>";
                imageStr += "<div style=\"height:32px;line-height:32px;font-size:14px; width:100%;background-color:#3D3D3D;text-align:center;color:#ececec;\">第 "+(i+1)+" 页</div>";
            }
            imageStr += "</div>";
            outputHTML = imageStr;
        }else{
            outputHTML = "<iframe src=\""+path+"\" width=\""+width+"\" height=\""+heigth+"\" style='"+style+"'></iframe>";
        }
    }
    document.write(outputHTML);
}

/**
 * 判断浏览器是否支持pdf.jsz`
 * @returns {boolean}
 */
function isSupportPddfjs(){
    var agent = navigator.userAgent.toLowerCase();
    var isIe = /(msie\s|trident.*rv:)([\w.]+)/.test(agent);
    var version = 0;
    if(isIe){
        var v1 =  agent.match(/(?:msie\s([\w.]+))/);
        var v2 = agent.match(/(?:trident.*rv:([\w.]+))/);
        if(v1 && v2 && v1[1] && v2[1]){
            version = Math.max(v1[1]*1,v2[1]*1);
        }else if(v1 && v1[1]){
            version = v1[1]*1;
        }else if(v2 && v2[1]){
            version = v2[1]*1;
        }else{
            version = 0;
        }
        if(version < 11){
            return false;
        }
    }

    var safari;
    if(/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(agent) && !/chrome/i.test(agent)){
        safari = + (RegExp['\x241'] || RegExp['\x242']);
    }

    if(safari && safari < 9){
        return false;
    }

    var mobile = agent.match(/applewebkit.*mobile.*/);
    if(mobile){
        return false;
    }

    return true;
}