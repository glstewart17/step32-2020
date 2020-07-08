# ShopSafe
A web application for informed and safe shopping during COVID-19.

## Deployment Instructions
```
// to run frontend
cd shopsafe-frontend
ng build --delete-output-path=false

// to run backend
cd shopsafe-backend
mvn package appengine:run
