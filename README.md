# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   > The **kids.js** module contains the code that will execute. The **addEventListener** method waits on an event - in this case, a click of the mouse button.  When the user clicks the mouse button, the function begins execution. If the object that was clicked possesses the data attribute of "child", then the alert method on the window object activates and displays the prescribed message. If the object is not "child," nothing further happens within this code block.
2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > Each iteration of the kids array calls `findCelebrityMatch()` and checks for pairing of each child with their specific celebrity match.
3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > The name of the sport is assigned a data attribute of "sport." This is invoked in the event listener if the object with data type "celebrity" is clicked.
4. Can you describe, in detail, the algorithm that is in the `main` module?
   > Following the import of functions from other modules, the HTML element with the ID "container" is selected and assigned to the `mainContainer` variable. Next follows a template literal called `applicationHTML` that defines headings and calls the imported functions.  Finally, `applicationHTML` is inserted into the `innerHTML` method of the of the `mainContainer` element.
