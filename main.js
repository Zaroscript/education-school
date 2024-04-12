// Change navbar style onscroll

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle(
      "window-scroll",
      window.scrollY >
        0 /* Forcing the toggle happend when the scroll y access is larger than 0 */
    );

  document
    .querySelector(".nav__logo")
    .classList.toggle(
      "active",
      window.scrollY >
        0 /* Forcing the toggle happend when the scroll y access is larger than 0 */
    );
  console.log();
});

// Open navbar onclick

const navMenu = document.querySelector(".nav__menu");
const openBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

const openMenu = () => {
  navMenu.style.display = "flex";

  openBtn.style.display = "none";

  closeBtn.style.display = "block";
};

const closeMenu = () => {
  navMenu.style.display = "none";

  closeBtn.style.display = "none";

  openBtn.style.display = "block";
};

openBtn.addEventListener("click", openMenu);

closeBtn.addEventListener("click", closeMenu);

// show/hide faq answer

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    // Change icon

    const icon = faq.querySelector(".faq__icon i");
    if (icon.className === "fa-solid fa-plus") {
      icon.className = "fa-solid fa-minus";
    } else {
      icon.className = "fa-solid fa-plus";
    }
  });
});

// Show scrolling icon

const scrollIcon = document.querySelector(".scroll__icon");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollIcon.style.display = "flex";
  } else {
    scrollIcon.style.display = "none";
  }
});

// Generate Courses in Courses section
const courseSection = document.getElementById("courses");

const courses = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Simagnam, beatae reiciendis temporibus nostrum in dignissimos?",
    image: "./images/course1.jpg",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Simagnam, beatae reiciendis temporibus nostrum in dignissimos?",
    image: "./images/course2.jpg",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Simagnam, beatae reiciendis temporibus nostrum in dignissimos?",
    image: "./images/course3.jpg",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Simagnam, beatae reiciendis temporibus nostrum in dignissimos?",
    image: "./images/course4.jpg",
  },
  {
    id: 5,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Simagnam, beatae reiciendis temporibus nostrum in dignissimos?",
    image: "./images/course5.jpg",
  },
  {
    id: 6,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Simagnam, beatae reiciendis temporibus nostrum in dignissimos?",
    image: "./images/course6.jpg",
  },
  {
    id: 7,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Simagnam, beatae reiciendis temporibus nostrum in dignissimos?",
    image: "./images/course7.jpg",
  },
  {
    id: 8,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Simagnam, beatae reiciendis temporibus nostrum in dignissimos?",
    image: "./images/course8.jpg",
  },
  {
    id: 9,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Simagnam, beatae reiciendis temporibus nostrum in dignissimos?",
    image: "./images/course9.jpg",
  },
  {
    id: 10,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Simagnam, beatae reiciendis temporibus nostrum in dignissimos?",
    image: "./images/course10.jpg",
  },
  {
    id: 11,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Simagnam, beatae reiciendis temporibus nostrum in dignissimos?",
    image: "./images/course11.jpg",
  },
  {
    id: 12,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Simagnam, beatae reiciendis temporibus nostrum in dignissimos?",
    image: "./images/course12.jpg",
  },
  {
    id: 13,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Simagnam, beatae reiciendis temporibus nostrum in dignissimos?",
    image: "./images/course13.jpg",
  },
  {
    id: 14,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Simagnam, beatae reiciendis temporibus nostrum in dignissimos?",
    image: "./images/course14.jpg",
  },
  {
    id: 15,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Simagnam, beatae reiciendis temporibus nostrum in dignissimos?",
    image: "./images/course15.jpg",
  },
  {
    id: 16,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Simagnam, beatae reiciendis temporibus nostrum in dignissimos?",
    image: "./images/course16.jpg",
  },
  {
    id: 17,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Simagnam, beatae reiciendis temporibus nostrum in dignissimos?",
    image: "./images/course17.jpg",
  },
  {
    id: 18,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Simagnam, beatae reiciendis temporibus nostrum in dignissimos?",
    image: "./images/course18.jpg",
  },
];

const generateCourses = () => {
  courses.forEach(({ title, description, image }) => {
    // Create the courses parent box
    const courseBox = document.createElement("article");
    courseBox.className = "course";

    // Create the course image box
    const imageBox = document.createElement("div");
    imageBox.className = "course__image";
    const courseImage = document.createElement("img");
    courseImage.src = image;
    courseImage.loading = "lazy";
    courseImage.alt = title
    imageBox.append(courseImage);

    // Create course info dev
    const courseInfoBox = document.createElement("div");
    courseInfoBox.className = "course__info";
    const courseTitle = document.createElement("h4");
    courseTitle.innerHTML = title;
    courseInfoBox.append(courseTitle);
    const courseDescription = document.createElement("p");
    courseDescription.innerHTML = description;
    courseInfoBox.append(courseDescription);
    const courseLink = document.createElement("a");
    courseLink.href = "courses.html";
    courseLink.className = "btn primary-btn";
    courseLink.innerHTML = "Learn More";
    courseInfoBox.append(courseLink);

    // Append all

    courseBox.append(imageBox);
    courseBox.append(courseInfoBox);
    courseSection.append(courseBox);
  });
};

generateCourses();
