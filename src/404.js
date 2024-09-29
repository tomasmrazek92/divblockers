// 404 ESC
let errorItem = $('._404_error-item').clone();

let errorMsg = [
  'Oops, something broke... Probably a div block copy 45. Again.',
  '404: Looks like a missing link—Webflow gremlins at it again.',
  'This page didn’t load, probably because we’re still waiting for the actual content.',
  'It’s not the site, it’s us. We probably forgot to publish... sorry!',
  'Our bad. We were too busy debating Webflow animations to notice this page disappeared.',
  'This page is MIA. One of us must’ve clicked the wrong button (it happens).',
];
let msgIndex = 0; // To keep track of the current error message index

$(document).on('keydown', function (e) {
  if (e.key === 'Escape' || e.keyCode === 27) {
    let timeout;
    var newError = errorItem.clone(); // Clone a new error item each time
    newError.find('._404_error-text').text(errorMsg[msgIndex]); // Set text from errorMsg array

    var errorList = $('._404_error-list');

    // Append the new error item
    errorList.append(newError);

    // Check if there are more than 5 items
    if (errorList.children().length > 5) {
      // Remove the first (oldest) error item
      errorList.children().first().remove();
    }

    // Update msgIndex to the next message, looping back to 0 when we reach the end
    msgIndex = (msgIndex + 1) % errorMsg.length;

    // Set a timeout to remove the item after 10 seconds (10,000 ms)
    timeout = setTimeout(function () {
      newError.remove();
    }, 10000);

    newError.find('.error-item_close').on('click', function () {
      newError.remove();
      clearTimeout(timeout);
    });
  }
});
