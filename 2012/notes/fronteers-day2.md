Fronteers 2012 notes, day 2
===========================

With contributions by David Hund, derWhity, eonlepapillon, frenkie, Mike_L, MoritzGiessmann, sjoerdly, Thomas L and Hayify

## Marcin Wichary @mwichary , The biggest devils in the smallest details
[Storified by @frenkie](http://storify.com/frenkie/fronteers-12-marcin-wichary-the-biggest-devils-in)
Makes the Google Doodles.

Pac-man (2010) was the watershed moment, with a very nice animated game. The moog synthesizer was also a big success.

Older screens 'shoots' pixel for pixel. Line for line to build the screen.

Racing the Beam / The Future was Here are both interesting books about the history of Atari, Commodore and video gaming.

World fair Doodle: difficult to make it cross-browser, so instead of that just use three different divs and put a very big border around the loupe.

Google is doing user testing to verify if a new interactive doodle is working. They want to support all UI elements that people  get and use theirselves.
They even use the accelerometer of the mac to improve the experience of the users.

Makes joke about IE6. He says he is using IE6 for his presentation as well.
But obviously he isn't ;-).

They try to have the best experience for all of their users.
They make multiple versions of a doodle.
They make a version with <canvas> for browsers that support it.
But a lot of browsers still don't support it. They use DOM elements to get the same effect for that.

A different accelerometer chip in some MacBooks caused the doodles to navigate into an opposite direction.

Marcin liked to support the new Gamepad API for the olympic doodles, however the stable API for Chrome was only released after the olympics. However Chrome was released two weeks earlier, so people could use the Gamepad API.

The weird 'bar' in the middle of Yar's Revenge is actually the source code of the game dumped into video memory!

Google made a 'crushinator' to emulate videos on every device. Akin to Apple doing that for the iPhone animation on their homepage.

The presentation is implemented as a website on the laptop communicating with another one on his phone through a node.js server - so it's all JavaScript.
It even has a command line for debugging purposes.

We used to have hack like the zoom:1. Noadays we have new technology hacks like difference in frames per second difference in each browser.
He shows 8 more.

Creating the doodles always feels a little dirty, as you have to deal with all browser, but: "If it doesn't feel dirty, you are probably behind"

If you look at old computer startup screens, like the one for ZX Spectrum Metroid you could only use two colors for every 8-by-8 grid. So Marcin build a validator for the designer so the image would indeed only have two colors per square.

Marcin states that Googles Homepage is no place for tech-demos. So they always celebrate a date, thing or person, nothing is done for the sake of it.

"I like to pretend that stuff is a little bit more important than it really is"

As long as you are really obsessive about the details people won't complain that much and actually immersve themselves in the project. For example, people actually made patterns for the Google Pac-man doodle.

Somebody actually put the Spectrum doodle on a ZX-Spectrum!

Q&A
Marcin would really like to put his stuff on Github, but he just doesn't have the time.
He suggests we have to keep inspiring him to write a post and tweet him to ask hkm that.

## David DeSandro @desandro, Open Source Ain't Free
[Slides](http://desandro.github.com/open-source-aint-free/ )
[Storified by @frenkie](http://storify.com/frenkie/fronteers-12-david-desandro-keep-it-simple-smartyp)
Note that David changed his talk two days before the conference, so the text on websites and stuff might be off.

View source is the best resource for our work. It's not only looking at the innards of your watch, it's looking at the inner workings of ALL watches.

Frontend development has a very lowbarrier for entry: you just need a browser.

All the tools we use everyday (e.g. HTML5 Boilerplate, Modernizr, Bootstrap) are side/pet projects.

jQuery.masonry was a definitive influence for stuff like Pinterest. Gets used everywhere.

This does have another side: David got huge amounts of emails and issues and pull requests. Mostly support requests from novice users. One support request is fine, but lots of them create the open-source jerkface attitude: it's open source, you figure it out yourself. It took over 8 hours a week to do support requests.

http://desandro.github.com/open-source-aint-free/img/deal.gif

So, David decided to 'put a price on it'. Possible users now have a choice if they think 'it's worth it'. There are already lots of ways to earn money, like the app store, WP premium themes. But where's the market for front-end dev resources?

FancyZoom was one of the first pioneers in this field. For $39 you could get a commercial license. David made Isotope as a commercial fill-in plugin for Masonr with the FancyZoom model.

As David didn't like the available options (Flattr, Paypal, Github Donation) to get paid for his Isotope-project, he decided to create his own company, called MetaFizzy. Sold Isotope ( http://isotope.metafizzy.co/ ) for $37 / License (now $25), made 25% of his income in 2011 of it.

[Scott Robin](http://srobbin.com/) is another developer doing roughly the same. Asks for $17 if you need Email support.

"There is nothing wrong with making money off of honest work", hopes that others will follow his example.

Chris Heilmann: people did pay for Flash images galleries. It seems that the model of open source code, like with Javascript, makes people think that it should be free.
It's not just good enough to put stuff on Github, like in 'tada code!'


## Jeroen Wijering - The State of HTML5 Video
[Storified by @frenkie](http://storify.com/frenkie/fronteers-12-jeroen-wijering-the-state-of-html5-vi)
Development of JW Player (2005): one thing i would never do again: charge a $15 license for YouTube :)

[Me at the zoo, very first YouTube video](http://www.youtube.com/watch?v=jNQXAC9IVRw )

Currently JWPlayer is used by over a million websites, including the white house.

Currently working on version 6, first version defaulting to HTML5 video. We've reached a point where HTML5 video is as good, or better, than Flash video.

    Why HTML5? No Flash on Android / iOS of course. Very easy for developers, and it's a first class citizen so it can be indexed by Google.

Evolution of video on the web: 2005 seperated (Realplayer), 2010 embedded (Flash), 2015 included (HTML5). Over 80% of the world supports HTML5 video.20% is IE8 and feature phones.

MP4 / WebM support is evenly split (chrome/ios/android/ie/ uses MP4, firefox/opera/chrome uses WebM)
. Brendan Eich has said that H264 is required right now to compete on mobile. Fullscreen API is available in all browsers, except IE, even IE 10. However, 'browser full screen' is the same in IE10 because there is no Chrome.

<track> and WebVTT are interesting innovations, available in Safari 6, Chrome 23 and IE 10.
Includes subtitles, captions, descriptions,  chapters,  metadata.

What you can do with WebVTT (code is free and usable):
* [<track> demos] (http://demo.longtailvideo.com/track_demos/captions.html )
* [Chapter markers are available too in Chrome Canary] (http://demo.longtailvideo.com/track_demos/chapters.html )
* [Audio descriptions are available as well] (http://demo.longtailvideo.com/track_demos/descriptions.html )
* [Preview thumbs] (http://demo.longtailvideo.com/track_demos/thumbs.html ).
* [Page interaction] (http://demo.longtailvideo.com/track_demos/page.html )
* [Video search] (http://demo.longtailvideo.com/track_demos/search.html )

[Longtailvideo's HTML5 report] (http://www.longtailvideo.com/html5 )

Q&A
Q:What about protection of your files?
A: Goes hand in hand with streaming. Streaming is not there in HTML5, it's only supported on iOS (HTTP live streaming), Android has no comparable solution. Google and others are working on a solution though, combining encryption and the media stream API (?). On the other hand, how many walls do you actually want? DRM is not used for audio anymore.

Q: What about WebVTT in JW6?
A: We polyfill everything.

Q: Can we style the controls of a HTML5 player?
A: Nope. There are some proposals for a Shadow DOM to style controls.

## Anne van Kesteren, Building the web platform ([@annevk](https://twitter.com/annevk ))
[Storified by @frenkie](http://storify.com/frenkie/fronteers-12-anne-van-kesteren-building-the-web-pl )
Used to work for Opera, unemployed now, still works on W3 webstandards.
WTW.tf lolz
Apparently there is no unified way to describe the different parts in an URL. Code points is something else than bytes. [Anne's spec about legacy encodings](http://encoding.spec.whatwg.org/ )

Unicode is not all the same, as a result browsers have all these big ass maps built in to be able to handle the different unicode sets.

The path of a url is always utf-8, but the query string depends on the document encoding. Always use utf-8 otherwise it can go horribly wrong.
Whether document encoding applies also depends on the context. Eg. CSS & XMLHttpRequest will always encode the query using utf-8.

You can't actually fork the W3 specs or use the text in open source software because of restrictive copyright. Whatwg puts all documentation on github free to use, fork. etc. Standards for the internet should be open and free. [note: draws applause]
"The W3C standards can now be forked/add pull requests etc on Github" https://github.com/w3c

[Live DOM viewer by Ian Hickson (Hixie)](http://software.hixie.ch/utilities/js/live-dom-viewer/ )

Browser layers: (http://www.html5rocks.com/en/tutorials/internals/howbrowserswork/#The_main_flow )
- Paint
- Layout tree (css and dom)
- Render tree
- Parse html to get a DOM tree

http://www.html5rocks.com/en/tutorials/internals/howbrowserswork/

CSS spec talks about markup but the DOM is what matters. CSS + DOM creates the layout tree. (it is not the css object model)
Style rules are matched to nodes using selectors. Each style rule is matched against every dom node.
The body end tag is kinda useless, it doesn't do anything.

IDL's are the interface for all HTML elements
[Example for the <img> element](http://www.whatwg.org/specs/web-apps/current-work/multipage/embedded-content-1.html#the-img-element )

## Phil Hawksworth, I can smell your CMS [@philhawksworth](http://twitter.com/philhawksworth )
[Storified by @frenkie](http://storify.com/frenkie/fronteers-12-phil-hawksworth-i-can-smell-your-cms )
[Slides of this presentation]( https://speakerdeck.com/u/philhawksworth/p/i-can-smell-your-cms )
Works at a marketing agency in London called R/GA.

Agencies have a problem: clients. What clients want is not always what they need.

Developer Resonsibility; big brands, big audience, etc.

Learn by Example: view source. Part of the responsibility of developers and agencies is to move forward and respect the craft of code.

Grolsch.com has a 30MB homepage, just like Beetle.com with lots of scrolling effects. [another example](http://www.milwaukeepolicenews.com/#menu=home-page ).

Clients are afraid to lose their freedom and getting locked in to a certain agency.

The CMS Paradox: is more obvious in large organisations.
If you paid a fortune, then you'll be sure it's a good system!
Flexibility actually doesn't always end up being an actual flexible solutions. It can lead to choice paralysis.
Cost of system becomes proportional to cost of changes. People need to get trained, the ability to make changes has a cost associated with it.
Powerful workflow versus getting shit done.
People at the top like the idea of a controlling system, but the CMS is being used by an intern or a developer in the end, not the CEO. People tend to subvert the system because of all the security and controlling workflows.

Code Smell
CMS's don't just leave smell, they actually stink.
E.g: CMS's expose the technology in urls, such as an URL ending in .php or .asp. This is a type of lock-in.
http://eur.burton.com/on/demandware.store/Sites-Burton_EU-Site/default
That's not a cool URL :)
URL design is a craft, and should be part when developing a website.
Use "the siren of social media" to promote cool urls, your Facebook likes will be gone when an URL changes.

Optimisation
To serve a good performing web page you want a good base (not a CMS).
http://www.episerver.com/ pages has lots of crap in the HTML, like a hidden <form> tag around everything that includes a hash of the view state.
In place editing via ui hooks is classic stink.
Building a site with modules kills performance and leads to a maintenance nightmare and makes Steve Souders cry.
CMSes often give users the power to ruin their site.The core feature that enables this is the WYSIWYG editor. However, WYSYWIG can fuck up designs pretty often, and it's really hard to do it properly, and protect the designed experience and the markup.
Round tripping switching between source and rendered code is not perfect and introduces stink at every go, leading to circular stink.
Instead of WYSIWYG use Markdown. Manages the content, not the design. In that way, constrains can be enablers.
Get the user to manage content and not design, thus keeping the site future friendly and maintainable.

Challence the customer by asking what content *REALLY* needs to be dynamic. YAGNI: Ya Ain't Gonna Need It!

To avoid lockin, another option is to use NoCMS. For instance [Jekyll] ( http://github.com/mojombo/jekyll ) using ruby to spit out static html.

Or Perch CMS, which focuses on the front end, generating the admin part from the tagged front end design.
[Perch](http://grabaperch.com/ ) - A really little CMS
Combine your website with [Varnish] ( https://www.varnish-cache.org/ ) to speed it up.

Challenge CMS stink. Fight for the chance to do good on the web.

## Peter Nederlof - Beyond simple transitions, with a pinch of JavaScript [@peterlof] ( http://twitter.com/peterlof )
[Storified by @frenkie]( http://storify.com/frenkie/fronteers-12-peter-nederlof-beyond-simple-transiti )

Works for Ex Machina, makes second screens.

You can combine more than one property  with transform
transform: translate(50, 50px) rotate(45deg)

transition can have multiple values

Default easing is not linear, it's ease. So, if you're doing anything with code and easing you should really set it to linear. Delays are executed first, before doing the transition itself.

[Peter's Matrix utility]( http://peterned.home.xs4all.nl/matrices/ )

There are two types of animations: static and dynamic. In a dynamic animation the end or start properties are not defined.

Transitions don't trigger reflows because everything can be pre-rendered and they are hardware accelerated. However, because animations are pre-rendered an animation can't be stopped.

getComputedStyle() returns matrix values whenever you call it on an animating element, if you apply that on an element you can stop the element.

This actually works as well for 3d elements.

[Matrix3D code on Github]( https://github.com/peterned/Matrix3D )

However, 'transitionEnd' is not fired when the transition is interrupted.

Flickr found out with their HTML5 app that having a background-image on a div and using translatex/y is a lot faster on an iPad than traditional images with top and left animation. [Source?]

## Rebecca Murphey, JS Minty Fresh: Identifying and Eliminating Smells in Your Code Base ([@rmurphey](https://twitter.com/rmurphey ) - Works for bocoup.com
[Slides](https://github.com/rmurphey/js-minty-fresh)
[Storified by @frenkie](http://storify.com/frenkie/fronteers-12-rebecca-murphey-eliminating-smells-in)

Having a smelly codebase results in:
- harder debugging,
- less mainainability, and
- greater difficulty in adding features.

Even worse, smells beget smells (cf Broken Window Theory; when a neigbourhood starts to decline it starts to get worse and worse)
When encountering smelly code it's too easy to just be oke with it. So be vigilant about it, 'cause you'll never come back and fix it later.

Smells obscure opportunity. It's hard to level up and see opportunities for abstraction, reuse, testing, etc.

Repetetive Code
fix: a function or an object
Don't store your data in your code.

Complex functions
fix: Breakup in more and smaller functions.
if you see this: update(value, null, null, null, null, null, null, null) then you're on to something.

Making sure you can test your functions leads to better code.

Async Acrobatics
fix: deferreds
Ajax is great because you can make asynchronous requests, but if you need multiple succesful responses before you can execute a callback, it seems obvious to daisychain the calls in their callbacks, making it slower (not using the benefit of asynchronicity).
With deferreds you can attach one callback function to multiple AJAX calls (available since jQuery 1.5).

Use the [pipe()](http://api.jquery.com/deferred.pipe/) method of a jQuery.deferred object to specify what the callback result should be.

Html in your JavaScript
fix: templates, e.g. the _.template function from Underscore.js

Demand minty code from yourself & others
eliminate repetition
avoid if/else statements
manage and leverage asynchronousity
keep HTML out of your JS

Work at getting better
read libraries & examples
rewrite code
incorporate code reviews
mainatain and enforce a style guide
write tests for your code