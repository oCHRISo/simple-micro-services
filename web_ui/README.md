docker build -t chrisadams1267/web_ui web_ui

docker run -e add_service='http://f5c19b284a7b' -e subtract_service='http://0afdfc549e71' -p 8080:80 chrisadams1267/web_ui
