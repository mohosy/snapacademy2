const drones = [
  {
    name: "Fixed-Wing Drone (Agriculture)",
    speed: "30-70 mph (48-113 kph)",
    weight: "11-44 lbs (5-20 kg)",
    specialAbility: "Long flight times for surveying large fields",
    batteryLife: "Up to 2 hours",
    description: "These drones are ideal for agriculture because they can cover large areas quickly and efficiently. They are also designed to be stable in windy conditions, which is important for spraying crops.",
    image: "drones/drone1.jpg",
    price: 3500
  },
  {
    name: "Security Drone",
    speed: "20-35 mph (32-56 kph)",
    weight: "4-11 lbs (1.8-5 kg)",
    specialAbility: "Equipped with spotlights, thermal cameras, and speakers for nighttime patrols",
    batteryLife: "30-45 minutes",
    description: "Security drones are used for patrolling property, deterring crime, and monitoring crowds. They can be equipped with a variety of sensors and cameras to provide real-time surveillance footage.",
    image: "drones/drone2.jpg",
    price: 899
  },
  {
    name: "Light Show Drone",
    speed: "10-20 mph (16-32 kph)",
    weight: "0.5-2 lbs (0.23-0.9 kg)",
    specialAbility: "Synchronized LED lights for aerial light shows",
    batteryLife: "15-20 minutes",
    description: "Light show drones are designed for entertainment purposes, featuring synchronized LED lights for dazzling aerial displays. They are often used in concerts, events, and celebrations to create mesmerizing light shows in the sky.",
    image: "drones/drone3.jpg",
    price: 1599
  },
  {
    name: "Blackhawk Military Drone",
    speed: "60-80 mph (97-129 kph)",
    weight: "25-50 lbs (11-23 kg)",
    specialAbility: "Stealth technology for covert operations, equipped with advanced surveillance systems and weapons payload capability",
    batteryLife : "30-60 minutes",
    description: "The Blackhawk Military Drone is a formidable aerial vehicle designed for tactical reconnaissance and combat missions. Its sleek black design and advanced technology make it virtually undetectable during operations. With a versatile payload capacity, it can be equipped for various missions, including surveillance, target acquisition, and even offensive strikes.",
    image: "drones/drone4.jpg",
    price: 50000
  },
  {
    name: "Multi-Purpose Quadcopter",
    speed: "40-60 mph (64-97 kph)",
    weight: "3-5 lbs (1.4-2.3 kg)",
    specialAbility: "Modular design with detachable robot arms for versatile applications",
    batteryLife: "20-30 minutes",
    description: "The Multi-Purpose Quadcopter is a versatile aerial platform equipped with quadcopters and detachable robot arms. It is designed for a wide range of applications, including search and rescue, payload delivery, and aerial manipulation tasks. With its modular design, it can be customized for various missions.",
    image: "drones/drone5.jpg",
    price: 3999
  },

  {
    name: "Agri-Sprayer Drone",
    speed: "20-40 mph (32-64 kph)",
    weight: "30-50 lbs (14-23 kg)",
    specialAbility: "Equipped with quadcopters and precision sprayer for agricultural applications",
    batteryLife: "Up to 45 minutes",
    description: "The Agri-Sprayer Drone is designed for precision agriculture, with quadcopters and a precision sprayer system for efficient crop spraying. Its large payload capacity and extended battery life make it suitable for covering large agricultural areas.",
    image: "drones/drone6.jpg",
    price: 2499
  },
  {
    name: "Search and Rescue Drone",
    speed: "20-40 mph (32-64 kph)",
    weight: "4-11 lbs (1.8-5 kg)",
    specialAbility: "Equipped with thermal cameras, spotlights, and loudspeakers for locating missing persons in emergencies",
    batteryLife: "30-45 minutes",
    description: "Search and rescue drones are used to locate missing persons in emergencies. They can be equipped with thermal cameras to detect body heat, even in low-light conditions. Spotlights and loudspeakers can also be used to help guide lost people to safety.",
    image: "drones/drone7.jpg",
    price: 10000
  },
  {
    name: "Selfie Drone",
    speed: "15-25 mph (24-40 kph)",
    weight: "0.5-1.5 lbs (0.23-0.68 kg)",
    specialAbility: "Compact size, facial recognition, and gesture control for easy selfies",
    batteryLife: "5-7 minutes",
    description: "Selfie drones are small, lightweight, and easy to fly. They are perfect for capturing aerial selfies and group photos. Some selfie drones even have facial recognition and gesture control features, making it easy to capture the perfect shot.",
    image: "drones/drone8.jpg",
    price: 15000
  },
  {
    name: "Inspection Drone",
    speed: "15-25 mph (24-40 kph)",
    weight: "2-11 lbs (0.9-5 kg)",
    specialAbility: "Equipped with high-resolution cameras and LiDAR for detailed inspections of buildings, infrastructure, and wind turbines",
    batteryLife: "20-40 minutes",
    description: "Inspection drones are used for close-up inspections of difficult-to-reach areas. They can be equipped with high-resolution cameras and LiDAR (Light Detection and Ranging) to create detailed 3D models of structures.",
    image: "drones/drone9.jpg",
    price: 15000
  },
  {
    name: "SkyCruiser",
    speed: "25-50 mph (40-80 kph)",
    weight: "6-15 lbs (2.7-6.8 kg)",
    specialAbility: "Combines the versatility of a drone with the agility of a helicopter",
    batteryLife: "Up to 60 minutes",
    description: "The SkyCruiser is a hybrid drone-helicopter designed for search and rescue operations. With its unique design resembling a bike with propellers, it offers the agility of a helicopter combined with the versatility of a drone. Equipped with thermal cameras, spotlights, and loudspeakers, it's ideal for locating missing persons in emergencies.",
    image: "drones/drone10.jpg",
    price: 12999
  }
];

