1. What problem does the context API help solve?

Context API helps solve the problem of props drilling by making state available without having to call props

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are events where state is changed and re-rendered, reducers are how the action is implemented, and store is where the values of state are held.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state lives at the top level of an application, component state resides within a component. Application state is good to use when data needs to be accessed throughout the application. Component state is more useful when data only needs to be accessed by a few components.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk allows us to return a function instead of an action object.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I really like context API because it feels really intuitive. I like programing that feels that way.
