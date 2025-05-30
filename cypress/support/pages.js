export const loginPage = {
  usernameInput: '[data-test="username"]',
  passwordInput: '[data-test="password"]',
  loginButton: '[data-test="login-button"]',
  errorMessage: '[data-test="error"]',
};

export const inventoryPage = {
  title: '.title',
};

export const products = {
  itemTitle: (name) => `.inventory_item:contains("${name}")`,
  addToCartButton: (name) => `.inventory_item:contains("${name}") button`,
};

export const cart = {
  link: '.shopping_cart_link',
  item: '.cart_item',
  removeButton: (nameId) => `[data-test="remove-${nameId}"]`,
  checkoutButton: '[data-test="checkout"]',
};

export const checkout = {
  firstName: '[data-test="firstName"]',
  lastName: '[data-test="lastName"]',
  postalCode: '[data-test="postalCode"]',
  continueButton: '[data-test="continue"]',
  finishButton: '[data-test="finish"]',
  successMessage: '.complete-header',
  goHome: '[data-test="back-to-products"]',
};
