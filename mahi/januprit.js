const currentUrl = window.location.href;
const nonWwwUrl = "https://domain.com";

// Sirf tabhi check karo jab tum already www par ho
if (currentUrl.includes("www")) {
  // Tum www par ho, ab check karo non-www chalta hai ya nahi
  fetch(nonWwwUrl, { method: 'HEAD' })
    .then(res => {
      if (res.ok) {
        location.href = nonWwwUrl;  // Redirect to non-www
      } else {
        // yahin raho
      }
    })
    .catch(() => {
      // yahin raho
    });
} else {
  // Tum already non-www par ho, kuch mat karo
  console.log("Already on non-www version");
}
