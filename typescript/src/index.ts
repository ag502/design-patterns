const patterns = [{ name: "Strategy Pattern", src: "/strategy-pattern" }];

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
}
