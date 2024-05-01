import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement(
//     "h1",
//     {
//       id: "title",
//       style: {
//         background:"grey",
//       },
//       className:"title"
//     },
//     "heading"
//   );
//   const heading1 = React.createElement(
//     "h1",
//     {
//       id: "title",
//     },
//     "heading1"
//   );
  
//   const container = React.createElement(
//     "div",
//     {
//       id: "container",
//     },
//     [heading, heading1]
//   );

  // const jsxHeading = <h1 id="heading">NAMASTE REACT</h1>
  // // create root using createRoot
  // controle.log(jsxHeading);
  // const root = ReactDOM.createRoot(document.getElementById("root"));
  // // passing react element inside root
  // root.render(jsxHeading);

  const heading = (
    <h1 id="h1" key="h1">
      This is JSX
    </h1>
  );
  const elem=<span>SANDYA</span>
  
  // React Component 
  // Functional component - new way of writing component 
  // Class component - old way of writing component
  
  // Title component is functional component
  const Title = () => {
    return (
      <h1 id="title" key="title">Namaste React</h1>
    )
  }
  // Header component is functional component
  const HeaderComponent = function (){
    return (
      <div>
        <Title/>
        {elem}
        {/* we can also use <Title()> */}
        {/* we can also use <Title></Title> */}
        {console.log(10)}
        <h2>{100+200}</h2>
      <h1>Namaste React Functional component</h1>
      <h2>This is h2 tag</h2>
      </div>
    )
  }
  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render(<HeaderComponent/>);