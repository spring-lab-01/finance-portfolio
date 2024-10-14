# Finance portfolio App
 - User can add/edit/remove their investment accounts 
 - User will be able to see Portfolio values grouped by Currency

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


## Frontend references
 - https://mui.com/material-ui/getting-started/


## How to run in local 
- run command to build jar along with UI
```
mvn package 
```


- start application using java command
```
java -jar backend-0.0.1-SNAPSHOT.jar
```

- alternatively you can start application using docker
```
docker compose up --build -d
```

run below command to stop containers
```
docker compose down
```

- Application will start at - http://localhost:8080
- login using 
  - username - user@email.com
  - password - password