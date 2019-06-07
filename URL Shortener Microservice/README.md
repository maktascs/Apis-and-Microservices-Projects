# API Project: URL Shortener Microservice
Used shortid pacakge to generate shorturl's for posted original url and stored in mongodb database along with it's original url.

### User Stories

1. You can POST a URL to `[project_url]/api/shorturl/new` and you will receive a shortened URL in the JSON response. Example : `{"original_url":"www.google.com","short_url":1}`
2. If you pass an invalid URL that doesn't follow the valid `http(s)://www.example.com(/more/routes)` format, the JSON response will contain an error like `{"error":"invalid URL"}`. Used valid-url package to take care of this.
3. When you visit the shortened URL, it will redirect you to your original link.


#### Creation Example:

POST [project_url]/api/shorturl/new - body (urlencoded) :  url=https://www.yahoo.com

#### Usage:

[this_project_url]/api/shorturl/mdjsO2QFv

#### Will redirect to:

https://www.yahoo.com