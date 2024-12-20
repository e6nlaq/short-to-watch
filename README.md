# short-to-watch

YouTubeのShort動画を通常の画面(youtube.com/watch)のURLに飛ばすブックマークレット

下のをブックマークに登録する
```javascript
javascript:function main(){const URL=location.href;if(URL.substring(0,31)=="https://www.youtube.com/shorts/"){window.location.href=`https://www.youtube.com/watch?v=${URL.substring(31)}`}else{alert("Short動画ではありません。")}} main()
```
