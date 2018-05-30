<!DOCTYPE html>
<html>
<?php include 'sites/core/metaParams.php'; ?>
<body>
<?php include 'sites/components/header.php'; ?>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

<form action="loginAction" id="loginForm">
      <label>User name:&nbsp;</label>
      <input type="text" name="username"><br>
      <label>Password:&nbsp;</label>
      <input type="text" name="password"><br>
      <button type="submit" id="loginButton">Log In</button>
      <button type="reset" id="reset">Clear</button>
    </form>

</body>
</html>
