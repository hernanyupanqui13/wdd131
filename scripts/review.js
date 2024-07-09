document.addEventListener("DOMContentLoaded", countReviewedProduct);

function countReviewedProduct() {
  // Check if the form was submitted by checking if the URL contains the query parameters 'product' and 'rating'
  const urlParams = new URLSearchParams(window.location.search);
  const wasFormSubmitted = urlParams.get("product") && urlParams.get("rating");

  if (!wasFormSubmitted) {
    document.getElementById("numberOfReviews").textContent =
      localStorage.getItem("reviewedProduct")
        ? localStorage.getItem("reviewedProduct")
        : "0";
    return;
  } else {
    // Retrieve the current count from localStorage and parse it as an integer
    const reviews = parseInt(localStorage.getItem("reviewedProduct"));

    if (!isNaN(reviews)) {
      // If 'reviews' is a number, increment it and save back to localStorage
      localStorage.setItem("reviewedProduct", reviews + 1);
    } else {
      // If 'reviews' is not a number (e.g., null or undefined), initialize it as 1
      localStorage.setItem("reviewedProduct", 1);
    }

    document.getElementById("numberOfReviews").textContent =
      localStorage.getItem("reviewedProduct");
  }
}
