//创建XMLHTTP对象

function createXMLHttpRequest()
{
    var xmlHttp = null;
    try{
	   		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	   }
	   catch(e)
	   {
		   try{
		          xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
		      }
		      catch(e)
		      {
						   try{
						          xmlHttp = new XMLHttpRequest();
						      }catch(e){
						    }
		      }
	  }
    return xmlHttp;
}  

//请求链接
//url: 请求地址
//fun：回调函数
function startRequest(url, fun,xmlHttp)
{
    xmlHttp.onreadystatechange  =  fun;
    xmlHttp.open("GET",url,true);
    xmlHttp.send(null);
}

//获得xml子节点
//father：父节点
//name：子节点名称
//如果获得则返回节点，没有则返回null
function getXmlChild(father, name)
{
    var es = father.getElementsByTagName(name);
    if(es.length == 0)
        return null;
    else
        return es[0];
}

String.prototype.trim　= function()       
{       
    // 用正则表达式将前后空格       
    // 用空字符串替代。       
    var t = this.replace(/(^\s*)|(\s*$)/g, "");     
    return t.replace(/(^　*)|(　*$)/g, "");     
}

//获得xml节点值
//father：父节点
//name：子节点名称
//defaultvalue：默认值
//如果获得则返回节点值，没有则返回defaultvalue
function getXmlData(father, name, defaultvalue)
{
    var es = father.getElementsByTagName(name);
    if(es.length == 0)
        return defaultvalue;
    else if(es[0].firstChild == null)
        return defaultvalue;
    else
   	{
   			for(var i=0;i<es[0].childNodes.length;i++){ 
            var node = es[0].childNodes[i];
            if(node.nodeValue != null && node.nodeValue.trim() !="")
            {
            	return node.nodeValue;	
            }
        }
        return defaultvalue;
    }
}



//把"转换为&quot;
function escapeForValue(str)
{
    return str.replace(/\"/g, "&quot;");
}

//用来实现文章的计数
function getClickTimes(newsid, owner,type,randomid) { 
    var url = '/system/resource/code/news/click/clicktimes.jsp'; 
    if(!type) type="wbnews";
    if(!randomid)
    {
    	 randomid="n";
    }else 
  	{
  		randomid="n"+randomid;
  	}
    var xmlHttp = createXMLHttpRequest();
    var url = url+"?wbnewsid="+newsid+"&owner="+owner+"&type="+type+"&randomid="+randomid;
    xmlHttp.open("GET", url, true);
    xmlHttp.onreadystatechange = function(){onGetClickTimes(xmlHttp);};
    xmlHttp.send(null);
} 
function _getBatchClickTimes(newsid, owner,type,randomid) { 
    var url = '/system/resource/code/news/click/batchclicktimes.jsp'; 
    if(!type) type="wbnews";
    if(!randomid)
    {
    	 randomid="n";
    }else 
  	{
  		randomid="n"+randomid;
  	}
  	var wbnewsids = newsid.split(",");

  	var isshow = false;
    for(var i = 0; i < wbnewsids.length; i++)
    {
    		var obj = document.getElementById(randomid+wbnewsids[i]);
    		if(obj != null)
    				isshow = true;
    }
    if(isshow)
    {
        var xmlHttp = createXMLHttpRequest();
        var url = url+"?wbnewsid="+newsid+"&owner="+owner+"&type="+type+"&randomid="+randomid;
        xmlHttp.open("GET", url, true);
        xmlHttp.onreadystatechange = function(){_onGetBatchClickTimes(xmlHttp);};
        xmlHttp.send(null);
    }
} 

//用来实现文章的计数
function _onGetBatchClickTimes(originalRequest) 
{
    if(originalRequest.readyState == 4 && originalRequest.status == 200)
	{
	    var str = originalRequest.responseText;
        var json = eval("("+str+")");
        for(var i = 0; json != null && i < (json.length?json.length:1);i++)
        {
            var objid =json.length?(json[i].randomid+json[i].wbnewsid):(json.randomid+json.wbnewsid);
    		var spanobj = document.getElementsByName(objid);
    		if(spanobj.length > 0)
    		{
				for(var j=0; j<spanobj.length;j++)
				{
					spanobj[j].innerHTML = json[i].clicktime;
				}	
    		}
        }
    }
}
//用来实现文章的计数
function onGetClickTimes(originalRequest) 
{
    if(originalRequest.readyState == 4 && originalRequest.status == 200)
	{
	    var str = originalRequest.responseText;
        var json = eval("("+str+")");
        for(var i = 0; json != null && i < (json.length?json.length:1);i++)
        {
            var objid = json.length?(json[i].randomid+json[i].wbnewsid):(json.randomid+json.wbnewsid);
    		var objs = document.getElementsByTagName("span");
    		if(objs.length > 0)
    		{
				for(var j=0; j<objs.length;j++)
				{
				    if(objid==objs[j].id)
					    objs[j].innerHTML = json.length?json[i].wbshowtimes:json.wbshowtimes;
				}	
    		}
        }
    }
}
function addClickTimes(urlid,owner,type){
		var url = '/system/resource/code/news/click/addclicktimes.jsp'; 
        var xmlHttp = createXMLHttpRequest();
        var url = url+"?wburlid="+urlid+"&owner="+owner+"&type="+type;
        xmlHttp.open("GET", url, true);
        xmlHttp.onreadystatechange = function(){};
        xmlHttp.send(null);
} 
loadXML = function(xmlString){
        var xmlDoc=null;
        //判断浏览器的类型
        //支持IE浏览器 
        if(!window.DOMParser && window.ActiveXObject){   //window.DOMParser 判断是否是非ie浏览器
            var xmlDomVersions = ['MSXML.2.DOMDocument.6.0','MSXML.2.DOMDocument.3.0','Microsoft.XMLDOM'];
            for(var i=0;i<xmlDomVersions.length;i++){
                try{
                    xmlDoc = new ActiveXObject(xmlDomVersions[i]);
                    xmlDoc.async = false;
                    xmlDoc.loadXML(xmlString); //loadXML方法载入xml字符串
                    break;
                }catch(e){
                }
            }
        }
        //支持Mozilla浏览器
        else if(window.DOMParser && document.implementation && document.implementation.createDocument){
            try{
                /* DOMParser 对象解析 XML 文本并返回一个 XML Document 对象。
                 * 要使用 DOMParser，使用不带参数的构造函数来实例化它，然后调用其 parseFromString() 方法
                 * parseFromString(text, contentType) 参数text:要解析的 XML 标记 参数contentType文本的内容类型
                 * 可能是 "text/xml" 、"application/xml" 或 "application/xhtml+xml" 中的一个。注意，不支持 "text/html"。
                 */
                domParser = new  DOMParser();
                xmlDoc = domParser.parseFromString(xmlString, 'text/xml');
            }catch(e){
            }
        }
        else{
            return null;
        }

        return xmlDoc;
    }