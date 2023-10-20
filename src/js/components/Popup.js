const Popup = message => {
  let image, messageText;

  switch (message) {
    case 0:
      image = 'sleeping-pikachu';
      messageText = 'Not found<br>The pokémon you tried to access does not exist';
      break;

    case 1:
      image = 'sad-pikachu';
      messageText = 'Something went wrong<br>Please, try again later';
      break;

    default:
      image = 'pokeball-shimmer';
      messageText = 'Loading...';
      break;
  }

  return `
    <div class="popup">
      <div>
        <img src="src/img/${image}.gif" alt="${image.replace(/-/, ' ')}">
        <h2 class="message">
          ${messageText}
        </h2>
      </div>
    </div>
  `;
}

export default Popup;
