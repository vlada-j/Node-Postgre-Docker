FROM postgres:latest

ENV POSTGRES_PASSWORD=mysecretpassword
ENV POSTGRES_DB=mydatabase

EXPOSE 5432