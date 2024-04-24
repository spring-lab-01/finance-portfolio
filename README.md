# Finance portfolio App 

1. User can create portfolios
2. User can have multiple portfolios
2. User can create/edit/delete accounts to a portfolio 
3. User can add balance to an account
4. User can see portfolio analytics on dashboard 

# Tech Stack
- Java 17
- Spring boot 3
- React

## Backend 
created from - https://start.spring.io/

## UI Details
- npm --version :  10.5.0
- node --version : v21.7.3

- Frontend using intellij - ![](ui-create-img.png)

# DB Tables:

## app_user
    id
    name
    email

## portfolio
    app_user_id
    portfolio_number

## account
    id
    name
    description
    portfolio_number


# Curl commands

POST Users 
```
curl http://localhost:8080/users ^ -H "Content-Type: application/json" ^ -d @user_post.json
```


# References
- https://www.baeldung.com/spring-boot-react-crud
- https://github.com/eugenp/tutorials/tree/master/spring-boot-modules/spring-boot-react


