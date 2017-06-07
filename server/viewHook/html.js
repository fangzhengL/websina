/**
 * Created by hzn on 2017/6/5.
 */


export default function (appHtml) {
    return `<!DOCTYPE html>
<html>
<head>
<title>123123</title>
</head>
<body>
    <div id="root">${appHtml}</div>
    <script src="http://localhost:3001/bundle.js"></script>
</body>
</html>`
}



