---
layout: post
category: mbp
title: 代码雨
tag: [mbp]
---
# 代码雨

```javascript
<!DOCTYPE html>
<html>
<head>
    <title>数字雨</title>
</head>
 
<body>
<canvas id="canvas"></canvas>
<style type="text/css">
    body{margin: 0; padding: 0; overflow: hidden;}
</style>
<script type="text/javascript">
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
 
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
 
    var texts = '01'.split('');
 
    var fontSize = 16;
    var columns = canvas.width/fontSize;
    // 用于计算输出文字时坐标，所以长度即为列数
    var drops = [];
    // 初始值
    for(var x = 0; x < columns; x++){
        drops[x] = 1;
    }
 
    function draw(){
        // 让背景逐渐由透明到不透明
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // 文字颜色
        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px arial';
        // 逐行输出文字
        for(var i = 0; i < drops.length; i++){
            var text = texts[Math.floor(Math.random()*texts.length)];
            ctx.fillText(text, i*fontSize, drops[i]*fontSize);
 
            if(drops[i]*fontSize > canvas.height || Math.random() > 0.95){
                drops[i] = 0;
            }
 
            drops[i]++;
        }
    }
 
    setInterval(draw, 33);
</script>
</body>
```
