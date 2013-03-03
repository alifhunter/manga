var postTitle=new Array();var postUrl=new Array();var postDate=new Array();var postSum=new Array();var postLabels=new Array();var sortBy="datenewest";var tocLoaded=false;var numChars=250;var postFilter='';function loadtoc(m){function getPostData(){if("entry"in m.feed){var a=m.feed.entry.length;for(var i=0;i<a;i++){var b=m.feed.entry[i];var c=b.title.$t;var d=b.published.$t.substring(0,10);var e;for(var k=0;k<b.link.length;k++){if(b.link[k].rel=='alternate'){e=b.link[k].href;break}}
if("content"in b){var f=b.content.$t}else if("summary"in b){var f=b.summary.$t}else var f="";var g=/<\S[^>]*>/g;f=f.replace(g,"");if(f.length>numChars){f=f.substring(0,numChars);var h=f.lastIndexOf(" ");f=f.substring(0,h)+'...'}
var j='';if("category"in b){for(var k=0;k<b.category.length;k++){j+='<span style="color: rgb(42, 105, 0);">'+b.category[k].term+' - </span>'}
var l=j.lastIndexOf(' - ');if(l!=-1){j=j.substring(0,l)}}
postTitle.push(c);postDate.push(d);postUrl.push(e);postSum.push(f);postLabels.push(j)}}}
getPostData();sortPosts(sortBy);tocLoaded=true}
function filterPosts(a){postFilter=a;displayToc(postFilter)}
function allPosts(){postFilter='';displayToc(postFilter)}
function sortPosts(b){function swapPosts(x,y){var a=postTitle[x];postTitle[x]=postTitle[y];postTitle[y]=a;var a=postDate[x];postDate[x]=postDate[y];postDate[y]=a;var a=postUrl[x];postUrl[x]=postUrl[y];postUrl[y]=a;var a=postSum[x];postSum[x]=postSum[y];postSum[y]=a;var a=postLabels[x];postLabels[x]=postLabels[y];postLabels[y]=a}
for(var i=0;i<postTitle.length-1;i++){for(var j=i+1;j<postTitle.length;j++){if(b=="titleasc"){if(postTitle[i]>postTitle[j]){swapPosts(i,j)}}
if(b=="titledesc"){if(postTitle[i]<postTitle[j]){swapPosts(i,j)}}
if(b=="dateoldest"){if(postDate[i]>postDate[j]){swapPosts(i,j)}}
if(b=="datenewest"){if(postDate[i]<postDate[j]){swapPosts(i,j)}}}}}
function displayToc(a){var b=0;var c='';var d='Chapter Manga';var e='Urutkan sesuai Judul';var f='Tanggal';var g='Urutkan sesuai Tanggal';var h='Judul Manga';var j='';if(sortBy=="titleasc"){e+=' (descending)';g+=' (newest first)'}
if(sortBy=="titledesc"){e+=' (ascending)';g+=' (newest first)'}
if(sortBy=="dateoldest"){e+=' (ascending)';g+=' (newest first)'}
if(sortBy=="datenewest"){e+=' (ascending)';g+=' (oldest first)'}
if(postFilter!=''){j='Click to show all manga'}
c+='<table>';c+='<tr>';c+='<td class="toc-header-col1">';c+=d;c+='</td>';c+='<td class="toc-header-col2">';c+=f;c+='</td>';c+='</tr>';for(var i=0;i<postTitle.length;i++){if(a==''){c+='<tr><td class="toc-entry-col1"><img border="0" src="http://i44.tinypic.com/2ns5efd.png" /> <strong>'+postLabels[i]+'</strong><p></p><span style="padding-left:15px;" font-size:"10px;"><a href="'+postUrl[i]+'" title="'+postTitle[i]+'">'+postTitle[i]+'</a></span>';if(i<=9){c+=' <strong><em><blink><span style="color: rgb(255, 0, 0);">New !!</span> </em></blink></strong>'}
c+='</td><td class="toc-entry-col2"><center><italic>'+postDate[i]+'</italic></center></td></tr>';b++}else{z=postLabels[i].lastIndexOf(a);if(z!=-1){c+='<tr><td class="toc-entry-col1"><a href="'+postUrl[i]+'" title="'+postSum[i]+'">'+postTitle[i]+'</a></td><td class="toc-entry-col2">'+postDate[i]+'</td><td class="toc-entry-col3">'+postLabels[i]+'</td></tr>';b++}}}
c+='</table>';if(b==postTitle.length){var k='<center><span class="toc-note">MangaRuz Latest Release<br/></span></center>'}else{var k='<span class="toc-note">Displaying '+b+' posts labeled \'';k+=postFilter+'\' of '+postTitle.length+' posts total<br/></span>'}
var l=document.getElementById("toc");l.innerHTML=k+c}
function toggleTitleSort(){if(sortBy=="titleasc"){sortBy="titledesc"}else{sortBy="titleasc"}
sortPosts(sortBy);displayToc(postFilter)}
function toggleDateSort(){sortBy="datenewest";sortPosts(sortBy);displayToc(postFilter)}
function showToc(){if(tocLoaded){displayToc(postFilter);toggleDateSort();var a=document.getElementById("toclink");a.innerHTML='<p>Kau bisa mengurutkan daftar update manga ini sesuai dengan nama judul atau tanggal update. Untuk Menampilkan judul manga tertentu, silahkan klik nama/judul komik/manga tersebut.</p><p><a href="javascript:hideToc();">Sembunyikan Update Manga</a></p><br/>'}}
function hideToc(){var a=document.getElementById("toc");a.innerHTML='';var b=document.getElementById("toclink");b.innerHTML='<a href="javascript:showToc();">Show Table of Contents</a><br/><br/>'}
