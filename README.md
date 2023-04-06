# short-to-watch

YouTubeのShort動画を通常の画面(youtube.com/watch)のURLに飛ばすブックマークレット

<a href="javascript:{ let book = document.createElement('script'); book.src = 'https://e6nlaq.github.io/short-to-watch/jump.js'">これ</a>をブックマークに登録する。

中身はこんな感じ

```javascript
javascript:{ let book = document.createElement("script"); book.src = "https://e6nlaq.github.io/short-to-watch/jump.js"; document.body.appendChild(book)};
```
