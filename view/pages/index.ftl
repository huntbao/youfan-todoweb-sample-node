<!DOCTYPE html>
<html>
<head>
    <%- include ../common.ejs %>
    <link href="/src/page/pages/index.bundle.css" rel="stylesheet" type="text/css"/>
    <link href="/src/page/pages/index.css" rel="stylesheet" type="text/css"/>
    <link href="/src/page/pages/login.css" rel="stylesheet" type="text/css"/>
</head>
<body>
<div class="todoapp" id="root"></div>
<!-- @DEFINE -->
<script src="/src/lib/nej/src/define.js?pro=../src/"></script>
<script src="/src/page/pages/common.js"></script>
<script src="/src/page/pages/index.bundle.js"></script>
<script>
    NEJ.define([
        'pro/page/pages/index',
        'pro/page/pages/login'
    ], function (index, login) {
        index._$$Module._$allocate();
        login._$$Module._$allocate();
    });
</script>
</body>
</html>
