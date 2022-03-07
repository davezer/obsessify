export const searchGoogleItems = (query) => {
    return fetch(`https://www.google.com/${query}`);
  };