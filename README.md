1. What is JSX, and why is it used?
   
JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It makes it easier to create and visualize the structure of the UI in React. JSX is used because it allows developers to describe the UI declaratively and is transformed into regular JavaScript calls that React understands.

2. What is the difference between State and Props?
   
State is a way to store data that belongs to a specific component and can change over time. Props are inputs passed to a component from its parent, which cannot be modified by the receiving component. State is mutable within the component, whereas props are read-only.

3. What is the useState hook, and how does it work?
   
The useState hook is a function in React that allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update that state. When you call the update function, React re-renders the component with the new state value.

4. How can you share state between components in React?
   
State can be shared between components by lifting it up to a common parent. The parent holds the state and passes it down to child components via props. Child components can also communicate changes back to the parent using functions passed as props.

5. How is event handling done in React?
    
Event handling in React is done using camelCase event attributes on elements. You pass a function as the event handler rather than a string. React automatically handles event delegation and ensures that the handler works consistently across browsers.
