var BASE_URL;
if (!__DEV__)
  //BASE_URL = 'http://www.2ndhandler.com/';
  BASE_URL = 'http://127.0.0.1:8000/';
else
  BASE_URL = 'http://127.0.0.1:8000/';

export default {
  BASE_URL: BASE_URL,
  LOGIN_URL: BASE_URL + 'api/api-token-auth/',
  VERIFY_TOKEN_URL: BASE_URL + 'api/api-token-refresh',
  LOGOUT_URL: BASE_URL + 'api/api-auth/logout/',
  SIGNUP_URL: BASE_URL + 'api/users/clients/create/',  
  SET_PASS: BASE_URL + 'api/users/users/set_password/',

	USER_URL: BASE_URL + 'api/users/clients/',
  SEARCH_URL: BASE_URL + 'api/products/searches/',
  PRODUCT_URL: BASE_URL + 'api/products/products/',
  ASSESSMENT_URL: BASE_URL + 'api/products/assessments/',
  ASSESSMENT_CREATOR_URL: BASE_URL + 'api/products/assessmentscreator/',
  ACTIVE_SALE_URL: BASE_URL + 'api/products/salesbyserial/',
  SALE_URL: BASE_URL + 'api/products/sales/',
  SALE_CREATOR_URL: BASE_URL + 'api/products/salescreator/',
  DEAL_URL: BASE_URL + 'api/deals/deals/',
  ORDER_URL: BASE_URL + 'api/deals/orders/',
  RATING_URL: BASE_URL + 'api/deals/ratings/',
  ACTIVATE_URL: BASE_URL + 'api/users/clients/',
  
  

}

