# Deployment Instructions

This directory contains the necessary files to deploy the TaskFlow application using Kubernetes and Ansible.

## Prerequisites

- **Kubernetes Cluster**: A running K8s cluster (e.g., Minikube, Docker Desktop, or a cloud provider).
- **kubectl**: Configured to communicate with your cluster.
- **Ansible**: Installed on your machine.
- **Docker Images**: You must build and push your Docker images to a registry (e.g., Docker Hub).

## Steps

1. **Update Image Names**:
   Open `k8s/backend.yaml` and `k8s/frontend.yaml` and replace `your-dockerhub-username/taskflow-backend:latest` with your actual image names.

2. **Run Ansible Playbook**:
   Navigate to the `ansible` directory and run:
   ```bash
   ansible-playbook -i hosts deploy.yml
   ```

3. **Verify Deployment**:
   Check the status of your pods and services:
   ```bash
   kubectl get pods
   kubectl get svc
   ```

4. **Access Application**:
   - If using **Docker Desktop** or **Cloud LoadBalancer**, access the frontend at `http://localhost:80` (or the external IP).
   - If using **Minikube**, run `minikube service frontend` to get the URL.
