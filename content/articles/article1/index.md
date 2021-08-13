---
title: Should I test private methods direclty ?
tags: testing, good practices
excerpt: While working on legacy code a colleague used reflection to unit test private methods. I needed to gather my thoughts as to why this is a bad practice.
createdAt: 2021-08-03 00:00:00
---


## Why this question poped up ?

During a code review, one of my new coworker used reflection in order to test some private methods. To give some context, we are working on a bit of legacy code were some part of the software lack unit tests and in order for that to change we decided to add tests for every methods that we would tweak while developing new features.

I have to admit that the idea of testing private methods never came to mind so even though I was a bit taken off by it instinctively, I did not had any good argument against it so I did what every developer do when he has a question : ask Google ! This article is simply a sum up of my reads and what my conviction is after reading them.

## Pros and con of testing private methods

On legacy code with a lack of code coverage, it may feel like a good idea. Instead of having no coverage for a complete class, it is easier to test small pieces of code rather than testing some gigantic one that does everything and that you did not even wrote. Nonetheless, doing so comes with a price and I'll explain.

It probably hits you already with how I described the situation but if you feel like it's a good idea to test private methods, it's because the class itself has some design flaws. When it comes to mind, think about the single responsability principle : do this class has only one purpose ? Most of the time, you will understand that the class does too much and that some refactoring needs to be done. You will extract some of its code to other classes that will expose public methods and make your software easier to understand for others and easier for you to test.

Keep in mind that your unit tests are the first client to your public api. Testing your code through it shows how it should be used. A great tests suite is a great documentation. It evolves with your code by design and can be a great help for newcomers to understand how a class has been designed.

Another great argument against testing private method is that you will create redundancy in your tests. Since you will both test the private methods and the public ones, your test suite will trigger your private method twice : first by their own test and then by the public ones. Those tests will look really look like one another since it will test the same expected results. Having this kind of bloated tests suite will slow you down eventually. Moreso, it will make refactoring harder and will defeat one of the main purpose of unit tests : make refactoring smooth and easy ! Needing a simple change in one private method now makes you getting at least 2 broken tests instead of one. It will have repercussions on your team velocity.

## Conclusion

In my opinion, testing private methods directly should be used only when working on legacy code with a sense of urgency. It should be seen as technical debt and as such, it should be paid as soon as possible. In other case, it should be banned given all the flaws it will bring to the codebase.

## Links

- [Stack overflow thread with multiple arguements that goes for and against](https://stackoverflow.com/questions/105007/should-i-test-private-methods-or-only-public-ones)
- [Anthony Sciamanna that is against](https://anthonysciamanna.com/2016/02/14/should-private-methods-be-tested.html)
- [The renegade coder that is for](https://therenegadecoder.com/code/its-okay-to-test-private-methods/)
