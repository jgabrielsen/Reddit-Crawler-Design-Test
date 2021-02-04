# Reddit-Crawler-Design-Test
A non-functional design for a Reddit Crawler created for an interview process design test.

> ## Design a Reddit Crawler
> We want to allow our users to easily access information that matters to them, even though their days are packed, and time is short to search all the different categories manually.
> 
> Design a website that allows users to stay up to date in their areas of interest (e.g. news, movies, music) in a glimpse. Use reddit channels as the source for information. The page should be available through a simple web-interface that can be accessed on desktop as well as from mobile devices. Also, think of additional features that help finding the right articles/posts fast or would improve the website in general.
> 
> Use these channels for your mockups:
> * News: https://www.reddit.com/r/worldnews/
> * Technology: https://www.reddit.com/r/technology/
> * Funny: https://www.reddit.com/r/funny/
> 
> ### Technical aspect:
> * Use any design tool of your preference
> * Use an existing design system of your choice for your designs
> * Create a prototype and share it with us
> * If you’re unsure about something or need more specs, just improvise. You have the freedom.
> * Do not spend more than half a day on this task.

---

I spent about 4 hours on this project. As for tools, I created the prototype in HTML, CSS, and Javascript. This project uses [Bulma](https://bulma.io/), the fonts [Oswald](https://fonts.google.com/specimen/Oswald) and [Quattrocento](https://fonts.google.com/specimen/Quattrocento), [FontAwesome](https://fontawesome.com/), and [jQuery](https://jquery.com/).


I made a couple assumptions about what I would have discovered during a research phase:
1. Users of this app wanted a simpler, cleaner exerience than Reddit offers (or else they'd just use Reddit).
2. Users aren't interested in the voting/karma features of Reddit, just in seeing what Reddit has determined to be the most relevant content.
3. Despite this, users are aware of Reddit (and likely somewhat internet savvy) and might be interested in the conversation there for a given piece of content.
4. This site would have it's own authentication system, but that would be standard enough that it didn't merit inclusion within the scope of this test.

For the UI, in absence of a style guide or pattern library, I mostly just used the default styles offered by the CSS framework Bulma, and added some fonts from Google that I thought looked nice and were highly legible.

At this stage, my next steps would be:
* Write, schedule, and conduct user tests for several scenarios:
  * Searching for content
  * Filtering existing content
  * Sorting existing content
  * Adding another subreddit
  * Removing a subreddit
  * Viewing a piece of content
  * Viewing the Reddit post that a piece of content originated from
* Bring styling in line with branding, or begin establishing a style guid and branding if none exists.
* Add a couple more interactive features for testing fidelity, specifically actually being able to add and remove subreddits, not just turn them on and off, as well as making the sorting buttons actually switch. I found myself getting a bit too caught up wrestling with javascript when I figured that's neither my strength nor what you're testing 😂
* Spend a bit more time optimzing on different devices. I build this prototype mobile-first and with responsiveness in mind, but it could definitely use some more fine tuning.
* Confer with the project lead and developers to consider what the next non-design steps would be and how my piece connects with theirs.