let cartItems = []; // Array to store drones added to the cart

const currentDroneImage = document.getElementById("currentDrone");
const nextButton = document.getElementById("nextButton");
const droneChoice = document.getElementById("droneChoice");
const taskChoice = document.getElementById("taskChoice");
const droneResponse = document.getElementById("droneResponse");
const addToCartButton = document.getElementById("addToCartButton");
const cartIcon = document.getElementById("cartIcon");
const cardContainer = document.getElementById("card-container");

let currentImageIndex = 0; // Keeps track of the current image displayed

// Event listener for the "Next" button to cycle through drone images
nextButton.addEventListener("click", function() {
  currentImageIndex++;
  if (currentImageIndex >= drones.length) {
      currentImageIndex = 0;
  }
  currentDroneImage.src = drones[currentImageIndex].image;
  droneChoice.selectedIndex = currentImageIndex;
  updateDroneDescription();
});

// Function to update drone description based on selected options
function updateDroneDescription() {
  const chosenDroneIndex = droneChoice.selectedIndex;
  const chosenTaskIndex = taskChoice.selectedIndex;
  const chosenDrone = drones[chosenDroneIndex];
  const chosenTask = taskChoice.options[chosenTaskIndex].text;

  // Updated description to include speed and weight
  droneResponse.textContent = `For task "${chosenTask}" with ${chosenDrone.name}: ${chosenDrone.description}. Speed: ${chosenDrone.speed}, Weight: ${chosenDrone.weight}`;
}

// Event listeners for dropdown changes to update drone description
droneChoice.addEventListener("change", updateDroneDescription);
taskChoice.addEventListener("change", updateDroneDescription);

// Function to add selected drone to the cart
function addToCart() {
  const chosenDroneIndex = droneChoice.selectedIndex;
  const chosenDrone = drones[chosenDroneIndex];
  cartItems.push(chosenDrone);
  cartIcon.src = "drones/shopping-cart.png";
}

// Event listener for the "Add to Cart" button
addToCartButton.addEventListener("click", addToCart);

// Function to calculate total price of items in the cart
function calculateTotalPrice() {
  let totalPrice = 0;
  cartItems.forEach(drone => {
      totalPrice += drone.price;
  });
  const taxRate = 0.0725;
  const tax = totalPrice * taxRate;
  const totalPriceWithTax = totalPrice + tax;
  return totalPriceWithTax;
}

// Update cart total whenever a drone is added to the cart
addToCartButton.addEventListener("click", function() {
  const totalPriceWithTax = calculateTotalPrice();
  const cartTotalElement = document.getElementById("cartTotal");
  cartTotalElement.textContent = "Total Price (including CA tax of 7.25%): $" + totalPriceWithTax.toFixed(2);
});

