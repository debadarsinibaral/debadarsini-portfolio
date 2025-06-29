$(document).ready(function () {
    var names = ["Software Developer", "PHP Developer", "Web Developer", "UI/UX Developer"];
    var i = 0, j = 0, isDeleting = false;

    function type() {
        var current = names[i];
        var text = current.substring(0, j);
        $('#typed').text(text);

        if (!isDeleting) {
            if (j < current.length) {
                j++;
                setTimeout(type, 100);
            } else {
                isDeleting = true;
                setTimeout(type, 1500);
            }
        } else {
            if (j > 0) {
                j--;
                setTimeout(type, 50);
            } else {
                isDeleting = false;
                i = (i + 1) % names.length;
                setTimeout(type, 300);
            }
        }
    }

    type(); // Start the animation
});

// var sticky = document.querySelector('.sticky');

// if (sticky.style.position !== 'sticky') {
//   var stickyTop = sticky.offsetTop;

//   document.addEventListener('scroll', function () {
//     window.scrollY >= stickyTop ?
//       sticky.classList.add('fixed') :
//       sticky.classList.remove('fixed');
//   });
// }

document.addEventListener('DOMContentLoaded', function () {
    var logo = document.querySelector('#new-class');

    document.addEventListener('scroll', function () {
      if (window.scrollY >= 70) { // Adjust this threshold
        logo.classList.add('nav-transition');
      } else {
        logo.classList.remove('nav-transition');
      }
    });
});

// Nav menu Toggle button
    const menuToggle = document.getElementById('menuToggle');
    const submenu = document.querySelector('.nav-menu');
    const icon = menuToggle.querySelector('i'); 
    menuToggle.addEventListener('click', () => {
    submenu.classList.toggle('open');  
    if (submenu.classList.contains('open')) {
        icon.classList.remove('bi-chevron-down');
        icon.classList.add('bi-chevron-up');  
    } else {
        icon.classList.remove('bi-chevron-up');
        icon.classList.add('bi-chevron-down'); 
    }
    });


// Light/Dark Mode
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("themeToggle");
    // const themeLabel = document.getElementById("themeLabel");
    const navbarToggler = document.querySelector(".navbar");
    const brandLogo = document.querySelector("#nav-logo");
    const htmlElement = document.documentElement;

    if (!toggleButton) return;

    toggleButton.addEventListener("click", function () {
        const currentTheme = htmlElement.getAttribute("data-bs-theme") || "dark";
        const newTheme = currentTheme === "light" ? "dark" : "light";

        // Update brand logo
        if (brandLogo) {
        brandLogo.src = newTheme === "dark"
            ? "images/logo-light.png"
            : "images/logo-dark.png";
        }

        // Set theme attributes
        htmlElement.setAttribute("data-bs-theme", newTheme);
        document.body.setAttribute("data-theme", newTheme);
        toggleButton.setAttribute("data-theme", newTheme);

        // Update theme label
        // if (themeLabel) {
        //     themeLabel.textContent = newTheme === "light" ? "Light Mode" : "Dark Mode";
        // }

        // Update navbar theme classes
        if (navbarToggler) {
            navbarToggler.classList.toggle("bg-white", newTheme === "light");
            navbarToggler.classList.toggle("bg-black", newTheme === "dark");
            navbarToggler.classList.toggle("text-black", newTheme === "light");
            navbarToggler.classList.toggle("text-white", newTheme === "dark");
        }
    });
});