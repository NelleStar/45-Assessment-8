### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    * front end framework that helps build complex front ends but simplified - developed by FB - more flexibility and freedom - blueprint/reuasable code

- What is Babel?
    * compiler to convert JSX to JS - must include as a dependancy 

- What is JSX?
    * syntax extension, HTML code inside JS code- transpiled by Babel - used to describe UI  and produces react elements - passed to a function and stored in variables

- How is a Component created in React?
    * reusuable piece of code that manages its own content, presentation, and behavior - define a function that returns JSX - each component can render other components

- What are some difference between state and props?
    * props or properties are a way of passing values from one component to the next (data, event handlers to children components) which is how components can be reused with different values - How components talks - they are read only and render dynamic data
    * state is info that can be changed and updated - a complex relationship - can pass new values to props - a components memory - initialized and changed using function useState 

- What does "downward data flow" refer to in React?
    * parents can pass props to children

- What is a controlled component?
    * when react controls a component (form/input) react knows the value at any given point and updates state accordingly - more efficient as it controls the state/display and what happens during the user typing

- What is an uncontrolled component?
    * react is not in control and the data is handled by DOM - not common in a react.js app

- What is the purpose of the `key` prop when rendering a list of components?
    * key prop is a unique identifier to each inidividual component - if the data does not have a unique identifier we can use uuid to create one

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    * index changes in an array as items are removed or added - meaning that the id would change as well as these items move about and confuse the components/react 

- Describe useEffect.  What use cases is it used for in React components?
    * a built in hook to run side effects like fetch data, load data, start timer, etc - it accepts 2 arguments - function you want to run and the side effect  - by default it runs after after reload but can change that 

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
    * access and work with the DOM nodes - returns a mutable obj with current property - the return obj persists full lifetime of component - good for IDs mutating the obj does NOT cause a rerender

- When would you use a ref? When wouldn't you use one?
    * Should not use it to manage the DOM unless completely necessary

- What is a custom hook in React? When would you want to write one?
    * can extract reusable component logic into a seperate function and reuse across many components - to share logic, handle repeating tasks - generate JSX
