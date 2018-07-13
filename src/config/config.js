export default {

  //If you have your server running locally put http://localhost, else put the adress of the server
  server_url: 'http://localhost',

  //Add the port of the server
  server_port: ':3010',

  //Add the facebook App ID here
  facebook_ID: '269659623604674',

  //This project is currentely using geoiplookup.io, leave this at it is.
  geolookup_url: 'https://json.geoiplookup.io',

  //Leave this as they are, they are used in the redux state to check to status of async API calls
  STATUS_NO_DATA : 'unloaded',
  STATUS_LOADING : 'loading',
  STATUS_FAILURE : 'failure',
  STATUS_OK : 200,
}