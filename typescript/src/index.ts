const patterns = [
    { name: "Strategy Pattern", src: "/strategy-pattern" },
    { name: "Observer Pattern", src: "/observer-pattern" },
    { name: "Decorator Pattern", src: "/decorator-pattern" },
    { name: "Factory Method Pattern", src: "/factory-method-pattern" },
    { name: "Abstract Factory Pattern", src: "/abstract-factory-pattern" },
    { name: "Singleton Pattern", src: "/singleton-pattern" },
    { name: "Command Pattern", src: "/command-pattern" },
    { name: "Adapter Pattern", src: "/adapter-pattern" },
    { name: "Facade Pattern", src: "/facade-pattern" },
];

const links = patterns
    .map(({ name, src }) => {
        return /* html */ `
        <a href=${src}>${name}</a>
    `;
    })
    .join("");

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
document.querySelector("#app")!.innerHTML = links;

if (location.pathname === "/strategy-pattern") {
    import("./StrategyPattern");
} else if (location.pathname === "/observer-pattern") {
    import("./ObserverPattern");
} else if (location.pathname === "/decorator-pattern") {
    import("./DecoratorPattern");
} else if (location.pathname === "/factory-method-pattern") {
    import("./FactoryMethodPattern");
} else if (location.pathname === "/abstract-factory-pattern") {
    import("./AbstractFactoryPattern");
} else if (location.pathname === "/singleton-pattern") {
    import("./SingletonPattern");
} else if (location.pathname === "/command-pattern") {
    import("./CommandPattern");
} else if (location.pathname === "/adapter-pattern") {
    import("./AdapterPattern");
} else if (location.pathname === "/facade-pattern") {
    import("./FacadePattern");
}
