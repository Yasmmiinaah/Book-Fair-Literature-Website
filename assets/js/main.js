document.addEventListener('DOMContentLoaded', function () {
   const searchForm = document.querySelector('.search-form');

   if (document.querySelector('#search-btn')) {
      document.querySelector('#search-btn').onclick = () => {
         searchForm.classList.toggle('active');
      }
   }

   let loginForm = document.querySelector('.login-form-container');

   if (document.querySelector('#login-btn')) {
      document.querySelector('#login-btn').onclick = () => {
         loginForm.classList.toggle('active');
      }
   }

   if (document.querySelector('#close-login-btn')) {
      document.querySelector('#close-login-btn').onclick = () => {
         loginForm.classList.remove('active');
      }
   }

   window.onscroll = () => {
      if (searchForm) searchForm.classList.remove('active');

      if (document.querySelector('.header .header-2')) {
         if (window.scrollY > 80) {
            document.querySelector('.header .header-2').classList.add('active');
         } else {
            document.querySelector('.header .header-2').classList.remove('active');
         }
      }
   }

   function initializeOnLoad() {
      if (document.querySelector('.header .header-2')) {
         if (window.scrollY > 80) {
            document.querySelector('.header .header-2').classList.add('active');
         } else {
            document.querySelector('.header .header-2').classList.remove('active');
         }
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
         if (iconsContainer) {
            iconsContainer.appendChild(userIcon);

            const menu = document.getElementById("user-menu");
            if (menu && userIcon) {
               userIcon.addEventListener("click", () => {
                  menu.style.display = menu.style.display === "block" ? "none" : "block";
               });
            }

            const welcomeElement = document.getElementById("welcome-name");
            if (welcomeElement) {
               welcomeElement.textContent = `Welcome, ${storedUser.fName}`;
            }
         }
      }

      checkIfBookmarked();
      fadeOut();
   }

   function fadeOut() {
      if (typeof loader === 'function') {
         setTimeout(loader, 4000);
      }
   }

   if (typeof Swiper !== 'undefined') {
      if (document.querySelector(".books-slider")) {
         new Swiper(".books-slider", {
            loop: true,
            centeredSlides: true,
            autoplay: {
               delay: 9500,
               disableOnInteraction: false,
            },
            breakpoints: {
               0: {
                  slidesPerView: 1
               },
               768: {
                  slidesPerView: 2
               },
               1024: {
                  slidesPerView: 3
               },
            },
         });
      }

      if (document.querySelector(".featured-slider")) {
         new Swiper(".featured-slider", {
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
                  slidesPerView: 1
               },
               450: {
                  slidesPerView: 2
               },
               768: {
                  slidesPerView: 3
               },
               1024: {
                  slidesPerView: 4
               },
            },
         });
      }

      if (document.querySelector(".arrivals-slider")) {
         new Swiper(".arrivals-slider", {
            spaceBetween: 10,
            loop: true,
            centeredSlides: true,
            autoplay: {
               delay: 9500,
               disableOnInteraction: false,
            },
            breakpoints: {
               0: {
                  slidesPerView: 1
               },
               768: {
                  slidesPerView: 2
               },
               1024: {
                  slidesPerView: 3
               },
            },
         });
      }

      if (document.querySelector(".book-club-slider")) {
         new Swiper(".book-club-slider", {
            spaceBetween: 10,
            loop: true,
            centeredSlides: true,
            autoplay: {
               delay: 9500,
               disableOnInteraction: false,
            },
            breakpoints: {
               0: {
                  slidesPerView: 1
               },
               768: {
                  slidesPerView: 2
               },
               1024: {
                  slidesPerView: 3
               },
            },
         });
      }

      if (document.querySelector(".reviews-slider")) {
         new Swiper(".reviews-slider", {
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
                  slidesPerView: 1
               },
               768: {
                  slidesPerView: 2
               },
               1024: {
                  slidesPerView: 3
               },
            },
         });
      }

      if (document.querySelector(".blogs-slider")) {
         new Swiper(".blogs-slider", {
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
                  slidesPerView: 1
               },
               768: {
                  slidesPerView: 2
               },
               1024: {
                  slidesPerView: 3
               },
            },
         });
      }

      if (document.querySelector(".interview-slider")) {
         new Swiper(".interview-slider", {
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
                  slidesPerView: 1
               },
               768: {
                  slidesPerView: 2
               },
               1024: {
                  slidesPerView: 3
               },
            },
         });
      }
   }

   if (document.getElementById("show-register")) {
      document.getElementById("show-register").onclick = () => {
         document.getElementById("login-form").style.display = "none";
         document.getElementById("reset-form").style.display = "none";
         document.getElementById("register-form").style.display = "block";
      };
   }

   if (document.getElementById("show-login") && document.getElementById("show-login-again")) {
      document.getElementById("show-login").onclick =
         document.getElementById("show-login-again").onclick = () => {
            document.getElementById("register-form").style.display = "none";
            document.getElementById("reset-form").style.display = "none";
            document.getElementById("login-form").style.display = "block";
         };
   }

   if (document.getElementById("show-reset")) {
      document.getElementById("show-reset").onclick = () => {
         document.getElementById("login-form").style.display = "none";
         document.getElementById("register-form").style.display = "none";
         document.getElementById("reset-form").style.display = "block";
      };
   }

   if (document.getElementById("register-form")) {
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
         localStorage.setItem("userName", `${fName} ${lName}`);
         alert("Account created successfully!");
         this.reset();
         document.getElementById("register-form").style.display = "none";
         document.getElementById("login-form").style.display = "block";
      });
   }

   if (document.getElementById("login-form")) {
      document.getElementById("login-form").addEventListener("submit", function (e) {
         e.preventDefault();
         const email = this.querySelectorAll("input")[0].value.trim();
         const password = this.querySelectorAll("input")[1].value.trim();
         const storedUser = JSON.parse(localStorage.getItem("user"));

         if (storedUser && email === storedUser.email && password === storedUser.password) {
            document.querySelector(".login-form-container").classList.remove("active");

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

            userIcon.addEventListener("click", () => {
               const menu = document.getElementById("user-menu");
               menu.style.display = (menu.style.display === "block") ? "none" : "block";
            });

            document.getElementById("welcome-name").textContent = `Welcome, ${storedUser.fName}`;
         } else {
            alert("Incorrect email or password.");
         }
      });
   }

   if (document.getElementById("reset-form")) {
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
   }

   window.logout = function () {
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
   };

   function checkUserLoginStatus() {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      return !!storedUser;
   }

   function showLoginForm() {
      const loginForm = document.querySelector(".login-form-container");
      if (loginForm) {
         loginForm.classList.add("active");
      }
   }

   const tabButtons = document.querySelectorAll('.tab-button');
   const tabContents = document.querySelectorAll('.tab-content');

   tabButtons.forEach(button => {
      button.addEventListener('click', () => {
         tabButtons.forEach(btn => btn.classList.remove('active'));
         tabContents.forEach(content => content.classList.remove('active'));

         button.classList.add('active');

         const tabId = button.getAttribute('data-tab');
         const tabContent = document.getElementById(tabId);
         if (tabContent) {
            tabContent.classList.add('active');
         }
      });
   });

   const stars = document.querySelectorAll('.star-rating i');
   let currentRating = 0;

   stars.forEach(star => {
      star.addEventListener('mouseover', function () {
         const rating = parseInt(this.getAttribute('data-rating'));
         highlightStars(rating);
      });

      star.addEventListener('mouseleave', function () {
         highlightStars(currentRating);
      });

      star.addEventListener('click', function () {
         currentRating = parseInt(this.getAttribute('data-rating'));
         highlightStars(currentRating);
      });
   });

   function highlightStars(rating) {
      stars.forEach(star => {
         const starRating = parseInt(star.getAttribute('data-rating'));
         if (starRating <= rating) {
            star.classList.remove('fa-regular');
            star.classList.add('fa-solid');
         } else {
            star.classList.remove('fa-solid');
            star.classList.add('fa-regular');
         }
      });
   }

   const reviewForm = document.querySelector('.review-form');
   if (reviewForm) {
      reviewForm.addEventListener('submit', function (e) {
         e.preventDefault();

         const isLoggedIn = checkUserLoginStatus();
         if (!isLoggedIn) {
            alert('Please log in to submit a review');
            showLoginForm();
            return;
         }

         if (currentRating === 0) {
            alert('Please select a rating');
            return;
         }

         const reviewText = this.querySelector('textarea').value.trim();
         if (reviewText === '') {
            alert('Please write your review');
            return;
         }

         addNewReview(currentRating, reviewText);

         this.reset();
         currentRating = 0;
         highlightStars(0);
         alert('Thank you for your review!');
      });
   }

   function addNewReview(rating, text) {
      const userName = localStorage.getItem('userName') || 'Amr Yasser';
      const today = new Date();
      const date = today.toLocaleDateString('en-US', {
         year: 'numeric',
         month: 'long',
         day: 'numeric'
      });

      const reviewsContainer = document.getElementById('reviews');
      if (!reviewsContainer) return;

      const reviewElement = document.createElement('div');
      reviewElement.classList.add('review');

      let starsHTML = '';
      for (let i = 1; i <= 5; i++) {
         if (i <= rating) {
            starsHTML += '<i class="fa-solid fa-star"></i>';
         } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
            starsHTML += '<i class="fa-regular fa-star-half-stroke"></i>';
         } else {
            starsHTML += '<i class="fa-regular fa-star"></i>';
         }
      }

      reviewElement.innerHTML = `
            <div class="review-header">
                <div class="review-user">
                    <img src="assets/images/reviews/pic-1.jpg" alt="User Avatar">
                    <div class="name">${userName}</div>
                </div>
                <div class="review-date">${date}</div>
            </div>
            <div class="review-rating">
                ${starsHTML}
            </div>
            <div class="review-content">
                ${text}
            </div>
        `;

      const writeReview = document.querySelector('.write-review');
      if (writeReview) {
         reviewsContainer.insertBefore(reviewElement, writeReview);
      } else {
         reviewsContainer.appendChild(reviewElement);
      }

      updateReviewStats(rating);
   }

   function updateReviewStats(newRating) {
      const ratingDisplay = document.querySelector('.book-info .rating span');
      if (ratingDisplay) {
         const currentText = ratingDisplay.textContent;
         const match = currentText.match(/\(([0-9.]+)\/5 - (\d+) reviews\)/);

         if (match) {
            let avgRating = parseFloat(match[1]);
            let reviewCount = parseInt(match[2]);

            const newAvg = ((avgRating * reviewCount) + newRating) / (reviewCount + 1);
            const roundedAvg = Math.round(newAvg * 10) / 10;

            ratingDisplay.textContent = `(${roundedAvg}/5 - ${reviewCount + 1} reviews)`;

            updateRatingStars(roundedAvg);
         }
      }
   }

   function updateRatingStars(rating) {
      const ratingStars = document.querySelectorAll('.book-info .rating i');

      if (ratingStars.length === 5) {
         ratingStars.forEach((star, index) => {
            star.className = '';

            if (index < Math.floor(rating)) {
               star.className = 'fa-solid fa-star';
            } else if (index === Math.floor(rating) && rating % 1 >= 0.3) {
               star.className = 'fa-regular fa-star-half-stroke';
            } else {
               star.className = 'fa-regular fa-star';
            }
         });
      }
   }

   const bookmarkBtn = document.getElementById('bookmark-btn');
   const compareBtn = document.getElementById('compare-btn');

   if (bookmarkBtn) {
      bookmarkBtn.addEventListener('click', function () {
         const isLoggedIn = checkUserLoginStatus();
         if (!isLoggedIn) {
            alert('Please log in to bookmark this book');
            showLoginForm();
            return;
         }

         const icon = this.querySelector('i');
         if (icon.classList.contains('fa-regular')) {
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
            saveBookmark(true);
            alert('Book added to your bookmarks!');
         } else {
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular');
            saveBookmark(false);
            alert('Book removed from your bookmarks!');
         }
      });
   }

   if (compareBtn) {
      compareBtn.addEventListener('click', function () {
         const bookInfoElement = document.querySelector('.book-info h2');
         if (bookInfoElement) {
            const bookTitle = bookInfoElement.textContent;
            saveToCompare(bookTitle);
            alert(`"${bookTitle}" added to comparison list!`);
         }
      });
   }

   function saveBookmark(isBookmarked) {
      const bookInfoElement = document.querySelector('.book-info');
      if (!bookInfoElement) return;

      const bookData = {
         title: bookInfoElement.querySelector('h2')?.textContent || 'Unknown Book',
         author: bookInfoElement.querySelector('.author')?.textContent || 'Unknown Author',
         price: bookInfoElement.querySelector('.price-original')?.textContent || '$0.00',
         imageUrl: document.querySelector('.book-image img')?.src || '',
         bookmarked: isBookmarked,
         timestamp: new Date().toISOString()
      };

      let bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');

      bookmarks = bookmarks.filter(book => book.title !== bookData.title);

      if (isBookmarked) {
         bookmarks.push(bookData);
      }

      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
   }

   function saveToCompare(bookTitle) {
      let compareList = JSON.parse(localStorage.getItem('compareList') || '[]');

      if (!compareList.includes(bookTitle)) {
         compareList.push(bookTitle);
         localStorage.setItem('compareList', JSON.stringify(compareList));
      }
   }

   function checkIfBookmarked() {
      const bookTitle = document.querySelector('.book-info h2')?.textContent;
      if (!bookTitle) return false;

      const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
      const isBookmarked = bookmarks.some(book => book.title === bookTitle);

      if (isBookmarked && bookmarkBtn) {
         const icon = bookmarkBtn.querySelector('i');
         if (icon) {
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
         }
      }
   }

   const contactForm = document.querySelector('.contact-form');
   if (contactForm) {
      contactForm.addEventListener('submit', function (event) {
         event.preventDefault();
         alert('Your message has been successfully sent!');
      });
   }

   document.querySelectorAll('.fa-xmark-large').forEach(btn => {
      btn.addEventListener('click', function (e) {
         e.preventDefault();
         const slide = this.closest('.swiper-slide');
         if (slide) {
            slide.remove();
         }
      });
   });

   initializeOnLoad();
});