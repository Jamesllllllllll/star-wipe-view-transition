function showBrowserNotice() {
  if (!document.startViewTransition) {
    const notice = document.createElement("div");
    notice.className = "browser-notice";
    notice.textContent =
      "View Transitions API not supported - using fallback navigation";
    document.body.appendChild(notice);
  }
}
