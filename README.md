# finance-portfolio
Finance portfolio App 

1. User can create portfolios
2. User can have multiple portfolios
2. User can create/edit/delete accounts to a portfolio 
3. User can add balance to an account
4. User can see portfolio analytics on dashboard 
    

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