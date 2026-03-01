// DARK MODE (Manual Feature)
const darkBtn = document.getElementById("darkModeToggle");
darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// LOGIN MODAL (AI Feature)
const profileBtn = document.getElementById("profileBtn");
const loginModal = document.getElementById("loginModal");

profileBtn.addEventListener("click", () => {
  loginModal.style.display = "flex";
});

loginModal.addEventListener("click", (e) => {
  if (e.target === loginModal) {
    loginModal.style.display = "none";
  }
});

// SEARCH FILTER (AI Feature)
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const videos = document.querySelectorAll(".video");

searchBtn.addEventListener("click", () => {
  const searchValue = searchInput.value.toLowerCase();

  videos.forEach(video => {
    const title = video.dataset.title;
    if (title.includes(searchValue)) {
      video.style.display = "block";
    } else {
      video.style.display = "none";
    }
  });
});