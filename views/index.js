<html>

<head>
  <title>MyTaskList</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.css">
  <link rel="stylesheet" href="styles.css">
  <!-- 1. Load libraries -->
  <!-- Polyfill(s) for older browsers -->
  <script src="node_modules/core-js/client/shim.min.js"></script>
  <script src="node_modules/zone.js/dist/zone.js"></script>
  <script src="node_modules/reflect-metadata/Reflect.js"></script>
  <script src="node_modules/systemjs/dist/system.src.js"></script>
  <!-- 2. Configure SystemJS -->
  <script src="systemjs.config.js"></script>
  <script>
    System.import('app').catch(function (err) { console.error(err); });
  </script>
</head>
<!-- 3. Display the application -->

<body>
  <my-app>Loading...</my-app>
</body>

</html>