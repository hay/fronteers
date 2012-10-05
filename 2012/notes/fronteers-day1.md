Here is the etherpad for day2: http://etherpad.wikimedia.org/fronteers12-day2

 Welcome to the #fronteers12 Etherpad. Please scroll down for the latest talks!

With contributions by @basvasilich, Alex, David Hund, derWhity, eonlepapillon, freco, reco, frenkie, hessi, Mike_L, @MikevHoenselaar, Morriz, Rutger, seb, sjoerdly and hayify

== Adapting to Responsive Design - Mark Boulton ([@markboulton](https://twitter.com/markboulton))
http://storify.com/frenkie/fronteers-12

"Responsive design is the red pill from the Matrix". Responsive design is a buzzword, like Ajax.

"Responsive Design is a red pill. We've been living in a conceptual hallucination of control. While 'pixel perfect' is the blue pill. Reality simply doesn't work that way.

1) How responsive design affects business
2) How responsive design affects process
3) How RD affects content

Responsive design costs more, according to a Disney survey. Agencies should 'swallow the red pill' and pass the cost along.  Teams are 'siloed', they don't talk to each other. Many agencies are working like factories, passing work to each other.

Advertisements are another problem. Advertising has been ruining the design of content web sites for 20 years.can't design advertisements that are responsive, they are really tied to certain sizes. Technically it would be trivial to develop something that would serve different ads at different breakpoints. he advertising model is still selling areas with ads like 50 years ago. In responsive there are no fixed areas.

Low fidelty designing allows you to screw up often and quickly, shortening the feedback loop.

Wireframes do not work anymore for responsive webdesign. Why bother, build a prototype.






Stories have a collections of little pieces of content attached (video, wuotes, images, text, etc) The story is no longer a page but editorial still thinks of it this way.

"a page" doesn't exist anymore in responsive design. It's about chunks of content put together in a smart way.

Karen McGrane's mentioned video on Adapting to Adaptive Content: http://www.youtube.com/watch?v=CGyBrlCKySk

Metro is not authentically digital. The story is the link.

Traditional testing does not apply anymore. It won't get any better. We can't do Q&A the same way anymore.

Responsive Design challenges content. It forces you to focus on the content!

Jeremy Keith says the content of the web is made of URLs, HTTP and files.

NASA's job is to inspire a generation. How do you make content more interesting? Try to find anything that would appeal to your mom ;) Create a comphrension matrix on what people might understand (scientists want data not pretty pictures, general public wants the exact opposite).

Talks about work at CERN. If it takes 6 months to generate a homepage image. Do it! People want to see it!

Content management systems provide a challenge. how do we get cmses to align with what writers need but also provide the blobs you need to power your responsive design. Make your content (text, images etc) reusable instead of just thinking in fixed paged. This is hard, but absolutely neccesary for responsive to work!

FQA part:
In the long run clients will go like "WOW, this works on all devices"
We need better tools to support the editorial process. Content management is not a technical problem, but a people/process problem.
BBC is working on a responsive design library.

