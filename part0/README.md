# 0.4 New Notes

```mermaid

sequenceDiagram
    Browser->>Server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
    Note over Server: The server creates new object and adds it to an array
    Server-->>Browser: HTTP status code 302
    Note over Browser: Browser reloads notes page

    Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
    Server-->>Browser: HTML code
    Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
    Server-->>Browser: main.css
    Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
    Server-->>Browser: main.js
    Note over Browser: browser starts executing js-code that requests JSON data from server 
    Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
    Server-->>Browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]

    Note over Browser: browser executes the event handler that renders notes to display

```

# 0.5 Single Page App

```mermaid

sequenceDiagram
    Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
    Server-->>Browser: HTML code
    Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spahttps://studies.cs.helsinki.fi/exampleapp/main.css
    Server-->>Browser: main.css
    Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spahttps://studies.cs.helsinki.fi/exampleapp/main.css
    Server-->>Browser: spa.js

    Note over Browser: Browser executes JS which manipulates HTML page content 
    Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
    Server-->>Browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]

    Note over Browser: JS fetches notes from the server as JSON-data and adds HTML elements to display notes using DOM-API

```

# 0.6 New Note

```mermaid

sequenceDiagram
    Browser->>Server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Note over Browser: JS registers event handler that prevents default handling of form submit, so it won't cause new get request.
    Note over Browser: Event handler creates note, adds it to notes list, rerenders the note list on the page and sends the new note to the server.
    Server-->>Browser: Status code 201 (created)

```