if (
  navigator.userAgent.match(
    /SAMSUNG|SGH-[I|N|T]|GT-[I|P|N]|SM-[N|P|T|Z|G]|SHV-E|SCH-[I|J|R|S]|SPH-L/i
  )
) {
//   alert("it's Samsung default browser");
  // your code for Samsung goes here
  window.location.href = "https://testing.ingeniumedu.com";
}

function iOS() {
  return (
    [
      "iPad Simulator",
      "iPhone Simulator",
      "iPod Simulator",
      "iPad",
      "iPhone",
      "iPod",
    ].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  );
}

if (iOS()) {
  window.location.href = "https://www.apple.com/in/";
} else {
  window.location.href = "https://play.google.com/store/apps/details?id=com.mohit.ingenium.invincible";
}
