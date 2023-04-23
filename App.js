const tags = [React.createElement("h1", {id : "heading"}, "I am heading 1"), React.createElement("h2", {id : "heading"}, "I am heading 2")];

const child = [React.createElement("div", {id : "child1"},tags ), React.createElement("div", {id: "child2"},tags)];

const parent = React.createElement("div" , {id: "parent"} ,child);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);