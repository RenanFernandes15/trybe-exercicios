const list = document.getElementById('list');

// const fetchBit = (callback) => {
//   fetch("https://api.coincap.io/v2/assets")
//   .then((response) => response.json())
//   .then((data) => {
//     callback(data);
//   })
//   .catch((error) => console.log('error', error));
// };

const fetchBit = async () => {
  try {
    const response = await fetch("https://api.coincap.io/v2/assets");
    const value = await response.json();
    return value.data;
  } catch (error) {
    console.log(error);
  }
};

const addInfo = async () => {
  const data = await fetchBit();
  console.log(data.slice(0, 20));
  data.slice(0, 11).map(({ name, priceUsd, symbol }) => {
    list.innerHTML += `<li>${name} (${symbol}): ${priceUsd}</li>`;
  });
};

window.onload = addInfo;
