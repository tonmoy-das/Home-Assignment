const userMenu = document.getElementById("user-menu");
const profilePictureBtn = document.getElementById("profile-picture-dropdown");

// Function to toggle the visibility of the user menu

function toggleUserMenu() {
  userMenu.classList.toggle("hidden");
}

// Add click event listener to the profile dropdown

profilePictureBtn.addEventListener("click", toggleUserMenu);
