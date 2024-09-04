# helloWOrld
Creating Hello and World Microservices using Node.js, Docker and K8s

## Project Structure:
`hello-service/`: Contains the Hello Service code, Dockerfile and Kubernates(K8s) manifests.

`world-service/`: Contains the World Service code, Dockerfile and Kubernates(K8s) manifests.

## Prerequisites:
Install git,docker and minikube on your local computer

## Running Local Microservices:
node hello.js - Running on the port 8080

node world.js - Running on the port 8081

## Building and Running Docker Images:

docker build -t helloservice:latest .   
docker run -p 5050:8080 helloservice 

docker build -t worldservice:latest .  
docker run -p 5051:8081 worldservice 

## Pushing images to DockerHub:

Login to Docker - docker login
Check the Images - docker images

## Changing the Img Name :

docker tag helloservice:latest username/helloservice

docker push username/helloservice

docker tag worldservice:latest username/worldservice

docker push username/worldservice
                        
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

## Testing Script for Hello Service and World Service:

curl $(minikube service hello-service --url)/hello

curl $(minikube service world-service --url)/world


## This README.md file provides clear overview on which applications need to be set-up and how to run the services.



          


