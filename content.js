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
