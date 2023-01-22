const patterns = [
    { name: "Strategy Pattern", src: "/strategy-pattern" },
    { name: "Observer Pattern", src: "/observer-pattern" },
    { name: "Decorator Pattern", src: "/decorator-pattern" },
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
}
