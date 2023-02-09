# create docker network
- docker network create mongo-network

# create docker mongodb container
- docker run -p 27017:27017 -d -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password --name mongodb --net mongo-network mongo



# create docker mongo-express container
- docker run -p 8081:8081 -d -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin -e ME_CONFIG_MONGODB_ADMINPASSWORD=password --net mongo-network --name mongo-express -e ME_CONFIG_MONGODB_SERVER=mongodb mongo-express


# Unzip DroneAPI.zip

# postman routes
- drone.postman_collection.json

# start app
npm start