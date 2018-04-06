docker build -t <your username>/web_ui web_ui
docker build -t <your username>/add add
docker build -t <your username>/subtract subtract


docker run -p 8080:80 -d chrisadams1267/web_ui
