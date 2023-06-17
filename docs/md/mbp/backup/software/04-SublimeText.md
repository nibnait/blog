[https://www.sublimetext.com](https://www.sublimetext.com)

### format json

cmd + shift + p

> intalll package control

cmd + shift + p

> install package

cmd + shift + p

> pretty json

右上角 -> Sublime Text -> settings -> key bindings

* {“keys”: [“command+option+l”], “command”:”pretty_json”}
* **左边** **搜索** layout

### Sublime KeyBings

```json
[
    {"keys": ["command+option+l"],"command":"pretty_json"},

    {
        "keys": ["super+shift+1"],
        "command": "set_layout",
        "args":
        {
            "cols": [0.0, 1.0],
            "rows": [0.0, 1.0],
            "cells": [[0, 0, 1, 1]]
        }
    },
    {
        "keys": ["super+shift+2"],
        "command": "set_layout",
        "args":
        {
            "cols": [0.0, 0.5, 1.0],
            "rows": [0.0, 1.0],
            "cells": [[0, 0, 1, 1], [1, 0, 2, 1]]
        }
    },
    {
        "keys": ["super+shift+3"],
        "command": "set_layout",
        "args":
        {
            "cols": [0.0, 0.33, 0.66, 1.0],
            "rows": [0.0, 1.0],
            "cells": [[0, 0, 1, 1], [1, 0, 2, 1], [2, 0, 3, 1]]
        }
    },
    {
        "keys": ["super+shift+4"],
        "command": "set_layout",
        "args":
        {
            "cols": [0.0, 0.25, 0.5, 0.75, 1.0],
            "rows": [0.0, 1.0],
            "cells": [[0, 0, 1, 1], [1, 0, 2, 1], [2, 0, 3, 1], [3, 0, 4, 1]]
        }
    },
    {
        "keys": ["super+alt+2"],
        "command": "set_layout",
        "args":
        {
            "cols": [0.0, 1.0],
            "rows": [0.0, 0.5, 1.0],
            "cells": [[0, 0, 1, 1], [0, 1, 1, 2]]
        }
    },
    {
        "keys": ["super+alt+3"],
        "command": "set_layout",
        "args":
        {
            "cols": [0.0, 1.0],
            "rows": [0.0, 0.33, 0.66, 1.0],
            "cells": [[0, 0, 1, 1], [0, 1, 1, 2], [0, 2, 1, 3]]
        }
    },
    {
        "keys": ["super+shift+5"],
        "command": "set_layout",
        "args":
        {
            "cols": [0.0, 0.5, 1.0],
            "rows": [0.0, 0.5, 1.0],
            "cells":
                [
                    [0, 0, 1, 1], [1, 0, 2, 1],
                    [0, 1, 1, 2], [1, 1, 2, 2]
                ]
        }
    }
]
```
