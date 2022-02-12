/**
| Situation                         | What this maps to                    |
| --------------------------------- | ------------------------------------ |
| method invocation                 | the object that owns the method      |
| constructor function              | the newly created object             |
| event handler                     | the element the event was fired from |
| function invocation               | the global object (window)           |
| function invocation (strict mode) | undefined                            |
| arrow function                    | the context of the caller            |
 */
