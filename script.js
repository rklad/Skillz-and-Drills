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
  loadLessons('baseball.json');
  $('.baseball').addClass("lessonsRedText");

  // Click handlers to load the correct lessons and toggle styles
  $('.softball').on("click", function () {
    $('.baseball').removeClass("lessonsRedText");
    $(this).addClass("lessonsRedText");
    loadLessons('softball.json');
  });

  $('.baseball').on("click", function () {
    $('.softball').removeClass("lessonsRedText");
    $(this).addClass("lessonsRedText");
    loadLessons('baseball.json');
  });
});