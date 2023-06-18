// Create elements using react
const heading = React.createElement("h1", {
    id: "head1"
}, "Namaste folks from React");
//creating nested react elements
const heading2 = React.createElement("h2", {
    id: "head2"
}, "Namaste Dev");
const container = React.createElement("div", {
    id: "container"
}, [
    heading,
    heading2
]);
//we use arrays to pass multiple children
//root rendering
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

//# sourceMappingURL=index.6bd02f5a.js.map
