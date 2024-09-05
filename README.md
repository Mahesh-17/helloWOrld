# CMPE-272 - Assignment1 : helloWOrld
Creating Hello and World Microservices using Node.js, Docker and K8s

## Project Structure:
`hello-service/`: Contains the Hello Service code, Dockerfile and Kubernates(K8s) manifests.

`world-service/`: Contains the World Service code, Dockerfile and Kubernates(K8s) manifests.

`test-service/`: Contains the Test Service code, Dockerfile and Kubernates(K8s) manifests.

## Prerequisites:
Install git, docker and minikube on your local computer

## Running Local Microservices:
node hello.js - Running on the port 8080

node world.js - Running on the port 8081

## Building and Running Docker Images:

docker build -t helloservice:latest .   
docker run -p 5050:8080 helloservice 

docker build -t worldservice:latest .  
docker run -p 5051:8081 worldservice 

## Logging to docker and checking the images:

Login to Docker - docker login

Check the Images - docker images

## Pushing the docker image to docker hub:

docker tag helloservice:latest mahesh1710/helloservice

docker push mahesh1710/helloservice

docker tag worldservice:latest mahesh1710/worldservice

docker push mahesh1710/worldservice

                        
## Deploying on Kubernates using Minikube:

start the minikube - minikube start

## Apply K8s Manifests:

kubectl apply -f hello-deployment.yaml

kubectl apply -f hello-service.yaml

kubectl apply -f world-deployment.yaml

kubectl apply -f world-service.yaml

## Check the status of the deployment:

kubectl get pods

kubectl get deployments

kubectl get services

## Access the service using /hello and /world endpoint:

minikube service hello-service

minikube service world-service

## Testing Service for combining Hello Service and World Service:

Create a test-service similar to hello-service or world-service and deploy it on K8s

Run the both hello-service and world-service using minikube

minikube service test-service

Output will be shown as Hello, World !

## Docker Images link on Docker hub:

[mahesh1710/helloservice](https://hub.docker.com/repository/docker/mahesh1710/testservice/general)

[mahesh1710/worldservice](https://hub.docker.com/repository/docker/mahesh1710/worldservice/general)

[mahesh1710/testservice](https://hub.docker.com/repository/docker/mahesh1710/testservice/general)

## Output Screenshots:

a) Output at /hello endpoint for hello-service:

<img width="1051" alt="Screenshot 2024-09-04 at 6 37 54 PM" src="https://github.com/user-attachments/assets/8b947816-fc70-4b74-87c1-b5a4e000f063">

b) Output at /world endpoint for world-service:

<img width="1048" alt="Screenshot 2024-09-04 at 6 38 41 PM" src="https://github.com/user-attachments/assets/b5c45d72-7e54-4f25-8a81-e719b5597dc6">

c) Output at /test endpoint for test-service:

<img width="1043" alt="Screenshot 2024-09-04 at 6 39 15 PM" src="https://github.com/user-attachments/assets/928cad2c-ebd3-4cbb-a255-9b9a458392b6">



## This README.md file provides clear overview on which applications need to be set-up and how to run the services.



          


