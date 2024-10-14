FROM eclipse-temurin:17-jdk-jammy
COPY backend-0.0.1-SNAPSHOT.jar app.jar
ENV SERVER_PORT=8080
WORKDIR /app
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]
