---
title: Highlights of Devoxx France 2022
tags: Devoxx, Green-it, Tests, Reactive Programming
excerpt: On April 20, 21, and 22, Devoxx France 2002 took place. This gathering, which brings together more than 200 talks on software development, is both very intense and very rewarding. I was lucky to be among the 42 people sent by Decathlon Technology to this essential moment of monitoring.
createdAt: 2022-04-29 00:00:00
---


_On April 20, 21, and 22, Devoxx France 2002 took place. This gathering, which brings together more than 200 talks on software development, is both very intense and very rewarding. I was lucky to be among the 42 people sent by Decathlon Technology to this essential moment of monitoring._

_Coming back from this event, I wanted to highlight 5 talks that stuck in my mind even after those 3 intense days._

## I’m almost done! (David Laize)

This presentation was a 15-minutes quickie and goes back to a situation that we have all experienced. During the team’s synchro meeting, a member repeats for several days: “I’m almost finished”. The speaker goes back to the reasons for this behavior (overconfidence, commitment bias) and why it is necessary to remedy it: reduce tension in the team and make the person a better developer. Finally, on the solutions side, he proposes pair and mob programming with the person in difficulty and to make the team a place where psychological safety reigns.

I can’t wait to share these 15 minutes with my own team!

Link : https://www.youtube.com/watch?v=MYP3cEhVT9Q

## Understanding the issues of resources and energy consumption in the digital sector (Quentin Adam and Pierre Beyssac)

This presentation was the one that had the most impact on me! The subject of green IT is an important subject to me and I try to document myself regularly. In particular, I had taken the time to read “Deploying digital sobriety” written by the Shift Project (https://theshiftproject.org/article/deploying-la-sobriete-numerique-rapport-shift/). It describes, among other things, the consumption of video streaming and its impact on the environment.

The two speakers began by indicating how much of a problem global warming is. Then comes the criticism of the report from The Shift Project by mentioning an important error on a confusion between bit and bytes which distorts the calculations of the report. The explanation of the operation of the electrical network then attempts to show the error made by the Shift Project of wanting to use averages in the use of the electrical network. Finally, the argument, in my opinion fallacious, to indicate that these reports are provided by people who sell this kind of work and that it is, therefore, necessary to alert. This argument, coming from the CEO of a cloud provider, had a comical effect on me.

The presentation, on the other hand, does not deny the high cost of the construction of electronic components but considers that the resources which could be lacking would be replaced by innovation. One of the speakers went so far as to tell the listener that he can change his smartphone every year if he takes care to put his previous device back into the second-hand circuit. I must admit that I was simply lost by these arguments which do not make sense to me today.

As you will have understood, this presentation will not have convinced me. Only the criticism of the Shift Project method appealed to me. Admittedly, the calculations are simplified. Is this tool completely useless? I will need to rewatch this presentation to deepen the subject. The presentation was quite disturbing with a speech going against what seems to me to be a consensus. The dissonance with the keynotes where green IT had his place was very strange.

Link : https://www.youtube.com/watch?v=gxWwxqIrCa8

## How Betclic uses its data lake to generate load tests and simulate sporting events (Nicolas Jozwiak and Etienne Puissant)

I had the opportunity to attend two presentations from Betclic, one on the way to create their load tests and the second, more global, on their journey before a heavy load during Euro 2020. What I want to highlight here is a simple idea: the precise use of production traffic data to create consistent load test scenarios.

The need to hold the load on very short events (a simple goal in a football evening can lead to many connections at a given time), they decided to make available all the logs in a data lake. This information is then processed to generate load test scenarios for Gatling (https://gatling.io/) In this way, each new development can be tested with scenarios identical to reality. A pretty simple idea that I had never thought of.

Link : https://www.youtube.com/watch?v=GJ2IH3jXEGw

## Towards a culture where everyone is responsible for unavailability (Emmanuel Bernard)

Emmanuel Bernard, a Java champion who worked on Quarkus and is currently working on a RedHat product that provides Kafka clusters in the cloud, gives us his valuable opinion on how to define and manage your SLOs (Service Level Objectives) and why it must concern everyone in the development team.

He advises starting by defining what you want to offer to the user. It is sometimes difficult and it is for this reason that it is necessary to deploy quickly, so as to measure and form convictions on the functioning of its own service. Modify the SLOs based on these initial experiences and adapt them over the life of your product once the elements of friction are eliminated.

The alerting and monitoring system are obviously essential when it comes to respecting an SLO. I liked the idea of ​​a “budget” that lets you know if the alert is important. It is typically a simple way to define when to trigger a duty call: if x% of the budget is consumed within the hour then the duty call must be triggered.

Link : https://www.youtube.com/watch?v=r4sY02CtmfY

## Migrating from Spring MVC to Spring WebFlux (Mathilde Lorrain and Hugo Caupert)

Reactive programming has been highlighted for some time in the various readings I’ve had. This paradigm avoids the concurrent processing limit related to the number of threads. Since I did not have the opportunity to test it myself, this presentation allowed me to form an opinion very quickly. The two speakers first presented a scenario for migrating a Spring MVC application to Spring WebFlux by describing the various steps, pain points (mainly database access and cache management), and results. It turns out that the migration in question was a failure. No performance gain due to a bottleneck located at the PostgreSQL database level. WebFlux clearly has advantages in fairly specific conditions (they gave the example of a data aggregation service) but is not made to replace MVC which still has its own purpose.

Link : https://www.youtube.com/watch?v=QSH-vJyh9as

## Conclusion

As you will have understood, this conference allowed me to discover and learn many things. This kind of event makes it possible to touch on many themes and even to increase the thirst for knowledge in our vast field that is IT. I can’t wait to discover other presentations that I couldn’t attend and I can only recommend that you subscribe to their youtube channel on which all the presentations will be uploaded: https://www.youtube.com/c/DevoxxFRvideos/

## Links

- Devoxx France website : https://www.devoxx.fr/en/
- Youtube Channel : https://www.youtube.com /c/DevoxxFRvideos/
- The Shift Project : https://theshiftproject.org/
- Gatling : https://gatling.io/