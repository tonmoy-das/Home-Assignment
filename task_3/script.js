// Function to toggle the visibility of the user menu
function toggleUserMenu() {
  const userMenu = document.getElementById("user-menu");
  userMenu.classList.toggle("hidden");
}

// Add click event listener to the profile dropdown
document
  .getElementById("profile-picture-dropdown")
  .addEventListener("click", toggleUserMenu);
