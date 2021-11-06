---
title: Mimic the good practices in which you believe
tags: engineering, technical leadership, good practices
excerpt: "I’ve been reading two different books: Los 11 caminos al goal and Code Simplicity The first one is about Marcelo Bielsa while the second is giving tips about how to design in software engineering. Those two books inspired me to write this article."
createdAt: 2021-11-06 00:00:00
---

Recently, I’ve been reading two different books: Los 11 caminos al goal by Eduardo Rojas Rojas and Code Simplicity by Max Kanat-Alexander. The first one is about Marcelo Bielsa, one of the great tacticians in the football world while the second is giving tips about how to design in our field: software engineering. Those two books inspired me to write this article.

Marcelo Bielsa inspired great coaches such as Mauricio Pochettino, Jorge Sampaoli or even Pep Guardiola. Despite the fact that Bielsa is seen as a genius in his field by a numerous number of people, he feels like he simply imitates what is properly done. For him, imitation is the basis of education insofar as one imitates things in which one believes. This has remained anchored in me because it corresponds enormously to what I do on a daily basis in my development team.
Code simplicity incorporates many development principles to produce maintainable software. Although I don’t think I learned much from it, it sums up so many principles which I believe to be an interesting read. It is very short and it is always good to do a reminder of the basics
Those two books gave me the idea to share the development principles I have been copying the past years of my career. I try to instill them in other members of my team and I’m a firm believer that it creates more maintainable software.

## Consistency, consistency, consistency

It has been a joke for a while in my previous team but I’ve brought back how important it is to stay consistent. It may seem boring to use the same method when it comes to responding to a redundant technical point, but for me, consistency is one of the pillars of software maintainability. It is important to imagine yourself as a newcomer to your project and to make his life easier for his integration. If he has to learn 3 different libraries to make HTTP calls while he also has to integrate the operations of the team and the software, his onboarding will necessarily be slowed down. It is simply an unnecessary load for him. Of course, sometimes you will have to change the way you do things. Technology evolves and if you don’t evolve with it, you will have a maintainability issue. It needs to be a thoughtful process and you should aim to only have this new way in the long run.

## Boy Scout rule

The boy scout rule is kind of self-explanatory: Always leave the campground cleaner than you found it (Robert C. Martin). Whenever you have to modify your code, look for elements that can be improved within the existing one. Don’t try to make the whole thing perfect, but try to improve one of these elements. In the long run, the whole codebase will improve and make your software better. It could simply be to rename some method or variable more explicitly, add a missing unit test, or revise an unclear algorithm. The sum of small improvements will result in better software.

## You’re not gonna need it (YAGNI Principle)

As said by Max Kanat-Alexander in the book I mentioned earlier: You can’t predict the future. Everybody will agree on that one but as software engineers, we do tend to try and we shouldn’t! We all thought it would be good to add this or that element to a requested feature. We think then that it will necessarily be useful later. Spoiler alert: We are wrong! It is impossible to predict what software will need or how it will be used. You are not Nostradamus, only add what is essential to your software.

## Worse is better

Worse is better means that you should not seek to make your software better by adding all features that you have in mind. It is kind of the corollary of the YAGNI principle. This principle should push you to do little things but do it perfectly. In my current team, we are working on a system that creates price tags in various formats and with an extraordinary number of options. It makes the system pretty hard to maintain and when a new need comes, it takes weeks to put it in production. Happily, we are working on a new project trying to streamline what is mandatory. Be critical of new needs. Will this actually serve users and does it belong to your app’s domain?

## Conclusion

I introduced four principles which can finally be summarized in two. First, be regular: repetitive things should be done the same way and try to improve the bad things little by little. Then do only the bare essentials but do it the best you can. The other important message of the article is to copy the principles that you believe in. Bringing these principles into a team will most likely help your colleagues.

## Links

- [Code Simplicity by Max Kanat-Alexander on Goodreads](https://www.goodreads.com/book/show/13234063-code-simplicity)
- [Los 11 caminos al goal by Eduardo Rojas Rojas on Goodreads](https://www.goodreads.com/book/show/25312357-marcelo-bielsa-los-11-caminos-al-gol)
- [Photo by Kelly Lacy from Pexels](https://www.pexels.com/@km-l-1179532/)
