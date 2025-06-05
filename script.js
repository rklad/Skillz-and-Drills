$(document).ready(function () {
  // Function to load lessons from a given JSON file
  function loadLessons(jsonFile) {
    fetch(jsonFile)
      .then(response => {
        if (!response.ok) throw new Error("File not found");
        return response.json();
      })
      .then(data => {
        const accordion = $('#lessonsAccordion');
        accordion.empty(); // Clear previous content

        data.forEach((lesson, index) => {
          const lessonId = `lesson${index}`;

          const html = `
            <li class="accordionbg">
              <input type="radio" name="accordion" id="${lessonId}"}>
              <label for="${lessonId}" class="text-white kanittext text-center fw-bold d-block">${lesson.lessonName}</label>
              <div class="content text-white kanittext">
                <p>${lesson.description}</p>
                ${lesson.ageLevel ? `<p><strong>Age Level:</strong> ${lesson.ageLevel}</p>` : ''}
                ${lesson.singleOrTeam ? `<p><strong>Single or Team:</strong> ${lesson.singleOrTeam}</p>` : ''}
                ${lesson.singlePrice ? `<p><strong>Single Price:</strong> ${lesson.singlePrice}</p>` : ''}
                ${lesson.teamPrice ? `<p><strong>Team Price:</strong> ${lesson.teamPrice}</p>` : ''}
                ${lesson.playerRequirement ? `<p><strong>Player Requirement:</strong> ${lesson.playerRequirement}</p>` : ''}
                ${lesson.location ? `<p><strong>Location:</strong> ${lesson.location}</p>` : ''}
              </div>
            </li>
          `;
          accordion.append(html);
        });
      })
      .catch(error => console.error("Error loading lessons:", error));
  }

  // Load default (baseball) lessons on page load
  loadLessons('data/baseball.json');
  $('.baseball').addClass("lessonsRedText");

  // Click handlers to load the correct lessons and toggle styles
  $('.softball').on("click", function () {
    $('.baseball').removeClass("lessonsRedText");
    $(this).addClass("lessonsRedText");
    loadLessons('data/softball.json');
  });

  $('.baseball').on("click", function () {
    $('.softball').removeClass("lessonsRedText");
    $(this).addClass("lessonsRedText");
    loadLessons('data/baseball.json');
  });
});

// SERVICES CARD
// Add some interactive animations
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.service-card');
            
            // Animate cards on scroll
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }, index * 100);
                    }
                });
            });

            // Initial setup for animation
            cards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(card);
            });

            // Add click interactions
            cards.forEach(card => {
                card.addEventListener('click', function() {
                    // Create a ripple effect
                    const ripple = document.createElement('div');
                    ripple.style.position = 'absolute';
                    ripple.style.borderRadius = '50%';
                    ripple.style.background = 'rgba(255,255,255,0.3)';
                    ripple.style.transform = 'scale(0)';
                    ripple.style.animation = 'ripple 0.6s linear';
                    ripple.style.left = '50%';
                    ripple.style.top = '50%';
                    ripple.style.width = '100px';
                    ripple.style.height = '100px';
                    ripple.style.marginLeft = '-50px';
                    ripple.style.marginTop = '-50px';
                    
                    this.appendChild(ripple);
                    
                    setTimeout(() => {
                        ripple.remove();
                    }, 600);
                });
            });
        });

        // Add CSS for ripple animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);