//  MailChimp popup
function showPopup() {
  !(function (c, h, i, m, p) {
    (m = c.createElement(h)),
      (p = c.getElementsByTagName(h)[0]),
      (m.async = 1),
      (m.src = i),
      p.parentNode.insertBefore(m, p);
  })(
    document,
    "script",
    "https://chimpstatic.com/mcjs-connected/js/users/d1e8df275b56a19336b30543d/91bc149acb072c8b5e69b7dea.js"
  );

  //unsetting the cookie
  document.cookie =
    "MCPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie =
    "MCPopupSubscribed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
