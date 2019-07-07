# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

When a URL is placed in the browser by click or text input the browser searches for the IP address under the domain provided. Then HTTP is transferred between the server and requestor. 

## From start to finish, how does data reach you to be rendered in the browser?

Once the HTTP signal is processed the browser begins rendering HTML. Once HTML is rendered the browser requests more rendering for objects embedded in the HTML, such as JavaScript, CSS, or images. Then repeats the first three steps over again. Once loaded the browser will send sync requests as needed.

## What code is rendered in the browser?

The Browser renders HTML, JavaScript, CSS, and images into an interface page for the user. The code is used to define the output of colors, shapes, design, media, size, and text.   

## What is the server-side code’s main function?

Server-side code is implemented to provide an interface for the user, limit access to crucial data and control script source coding.

## What is the client-side code’s main function?

Client-side code is the front end code, what is implemented by the user's browser and interactive through the browser.

## What is runtime?

Runtime is the instruction or code that is executed while a program runs. The larger a file the more runtime, the smaller the less runtime.
## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

One instance is created per user visiting. The number of instances then equals the amount of users accessing the page.

## How many instances of the server-side code are available at any given time?

There can be multiple instances for server-sided code. Typically there is one or two instances, for development and testing/production.

## How many instances of the databases connected to the server application are created?

There would be 1 instance per user on the database.

Resources:

Vincent, W. S. (November 29, 2017). William Vincent. Retrieved from https://wsvincent.com/what-happens-when-url/
Code Conquest (2019). Retrieved from https://www.codeconquest.com/website/client-side-vs-server-side/
