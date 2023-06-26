// Listen for a click event on any anchor element with the class 'job-card-container__link'
document.addEventListener('click', function(event) {
  if(event.target.matches('.job-card-container__link')) {
    // The user clicked on a job link

    // Fetch the webpage HTML
    var html = document.documentElement.outerHTML;

    // Parse the HTML with Cheerio
    var $ = cheerio.load(html);

    // Select the job descriptions
    var jobDescriptions = $('#job-details').map((i, el) => {
      return $(el).text();
    }).get();

    // Log the job descriptions
    console.log(jobDescriptions);
  }
});
