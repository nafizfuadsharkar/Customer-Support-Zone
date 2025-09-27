<body>
  <div style="max-width: 800px; margin: 50px auto; font-family: Arial, sans-serif; line-height: 1.6;">
    <h1>React Questions and Answers</h1>

    <div>
      <h2>1. What is JSX, and why is it used?</h2>
      <p>JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It makes it easier to create and visualize the structure of the UI in React. JSX is used because it allows developers to describe the UI declaratively and is transformed into regular JavaScript calls that React understands.</p>
    </div>

    <div>
      <h2>2. What is the difference between State and Props?</h2>
      <p>State is a way to store data that belongs to a specific component and can change over time. Props are inputs passed to a component from its parent, which cannot be modified by the receiving component. State is mutable within the component, whereas props are read-only.</p>
    </div>

    <div>
      <h2>3. What is the useState hook, and how does it work?</h2>
      <p>The useState hook is a function in React that allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update that state. When you call the update function, React re-renders the component with the new state value.</p>
    </div>

    <div>
      <h2>4. How can you share state between components in React?</h2>
      <p>State can be shared between components by lifting it up to a common parent. The parent holds the state and passes it down to child components via props. Child components can also communicate changes back to the parent using functions passed as props.</p>
    </div>

    <div>
      <h2>5. How is event handling done in React?</h2>
      <p>Event handling in React is done using camelCase event attributes on elements. You pass a function as the event handler rather than a string. React automatically handles event delegation and ensures that the handler works consistently across browsers.</p>
    </div>
  </div>
</body>
