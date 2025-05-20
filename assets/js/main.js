searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
   searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () => {
   loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () => {
   loginForm.classList.remove('active');
}

window.onscroll = () => {

   searchForm.classList.remove('active');

   if (window.scrollY > 80) {
      document.querySelector('.header .header-2').classList.add('active');
   } else {
      document.querySelector('.header .header-2').classList.remove('active');
   }

}

window.onload = () => {

   if (window.scrollY > 80) {
      document.querySelector('.header .header-2').classList.add('active');
   } else {
      document.querySelector('.header .header-2').classList.remove('active');
   }

   fadeOut();

}

function fadeOut() {
   setTimeout(loader, 4000);
}

var swiper = new Swiper(".books-slider", {
   loop: true,
   centeredSlides: true,
   autoplay: {
      delay: 9500,
      disableOnInteraction: false,
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      768: {
         slidesPerView: 2,
      },
      1024: {
         slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".featured-slider", {
   spaceBetween: 10,
   loop: true,
   centeredSlides: true,
   autoplay: {
      delay: 9500,
      disableOnInteraction: false,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      450: {
         slidesPerView: 2,
      },
      768: {
         slidesPerView: 3,
      },
      1024: {
         slidesPerView: 4,
      },
   },
});

var swiper = new Swiper(".arrivals-slider", {
   spaceBetween: 10,
   loop: true,
   centeredSlides: true,
   autoplay: {
      delay: 9500,
      disableOnInteraction: false,
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      768: {
         slidesPerView: 2,
      },
      1024: {
         slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".book-club-slider", {
   spaceBetween: 10,
   loop: true,
   centeredSlides: true,
   autoplay: {
      delay: 9500,
      disableOnInteraction: false,
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      768: {
         slidesPerView: 2,
      },
      1024: {
         slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".reviews-slider", {
   spaceBetween: 10,
   grabCursor: true,
   loop: true,
   centeredSlides: true,
   autoplay: {
      delay: 9500,
      disableOnInteraction: false,
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      768: {
         slidesPerView: 2,
      },
      1024: {
         slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".blogs-slider", {
   spaceBetween: 10,
   grabCursor: true,
   loop: true,
   centeredSlides: true,
   autoplay: {
      delay: 9500,
      disableOnInteraction: false,
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      768: {
         slidesPerView: 2,
      },
      1024: {
         slidesPerView: 3,
      },
   },
});
var swiper = new Swiper(".interview-slider", {
   spaceBetween: 10,
   grabCursor: true,
   loop: true,
   centeredSlides: true,
   autoplay: {
      delay: 9500,
      disableOnInteraction: false,
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      768: {
         slidesPerView: 2,
      },
      1024: {
         slidesPerView: 3,
      },
   },
});

// Toggle between login/register/reset forms
document.getElementById("show-register").onclick = () => {
   document.getElementById("login-form").style.display = "none";
   document.getElementById("reset-form").style.display = "none";
   document.getElementById("register-form").style.display = "block";
};

document.getElementById("show-login").onclick =
   document.getElementById("show-login-again").onclick = () => {
      document.getElementById("register-form").style.display = "none";
      document.getElementById("reset-form").style.display = "none";
      document.getElementById("login-form").style.display = "block";
   };

document.getElementById("show-reset").onclick = () => {
   document.getElementById("login-form").style.display = "none";
   document.getElementById("register-form").style.display = "none";
   document.getElementById("reset-form").style.display = "block";
};

// Register user
document.getElementById("register-form").addEventListener("submit", function (e) {
   e.preventDefault();
   const fName = this.querySelectorAll("input")[0].value.trim();
   const lName = this.querySelectorAll("input")[1].value.trim();
   const email = this.querySelectorAll("input")[2].value.trim();
   const password = this.querySelectorAll("input")[3].value.trim();

   const user = {
      fName,
      lName,
      email,
      password
   };
   localStorage.setItem("user", JSON.stringify(user));
   alert("Account created successfully!");
   this.reset();
   document.getElementById("register-form").style.display = "none";
   document.getElementById("login-form").style.display = "block";
});

// Login user
document.getElementById("login-form").addEventListener("submit", function (e) {
   e.preventDefault();
   const email = this.querySelectorAll("input")[0].value.trim();
   const password = this.querySelectorAll("input")[1].value.trim();
   const storedUser = JSON.parse(localStorage.getItem("user"));

   if (storedUser && email === storedUser.email && password === storedUser.password) {
      // Hide login form
      document.querySelector(".login-form-container").classList.remove("active");

      // Replace login button with new user icon
      const iconsContainer = document.querySelector(".icons");
      const oldLoginBtn = document.getElementById("login-btn");
      if (oldLoginBtn) oldLoginBtn.remove();

      const userIcon = document.createElement("i");
      userIcon.id = "user-icon";
      userIcon.className = "fa-solid fa-user";
      userIcon.style.fontSize = "2.5rem";
      userIcon.style.marginLeft = "1.5rem";
      userIcon.style.color = "var(--darkblue)";
      userIcon.style.cursor = "pointer";
      iconsContainer.appendChild(userIcon);

      // Show user menu toggle logic
      userIcon.addEventListener("click", () => {
         const menu = document.getElementById("user-menu");
         menu.style.display = (menu.style.display === "block") ? "none" : "block";
      });

      // Show user name
      document.getElementById("welcome-name").textContent = `Welcome, ${storedUser.fName}`;
   } else {
      alert("Incorrect email or password.");
   }
});

// Reset password
document.getElementById("reset-form").addEventListener("submit", function (e) {
   e.preventDefault();
   const email = this.querySelector("input").value.trim();
   const storedUser = JSON.parse(localStorage.getItem("user"));

   const msg = document.getElementById("reset-msg");
   msg.style.display = "block";

   if (storedUser && email === storedUser.email) {
      msg.textContent = "Reset link has been sent to your email.";
      msg.style.color = "green";
   } else {
      msg.textContent = "Email not found.";
      msg.style.color = "red";
   }
});

// Logout function
function logout() {
   document.getElementById("user-menu").style.display = "none";
   const userIcon = document.getElementById("user-icon");
   if (userIcon) userIcon.remove();

   const iconsContainer = document.querySelector(".icons");
   const newLoginBtn = document.createElement("div");
   newLoginBtn.id = "login-btn";
   newLoginBtn.className = "fa-thin fa-user";
   iconsContainer.appendChild(newLoginBtn);

   newLoginBtn.onclick = () => {
      document.querySelector(".login-form-container").classList.add("active");
   };
}
window.onload = () => {
   if (window.scrollY > 80) {
      document.querySelector('.header .header-2').classList.add('active');
   } else {
      document.querySelector('.header .header-2').classList.remove('active');
   }

   const storedUser = JSON.parse(localStorage.getItem("user"));
   if (storedUser) {
      const loginBtn = document.getElementById("login-btn");
      if (loginBtn) loginBtn.remove();

      const userIcon = document.createElement("i");
      userIcon.id = "user-icon";
      userIcon.className = "fa-solid fa-user";
      userIcon.style.fontSize = "2.5rem";
      userIcon.style.marginLeft = "1.5rem";
      userIcon.style.color = "var(--darkblue)";
      userIcon.style.cursor = "pointer";

      const iconsContainer = document.querySelector(".icons");
      iconsContainer.appendChild(userIcon);

      const menu = document.getElementById("user-menu");
      userIcon.addEventListener("click", () => {
         menu.style.display = menu.style.display === "block" ? "none" : "block";
      });

      document.getElementById("welcome-name").textContent = `Welcome, ${storedUser.fName}`;
   }

   fadeOut();
};
/*
let currentRating = 0;

function highlight(stars) {
  const starsList = document.querySelectorAll('.star-rating i');
  starsList.forEach((star, index) => {
    star.classList.toggle('fa-solid', index < stars);
    star.classList.toggle('fa-regular', index >= stars);
    if (index < stars) star.classList.add('active');
    else star.classList.remove('active');
  });
}

function resetStars() {
  highlight(currentRating);
}

function rate(stars) {
  currentRating = stars;
  highlight(currentRating);
}
function submitReview() {
  const reviewBox = document.getElementById("user-review");
  const reviewText = reviewBox.value.trim();
  if (reviewText === "") {
    alert("Please write a review before submitting.");
    return;
  }

  const stars = currentRating || 0;
  const starsIcons = "⭐".repeat(stars);
  const newReview = document.createElement("div");
  newReview.className = "review-item";
  newReview.innerHTML = `<strong>You:</strong> ${reviewText} ${starsIcons}`;

  const list = document.getElementById("reviews-list");
  list.prepend(newReview);

  reviewBox.value = "";
  currentRating = 0;
  resetStars();
}
*/
document.querySelector('.contact-form').addEventListener('submit', function (event) {
   event.preventDefault();
   alert('Your message has been successfully sent!');
});
