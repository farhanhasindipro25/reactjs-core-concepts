1. JSX: Javascript XML.
-Allows to write HTML in React easily

2. Create Component, and return HTML from a component.
- Create a function and return HTML from that function.
- In the main div of className = "app", or the App() component/function, we can create HTML tags using the custom component/function name.
- The returned HTML will set within those custom named tags.

3. Props (Passing dynamic data to react).
- Props are short for properties, which are similar to HTML attributes.
- The components/functions take the word 'props' as parameters.
- The custom HTML tags created in the name of the component within the App() components can take props in any custom name as per need like HTML attributes.
- Syntax of accessing the data dynamically within the component/function:
{props.propsName}
- This gives the similar in look, different in data look.

4. Creating multiple components from an array of objects/arrays/objects.
- A new and certain code snippet can be contained within '{}'.
- the array of objects/array/objects is mapped, and in the map function's return statement, the custom named component JSX is written with appropriate props.
- The map function iterates as usual through the data structure and returns each element in the name of the variable.
- Within the component/function, dynamically props are passed as per the names.

5. useState.
- Allows to store state variables within functional components.
- Syntax: const [stateVariable, setStateVariable] = useState(initialValue);
- The state variable represents entities that will change their state.
- setStateVariable helps to set the new state that the state variable will accomplish
- Initial value can be anything.
- The setStateVariable may be used in any arrow functions as needed.
- Within the return statement of the component,
the state variable may be used directly and dynamically, along with the arrow functions that return the changes in the setStateVariable.

6. useEffect.
- Syntax: useEffect(arrowFunction, dependencies)
- Syntax: useEffect(()=>{},[]).
- Without dependency: Renders in an infinite loop.
useEffect(() => {
    fetch('url')
      .then(res => res.json())
      .then(data => console.log(data))
})
- To solve this, add an empty array in place of what is supposed to hold the dependencies.
useEffect(() => {
    fetch('url')
      .then(res => res.json())
      .then(data => console.log(data))
},[])


Summary: To load external data from API
1. Declare a state using "useState()".
2. Apply useEffect(anonymous function, empty array).
3. Load Data inside the anonymous function(fetch).
4. Connect with state by calling setStateVariable(loadedData).
5. Show the data using map() function. Using components are allowed.

