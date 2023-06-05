function sortEmails() {
  // Get all email elements on the page
  const emailElements = document.querySelectorAll('.zA');

  // Loop through email elements and extract sender information
  for (const emailElement of emailElements) {
    const senderElement = emailElement.querySelector('.yW span[email]');
    if (senderElement) {
      const sender = senderElement.getAttribute('email');

      // Create a folder with the sender's name (if it doesn't exist already)
      createFolderIfNotExists(sender);

      // Move the email to the corresponding folder
      moveEmailToFolder(emailElement, sender);
    }
  }
}

function createFolderIfNotExists(folderName) {
  // Code to check if the folder exists and create it if necessary
}

function moveEmailToFolder(emailElement, folderName) {
  // Code to move the email to the specified folder
}

// Run the sorting function when the page finishes loading
window.addEventListener('load', sortEmails);