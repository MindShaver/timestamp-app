<html lang="en">
<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
          integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    <meta charset="UTF-8">
</head>
<body>
<div class="container-fluid">
    <h1 class="header">API Basejump: Timestamp Microservice</h1>
    <p>By MindShaver |
        <a href="https://github.com/MindShaver/timestamp-app">Project GitHub</a></p>
        <p> View the live site <a href="https://mindshaver-timestamp-service.herokuapp.com/" target="_blank">HERE</a></p>
    <blockquote>User Stories:
        <ol>
            <li>I can pass a string as a parameter, and it will check to see whether that string contains either a unix
                timestamp or a natural language date (example: January 1, 2016)
            </li>
            <li>If it does, it returns both the Unix timestamp and the natural language form of that date.</li>
            <li>If it does not contain a date or Unix timestamp, it returns <code>null</code> for those properties.</li>
        </ol>
    </blockquote>
    <h2>Example usage:</h2>
    <code>mindshaver-timestamp-service.herokuapp.com/1456790400</code>
    <code>mindshaver-timestamp-service.herokuapp.com/March 1 2016</code>
    <h2>Example output:</h2>
    <code>{<br/>
   "unix": 1456790400,<br/>
   "natural": "Tue Mar 01 2016"<br/>
}</code>
    
</div>
</body>
</html>