// Function to create card for each drone and append it to card container
function createDroneCard(drone) {
  const templateCard = document.querySelector(".card");
  const newCard = templateCard.cloneNode(true);
  newCard.querySelector(".card-image").src = drone.image;
  newCard.querySelector(".card-title").textContent = drone.name;
  newCard.querySelector(".card-description").textContent = drone.description;
  newCard.querySelector(".card-price").textContent = `$${drone.price.toFixed(2)}`;
  newCard.querySelector(".add-to-cart-button").addEventListener("click", function() {
      cartItems.push(drone);
      cartIcon.src = "drones/shopping-cart.png";
      const totalPriceWithTax = calculateTotalPrice();
      const cartTotalElement = document.getElementById("cartTotal");
      cartTotalElement.textContent = "Total Price (including CA tax of 7.25%): $" + totalPriceWithTax.toFixed(2);
  });
  newCard.style.display = "block";
  cardContainer.appendChild(newCard);
}

// Function to display all drone cards
function showCards() {
  cardContainer.innerHTML = "";
  drones.forEach(drone => {
      createDroneCard(drone);
  });
}

// Call showCards function to display all drone cards when page is loaded
document.addEventListener("DOMContentLoaded", showCards);

// Event listener for droneChoice dropdown
droneChoice.addEventListener("change", function() {
  const selectedDroneIndex = droneChoice.selectedIndex;
  currentDroneImage.src = drones[selectedDroneIndex].image;
  updateDroneDescription();
});

// Function to display the cart items
function viewCart() {
  const cartItemsContainer = document.getElementById("cartItemsContainer");
  // Clear the container before populating it with new cart items
  cartItemsContainer.innerHTML = "";

  let cartListHTML = "<ul>";
  cartItems.forEach((item, index) => {
    cartListHTML += `<li>${index + 1}. ${item.name} - $${item.price.toFixed(2)}</li>`;
  });
  cartListHTML += "</ul>";

  // Append the cart list to the container
  cartItemsContainer.innerHTML = cartListHTML;
}

// Event listener for the "View Cart" button
document.getElementById("viewCartButton").addEventListener("click", viewCart);

// Function to remove items from the cart
function removeItemsFromCart() {
  let itemsToRemove = prompt("Enter the numbers of the drones you want to remove (separated by commas):");
  if (itemsToRemove) {
    itemsToRemove = itemsToRemove.split(",").map(num => parseInt(num.trim()));
    itemsToRemove.sort((a, b) => b - a); // Sort in descending order to avoid index mismatch after removal
    itemsToRemove.forEach(index => {
      if (index >= 1 && index <= cartItems.length) {
        cartItems.splice(index - 1, 1); // Remove item from the cartItems array
      }
    });
    // Update the cart total
    const totalPriceWithTax = calculateTotalPrice();
    const cartTotalElement = document.getElementById("cartTotal");
    cartTotalElement.textContent = "Total Price (including CA tax of 7.25%): $" + totalPriceWithTax.toFixed(2);
    // Refresh the displayed cart items
    viewCart();
  }
}

// Event listener for the "Remove Items" button
document.getElementById("removeItemsButton").addEventListener("click", removeItemsFromCart);


// Function to update drone description based on selected options
function updateDroneDescription() {
  const chosenDroneIndex = droneChoice.selectedIndex;
  const chosenTaskIndex = taskChoice.selectedIndex;
  const chosenDrone = drones[chosenDroneIndex];
  const chosenTask = taskChoice.options[chosenTaskIndex].text;

  // Updated description to include speed and weight
  droneResponse.textContent = `For task "${chosenTask}" with ${chosenDrone.name}: ${chosenDrone.description}. Speed: ${chosenDrone.speed}, Weight: ${chosenDrone.weight}`;
}


// Function to add selected drone to the cart
function addToCart() {
  const chosenDroneIndex = droneChoice.selectedIndex;
  const chosenDrone = drones[chosenDroneIndex];
  cartItems.push(chosenDrone);
  cartIcon.src = "drones/shopping-cart.png";
  viewCart(); // Call viewCart function to update cart list immediately after adding a drone
}
