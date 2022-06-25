# State Machines
https://jonbellah.com/articles/intro-state-machines

For example, a Promise is a state machine. It has a finite, deterministic set of states that it can exist in: PENDING, REJECTED, or FULFILLED.

Statecharts, which I will reference a few times here, are a formalism that extend state machines to include three core concepts: hierarchy, parallelism, and communication. With statecharts, we can model each discrete piece of logic in our application with a state machine, then visualize how each of those pieces fit together to form a complete application. If you’re interested in learning more about statecharts, check out the paper that David Harel wrote in 1987 that started it all off.

It’s also worth noting that between 2005 and 2015, the W3C actually standardized SCXML (State Chart extensible Markup Language). David Khourshid, who maintains xstate, has put a strong emphasis on ensuring that xstate is compatible with SCXML as much as possible.


https://kentcdodds.com/blog/implementing-a-simple-state-machine-library-in-javascript

Actual State Machine Example Code.