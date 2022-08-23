import "./styles.css";

const result = (s: string) => {
  document.getElementById("js-result")?.innerHTML = s;
};

document.querySelector("button")?.addEventListener("click", (e) => {
  const attr = e.target?.dataset?.attr || "";
  const data = JSON.parse(attr);
  if (window.webkit?.messageHandlers?.observer?.postMessage) {
    window.webkit.messageHandlers.observer.postMessage(data);
  }

  result(`click on button with data-attr ${JSON.stringify(data)}`);
});