== Addy Osmani, The New And Improved Developer Toolbelt [@addyosmani](https://twitter.com/addyosmani )
http://storify.com/frenkie/fronteers-12-the-new-and-improved-developer-toolbe

In 1996, the 'advanced HTML editor' was basically a textarea. Tools must be changed if they can't evolve. Optimize your workflow continuesly. Ask yourself if the tools you use are the best there are at the time.

We're creatures of habit. My intuition, we remember steos in our workflow and their order - Daniel Kahneman

Craftsmanship is about choosing tools well. You want to be the person that has to setup for 5 minutes before he can begin.

"We're seeing the emphasis shift from valuing trivia to valuing tools" - Rebecca Murphey.
Ergo: the less time you spend with your tools, the more time you have making stuff.

"Learn to love the command line. It isn't scary. You know how to use Photoshop with 300 buttons. That's scary" - Stephen Hay

Tooling workflow for developers:
* Make it sexy (e.g., color code your terminal, customize to the max! Addy uses http://www.iterm2.com/)
* DOTFILE EVERYTHING [http://dotfiles.github.com]
* Capture your command line history
* Favs: gz, server alias
* Aliases are awesome (win7ie8, win8ie10, ) - Done by BrowserStack (browser testing in the cloud)
* Auto completion scripts from [Bash it](https://github.com/revans/bash-it)

Addy really advises to use Sublime. It is his favorite editor. You can use whatever editor you want. But see it as an onion. Keep exploring the editor so you can keep learning new stuff and improve your workflow.

Sublime tips:
* Use the built-in Build System from Sublime. Can also be used together with unit testing.
* Zen coding with Emmet (-brds), , also works with CSS
* Stack overflow code search package
* Snippets

SASS:
* c and Sass Inspector are nice for debugging SASS in Chrome

* Live Code linting really improves your code.
* Live compilation for Coffeescript

In-browser Devtools
* SourceURL
* Source maps
* Nabigating scripts
* Snippets
* Extensions (Tincr)

Scaffolding:
Generate code for you.
* Stronger in other communities lilP
* Brunch.io
* Grunt BBB (automagically creates a bunch of files and stuff when making applications instead of writing them yourselves)
* AngularJS seed
* Numerous Gems available for some others

Testing
* Travis (CI in the cloud, https://travis-ci.org/), can also update 'build failed' messages on Github
* Bunyip (http://ryanseddon.github.com/bunyip/): helps you run unit tests on multiple browsers in the cloud
* Yeoman (http://yeoman.io): opiniated workflow: you should go from idea to rough prototype in 10 min, built on [Grunt](http://gruntjs.com/) the most popular build tool. Includes support for stuff like modules, abstractoins, boilerplates and test/build (such as r.js). Experimental support for [ES6 modules](http://wiki.ecmascript.org/doku.php?id=harmony:modules_examples). Supports live reload as well.

Package management
* jQuery plugins might require different jQuery versions. You don't want to have multiple versions of jQuery on your page.
* Yeoman also includes support for package management, yeoman install package

Generators
* Use as a generator yeoman install backbone:Model MyModel

For Windows
http://www.decodize.com/css/installing-yeoman-front-end-development-stack-windows/https://github.com/yeoman/yeoman/issues/216

== Peter-Paul Koch, A Pixel is not a Pixel [@ppk]( http://twitter.com/ppk )
[PPK's talk on Storify](http://storify.com/frenkie/fronteers-12-peter-paul-koch-a-pixel-is-not-a-pixe)
Uses a wonderful [little camera for his mobile devices](http://camholder.org/ )

There are three things really diffcult on mobile
* Small screen
* Touch events
* Pixels and viewports

What is a pixel according to the w3c? http://www.w3.org/TR/css3-values/#reference-pixel

According to W3C you can't zoom with pixels. Accordingly, they have nothing to do with reaility.

There are three kinds of pixels:
* CSS Pixels
    Like in width:20px;. An abstract construct. Their size may be increased or decreased.
* Device pixels
    The actual pixels on the screen. The number of device pixels increases, this would break sites,
    so density-independent pixels were invented.
* Density-independent pixels

In Javascript pixels might not be CSS pixels all the time. Usually it's CSS pixel, but sometimes it might be device pixels (dips) when related to screen size.

Viewports
* On desktop it's equal to browser window, the <html> element always is 100% and spans the entire viewport.
* On mobile it's a different game altogether. Squeezing all sites wouldn't work. Instead of that you get two viewports: a layout viewport, that is used to render the CSS (roughly 800 - 1000 pixels wide). The visual viewport is the actual width, usually the same as the layout viewport (when you're viewing on a non-optimized website). The visual viewport is like looking through a keyhole. If you want to know how much of the website the user is actually seeing, use window.innerWidth (works on virtually all browsers except IE9 and Android 2.0)
* On mobile the visual viewport becomes smaller, but layout remains static. CSS declarations are *not* recalculated (they are on desktop!) because of battery life.

position:fixed
* position:fixed doesn't really work on the mobile web. Is the element fixed to the visual or the layout viewport? When a browser uses the layout viewport it's essentially the same as position:absolute.
* [demo]( http://quirksmode.org/m/tests/positionfixed.html ): how does position;fixed work in four browsers?
    * On the [UC browser]( http://ucweb.com ) (popular in China) on Android position:fixed elements completely disappear when zooming in!
    * Opera 'hops' the element when you stop scrolling. Sometimes :)
    * Chrome does it almost right, but hops the element when zooming. It does wrap the line when zooming in.
    * Android stock does exactly what you want, except it doesn't wrap the line in an element.
* PPK made a [position:device-fixed demo] (http://quirksmode.org/m/tests/devicefixed.html )

media queries
* 'width' in a media query uses CSS pixels, 'device-width' uses device pixels.

meta viewport
* Tells what the browser should use for the meta viewport
* There's little reasons to use anything else then width=device-width, it's the sane default
* iOS uses yet another layer because the iPhone 4 has a retina display

The trick for responsive design is using width=device-width, use media queries.

Q&A
PPK never has used any Javascript library or framework, evah!
"All the tools we've created for desktop use are useless on mobile, they're too battery hungry"
"Zoom-based navigation / layouts will be the next step in mobile websites."
"Also consider connection speed when deciding wether or not to serve up retina images"

View his presentation on: http://quirksmode.org/presentations/Spring2012/viewports_sf.pdf


== Alex Graul, Using JS to build bigger, better datavis to enlighten and elate [@alexgraul]( https://twitter.com/AlexGraul ) ( http://www.sho.ch/ )
[Storify](http://storify.com/frenkie/fronteers-12-alex-graul-using-js-to-build-bigger-b?awesm=sfy.co_mA5k&utm_source=direct-sfy.co&utm_campaign=&utm_medium=sfy.co-twitter&utm_content=storify-pingback)

Alex makes visualizations for the Guardian.

Uses [modest maps]( http://modestmaps.com/ ) was Java library first, then Actionscript, now Javascript.
They use [d3.js for their data vis]( http://d3js.org/ ), the problem with D3.js is that's it's pretty unstructered, like jQuery.

So Alex started with a library called [Miso](http://misoproject.com/dataset/ ) for development. Miso.Dataset can be used with any dataset, even getting data from a url live. Customizing on the fly is what they miss the most on d3.

Miso also supports scenes, to support lots of elements at the same time in a single 'world'. Animations are a really important part of telling the story in datavisualizations.

Q&A
Is Flash still necessary: very little. Biggest problem right now is the lack of a good IDE. VML is a nice fallback, using Raphael for example. R2D3 (https://github.com/mhemesath/r2d3/ ), Leaflet are other tools used.

IE7 support is becomming a business issue. Over 1/3 of the development time!

The key to building data visualizations with designers and journalists is fast iteration.

Guardian will release a dataset for the public in the near future.
They work with [Google Refine]( http://code.google.com/p/google-refine/ ). It is a tool to work with big chunks of data.

Google Refine is the best tool on the market for big data stuff, but lots still needs to be done by hand.

"Google Refine is a power tool for working with messy data, cleaning it up, transforming it from one format into another, extending it with web services, and linking it to databases" - quote from Google Refine website.

[Data viz tool recommendation for journalists](http://dev.datawrapper.de/docs/about )

Most Guardian projects are done in one-two weeks. They're on incredible short time schedules.

Alex's demo is on [bl.ocks.org](http://bl.ocks.org/3788999 )

How do you make it clear stuff is interactive:

[The Functional Art by Alberto Cairo is a good book on dataviz](http://www.thefunctionalart.com/ ).

Network diagrams with 10.000 nodes are pretty useless. As well as barcharts just for showing size.

== Mathias Bynens, Ten things I didn’t know about HTML [@mathias](https://twitter.com/mathias)
[Frank's take on Storify](http://storify.com/frenkie/fronteers-12-mathias-bynens-ten-things-i-didn-t-kn)

<body bgcolor=sick"> actually gives a green background because of the legacy HTML3 parsing stuff. "sick" will be transformed to #000c00.
bgcolor=fronteersconf or bgcolor="fronteers2012" gives the fronteers yellow color

Want to see your name as a background color? http://wesoudshoorn.nl/f12/ (for fronteers attendees) or http://mathiasbynens.be/demo/bgcolor without spaces in the name (different results)

HTML validators are nice tools, but they're overrated.

The case of missing semicolons as interpreted in a Github issue in Bootstrap: https://github.com/twitter/bootstrap/issues/3057

This also works in HTML entities (&amp; works as well as &amp)

Attributes are parsed differently compared to simple texts. <p>foo&gtbar</p> will give "foo>bar" whereas title="foo&gtbar" will result in "foo&gtbar".

Valid HTML: omit </html> and </body> and page will still work, even omitting the body and html tags will work in most browsers.

Font family names with spaces apparently don't need quoting, but a font name beginning with a number does, so use quotes all the time.

Quotes around attributes are optional in html and css selectors, but they might fail in a different context.

Not all characters give the same length, unicode characters might give weird results.
http://mathiasbynens.be/notes/javascript-encoding
Any unicode character that lives outside the BMP will give longer values for String.length

Never use non-breaking space characters in Javascript variable names ;)
http://mothereff.in/js-variables
Can be handy for checking out if a variable name is valid

!!document.all actually returns 'false' because lots of legacy code uses if(document.all) to check for 'compatibility'


Performance checks, don't use iterations but let stuff run for a second and check back.
However, Windows XP has a weird internal clock that gets updated only every 10 or 15 miliseconds. Instead of that use a library like [Benchmark.js](http://benchmarkjs.com/) that works around these issues.

== Stephen Hay, Style guides are the new Photoshop [@stephenhay](https://twitter.com/stephenhay)

Slides: http://www.slideshare.net/stephenhay/style-guides-are-the-new-photoshop-fronteers-2012

Stephen explains a personal example of him trying to book a flight. He was so angry that he choose to share it with us.
The landing page of the booking page he showed contains 3 buttons to continue in the process.
But the body copy and the buttons don't match. The text explained two options but there were three. A great example of who user experience is important. And the love of your work to improve the web instead of ruining it. Usability FTW!

Andy Clarke - Walls come tumbling down (2009)

Photoshop is impractical for responsive design mockups. You never really know what the actual output would be. Web technology, on the contrary is very practical for responsive design mockups. Lots of nice things: it's a lot more realistic. Designing in the browser: Designing systems, rather than sites. We design web sites, not pictures of websites.

Shows screenshots made with Adobe Edge Inspect (Formerly Adobe Shadow)

It's pretty impressive for a client when you can show your site on all possible devices that are in the room, instantly.

Instead of doing stuff on Photoshop: make a styleguide, directly in HTML.
Design consistency and maintainability. Useful for future designers, devs & others.

"Twitter bootstrap is a design pattern library, not a styleguide"

A Style guide is not just putting the image assets and measures, also include written desciptions, context etc.

[https://gimmebar.com/collection/4ecd439c2f0aaad734000022/front-end-styleguides](Examples of styleguides by Anna Debenham), e.g. the [BBC GEL](http://www.bbc.co.uk/gel)

Stephen has different demands:
* Elements/modules should not have to be physically split into seperate files
* Screenshots have to be changed automatically
* CSS in style guide have to be updated automatically if it changes
* Syntax highlighting for code
* Free-form writable

There's no tool that does all of this.
[Mike: New idea for startup ;-), why not do this during StartupBus next 30th November :)]
[Dexy is a flexible documentation tool.](http://www.dexy.it/ ) for making the stuff Stephen wants. Documentation only.

style guide tools
Dexy + Pandoc (or markdown) filter
Phantomjs (http://phantomjs.org/) and Casperjs (http://casperjs.org) for screenshots
Jinja for layout templating to compile (http://jinja.pocoo.org/docs/))
Pygments syntax highlighting allows you to pick themes for syntax highlighting
The scary part is that it involves the command line, which turns a lot of designers off.

Code and screenshot updating: [Jinja templates](http://jinja.pocoo.org/docs/) + dexy's idiopidea filter
Jinja is a ful featured templafe engine for Python.

For syntax highlightinh he uss Pygments. It's for Python.

Why are designers so afraid for the command line?
Audience: It's not natural. No GUI

The CLI is like your butler :), not a scary place.

Photoshop is pretty difficult too, for something like the LAB colorspace there are books of > 600 pages.

All the CSS for your site should be modular, e.g. using a technique like [SMACSS] ( http://smacss.com/ )

Install PhantomJS & CapserJS

Script screenshots with CasperJS

Mark the CSS you want to export

Run Dexy, Changes in design? --> Run Dexy again

$ dexy clean #clean up dexy
$ dexy setup #setup dexy
$ dexy # run

DEMO

Q&A
Stephen makes screenshots of the mockups instead of presenting the mockups because clients tend to say 'you're done already, nice!'

== Antoine Hegeman, Bor Verkroost, Bram Duvigneau & Chris Heilmann, Accessibility panel
[Frenkie's summary on Storify] ( http://storify.com/frenkie/fronteers-12-accessibility-panel )

3 great guys explaining who they are and how they use the web. Instead of people that talk about what people with disabilities need, here are those people themselves.

Bram Duvigneau blind developer. Programs on the backend, uses brailledisplay and text-to-speech to program. Text-to-speech is usually faster, around 85 words per minute is possible.

Chris' blind collegaue used to send Greasemonkey scripts to websites to show them how their websites could be made to work.

Antoine Hegeman, teacher (html, css, javascript, Dreamweaver (also a kind of disability thing)).

[Mozilla Webmaker](http://www.mozilla.org/en-US/webmaker/ )

A few examples

Bor Verkroost is using a touchpad on his laptop, but usually uses a mouse. It can get pretty difficult because of hand operations.
He will not buy a iPad.
He browse to the bnn.nl website.

It's difficult with lots of items in a dropdown menu that are close to each other (e.g. [http://www.bnn.nl](BNN.nl). Also, with dropdown menus when you hover out of a dropdown the menu appears immediatly. At the BNN-website they made sure that even when you hover off for a couple of pixels the menu won't dissapear immediately.

However, the Al-Jazeera website is more accesible because there is a lot more room between items.

So, actually lots of things that are useful for non-disabled people (like lots of whitespace) are very useful for disabled people too.

Zooming is not always a real option. Bor likes to search and scan a page fast. This way zooming is not more usable.

Sometimes, doing something for one disability might be a problem for other disabilities.

Bram listens to the speach at 85%. We can't understand hardly what there is said.
Little beeps that you hear are notifications of links on a web page. Its by choice.

Google Search impemented level headings (<h1></h1>) in the page, so you can switch to different sections pretty fast.
The program that reads the sentences sees the lang element and changes the voice to the corresponding language. But doesn't actually work for Safari on Mac OS. Only on iPhone.

One of the biggest annoyances are webapplications that switch single click to doubleclick. This differs from common usability rules.

There is an 'application' ARIA-tag, that will force some screen readers (especially on Windows) to get out of 'website' mode and do everything in 'application' mode.

Windows Narrator (the Microsoft version of a screen reader) is pretty useless until Windows 8.

All the screen reading functionality on a website doesn't have any use. Blind people have their own software to read the page. Reading services like readspeaker are actually annoying for blind people.

Flash accessibility on other systems than Windows is awful. It's pretty hard to get stupid ads to shut up.
But even on Windows, the Flash developer has to implement acessibility correctly for it to work.

Problem with the UWV form: you can do everything with the form to prevent people from writing, but you need to sign it and send it in an envelope, which defeats the complete purpose. Why doesn't it work with DigID (Dutch system to sign document electronically).

Splash pages (like the one on Nettorama.nl) is pretty awful too. Every click is a lot of work for someone with cerebral palsy.

== Lea Verou, More CSS secrets: Another 10 things you may not know about CSS [@leaverou](https://twitter.com/LeaVerou )

http://lea.verou.me/css3-secrets/ --> older presentation cfr. fronteers 2011
http://lea.verou.me/more-css-secrets/ --> fronteers 2012
Lea uses [CSSS](https://github.com/LeaVerou/csss) as a presentation tool

CSS3 actually doesn't exist as css is cut up into modules with each their own version.

1) Box-shadows when a box can still be scrolled using background-attachment: scroll;

Using background-attachment:local you can have something that scrolls with an element, but not with the rest of the page.
You need two background images: one attached to the element, one fixed, so when you scroll, the second background overlaps the first. Also, when you make that transparent (using hsla(0, 0%, 100%, .5) it gets less obvious.

Browser support in all browsers (IE9) except for Firefox.

Original idea was by [Roman Komarov](http://kizu.ru/en/fun/shadowscroll/ )

2) Using calc() to simulate centering content in an element
calc(50% - 350px)

Browser support: not in Opera, only recent browsers.

There's another way using CSS 2.1
Give a very large negative value for margin and a very large value for padding
Might impact performance (especially on iOS)

#container{
    width: 700px;
    margin: auto:
}

#container section{
    margin: 0 -9999px;
    padding: 0 9999px;
}

3) The lightbox effect
You can combine different transitions with different parameters, and also do a transition delay, by using a comma you can start the second transition when the first one has been done

Browser support for transitions: all of them except IE9.

4) Let underlined sentences follow the size of a font
Make a gradient over the sentences, using a background-size with the same height as the line-height. Add a background-origin: content-box to fix padding as well.

Background-gradient can also be used for alternating odd/even colored stuff as long as you use background-origin: content-box.

Browser support: all browsers, except IE9. No -ms- needed for IE10 though.

5) Making a rotating lozenge
Use a transform rotate: 45deg on the element, but do a negative rotate on the inner element.

div {
    transform: rotate(45deg);
}

div p {
    transform: rotate(-45deg);
}

Browser support: all of them, except IE8

6) Moving elements in a circular path
First you make a rotation keyframes animation infinitely moving the object around itself
Then do a transform-origin: 50% 330px;
However, the image is still rotating around itself.
Then make a wrapper element, with the exact same animation but negative.
Use animation-direction:reverse to prevent having two animations (only latest Chrome and Firefox).

Browser support: all of them except IE9.

Technique with only one element, working in all browsers

from {
    transform: rotate(0deg);
        translate(-330px)
         rotate(0deg)
}

to {
    transform: rotate(360deg)
        translate(-330px)
        rotate(360deg)
}

7) Shadows on speech bubbles
Problem: when using pseudo elements for the "arrow" part, they get no shadow when using box-shadow. The problem is even worse when using a dotted border.
However, you can use the new filter property to use a SVG filter on an element. For example, on dotted elements.

Browser support: Only Chrome (using css filter) and firefox (with a svg workaround)

Degrades gracefully so no problem to use it already...

8) Blurred panes
.glass-pane {
    filter: blur(5px);
}

does not work, (blurs the text instead)

Instead use a pseudo element with the same background, and blur that.
Do not re-specify the border-radius, instead use 'inherit' to get the parent value;

Problem: you can only use this with a background-image, not with other elements behind it.

9) Hyphenation
Firefox, Safari, IE10 support hyphenation using hyphens: auto; (combined with text-align: justify).

Browser support: Mobile safari, IE10, not on Chrome and Opera.

10) Animated png using css
Simurai.com
Use steps() in the animation

Works in all browsers (except IE9 and Opera)

Here is the etherpad for day2: http://etherpad.wikimedia.org/fronteers12-day2



