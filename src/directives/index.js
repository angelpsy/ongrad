import Vue from "vue";
import "./styles.scss";

Vue.filter("lowerCase", function(value) {
    if (!value) return "";
    value = value.toString();
    return value.toLowerCase();
});

Vue.directive("loading", {
    bind(el, binding, vNode) {
        const loadingEl = document.createElement("div");
        loadingEl.className = "d-loading";
        loadingEl.innerHTML = `
        <div class="d-loading--inner">
          <span></span><span></span><span></span>
        </div>`;
        vNode.context.__$el = el;
        vNode.context.__originalPosition = el.style.position;
        vNode.context.__$loaderEl = loadingEl;
    },
    update(el, { value }, vNode) {
        if (value) {
            if (
                !vNode.context.__originalPosition ||
                vNode.context.__originalPosition === "static"
            ) {
                el.style.position = "relative";
            }
            vNode.context.__$loaderEl.classList.add("d-loading--trans-bg");
            el.prepend(vNode.context.__$loaderEl);
        } else {
            el.style.position = vNode.context.__originalPosition;
            const loadingEl = el.querySelector(".d-loading");
            loadingEl && loadingEl.remove();
        }
    },
    unbind(el, binding, vNode) {
        delete vNode.context.__originalPosition;
        delete vNode.context.__$loaderEl;
    },
});
