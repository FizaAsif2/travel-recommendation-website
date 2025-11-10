function showRecommendation() {
  const interest = document.getElementById("interest").value.toLowerCase();
  const result = document.getElementById("result");

  let recommendation = "";

  const destinations = {
    beach: {
      name: "Maldives",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      info: "Relax on pristine beaches and enjoy crystal-clear waters in the Maldives.",
    },
    mountain: {
      name: "Swiss Alps",
      image: "https://images.unsplash.com/photo-1508264165352-258859e62245",
      info: "Experience breathtaking mountain views and skiing adventures in Switzerland.",
    },
    city: {
      name: "Tokyo, Japan",
      image: "https://images.unsplash.com/photo-1505066836043-7f06f3e3e90c",
      info: "Explore cutting-edge technology, cuisine, and culture in Tokyo.",
    },
    desert: {
      name: "Dubai, UAE",
      image: "https://images.unsplash.com/photo-1494510711488-76f1911f7c1c",
      info: "Enjoy desert safaris, luxury shopping, and iconic architecture in Dubai.",
    },
    forest: {
      name: "Amazon Rainforest",
      image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9",
      info: "Discover the diverse wildlife and lush greenery of the Amazon.",
    },
  };

  if (destinations[interest]) {
    const dest = destinations[interest];
    recommendation = `
      <h2>${dest.name}</h2>
      <p>${dest.info}</p>
      <img src="${dest.image}" alt="${dest.name}" />
    `;
  } else if (interest.trim() === "") {
    recommendation = "<p>Please enter an interest to get a recommendation.</p>";
  } else {
    recommendation = `<p>Sorry, no recommendations found for "${interest}". Try 'beach', 'mountain', 'city', 'forest', or 'desert'.</p>`;
  }

  result.innerHTML = recommendation;
}
