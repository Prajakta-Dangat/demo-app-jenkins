# Node.js Demo App - CI/CD with Jenkins and Docker

## 📌 Project Overview

This project demonstrates how to build and deploy a Node.js application using **Docker** and a **Jenkins CI/CD pipeline**.

The pipeline automatically performs the following steps:

```text
Developer
    ↓
Git Push
    ↓
GitHub
    ↓
Jenkins
    ↓
Checkout Code
    ↓
Install Dependencies
    ↓
Run Tests
    ↓
Build Docker Image
    ↓
Deploy Docker Container
    ↓
Node.js Application
```

---

## 🛠️ Technologies Used

- Node.js
- npm
- Git
- GitHub
- Jenkins
- Docker
- Dockerfile
- Jenkinsfile
- PowerShell
- JavaScript

---

## 📂 Project Structure

```text
nodejs-demo-app/
│
├── .github/
│   └── workflows/
│       └── main.yml
│
├── .gitignore
├── Dockerfile
├── Jenkinsfile
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

---

## 📋 Files Description

| File / Folder | Description |
|---|---|
| `app.js` | Main Node.js application |
| `package.json` | Project information and dependencies |
| `package-lock.json` | Locks dependency versions |
| `Dockerfile` | Instructions for building the Docker image |
| `Jenkinsfile` | Jenkins CI/CD pipeline configuration |
| `.gitignore` | Files and folders excluded from Git |
| `.github/workflows/main.yml` | GitHub Actions workflow |
| `README.md` | Project documentation |

---

# 🐳 Docker

The application is containerized using Docker.

## Dockerfile

The Dockerfile is used to create a Docker image containing the Node.js application and its dependencies.

Example:

```dockerfile
FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

---

## 🔨 Build Docker Image

Run:

```bash
docker build -t nodejs-demo-app .
```

Check the image:

```bash
docker images
```

---

## ▶️ Run Docker Container

Run:

```bash
docker run -d -p 3000:3000 --name nodejs-demo-container nodejs-demo-app
```

Check the running container:

```bash
docker ps
```

---

## 🌐 Access the Application

Open your browser:

```text
http://localhost:3000
```

---

# 🔄 Jenkins CI/CD Pipeline

Jenkins is used to automate the build, test, Docker image creation, and deployment process.

The pipeline contains the following stages:

```text
Checkout
   ↓
Install Dependencies
   ↓
Test
   ↓
Docker Build
   ↓
Deploy
```

---

## 🚀 Jenkins Pipeline Stages

### 1. Checkout

Jenkins downloads the source code from GitHub.

```text
GitHub → Jenkins
```

---

### 2. Install Dependencies

Jenkins installs the Node.js dependencies using:

```bash
npm install
```

---

### 3. Test

The application tests are executed using:

```bash
npm test
```

---

### 4. Docker Build

Jenkins builds the Docker image:

```bash
docker build -t nodejs-demo-app .
```

---

### 5. Deploy

Jenkins stops the previous container and starts a new container.

```bash
docker stop nodejs-demo-container
docker rm nodejs-demo-container
docker run -d -p 3000:3000 --name nodejs-demo-container nodejs-demo-app
```

---

# 📄 Jenkinsfile

The Jenkins pipeline is defined in the `Jenkinsfile`.

```groovy
pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out code from GitHub...'

                git branch: 'main',
                    url: 'https://github.com/Prajakta-Dangat/nodejs-demo-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing Node.js dependencies...'

                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'

                bat 'npm test'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker image...'

                bat 'docker build -t nodejs-demo-app .'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'

                bat 'docker stop nodejs-demo-container || exit /b 0'
                bat 'docker rm nodejs-demo-container || exit /b 0'
                bat 'docker run -d -p 3000:3000 --name nodejs-demo-container nodejs-demo-app'
            }
        }
    }

    post {

        success {
            echo 'CI/CD PIPELINE COMPLETED SUCCESSFULLY!'
            echo 'Application: http://localhost:3000'
        }

        failure {
            echo 'CI/CD PIPELINE FAILED!'
            echo 'Check the Console Output for errors.'
        }
    }
}
```

---

# 🔧 Jenkins Configuration

Create a Jenkins Pipeline job:

```text
Jenkins Dashboard
      ↓
New Item
      ↓
nodejs-demo-pipeline
      ↓
Pipeline
```

Use:

```text
Definition:
Pipeline script from SCM

SCM:
Git

Repository:
https://github.com/Prajakta-Dangat/nodejs-demo-app.git

Branch:
*/main

Script Path:
Jenkinsfile
```

---

# 🔐 GitHub Integration

The source code is stored in GitHub.

Repository:

```text
https://github.com/Prajakta-Dangat/nodejs-demo-app
```

The Jenkins pipeline gets the latest code from the `main` branch.

---

# 🔁 CI/CD Workflow

When code is pushed to GitHub:

```text
git push
    ↓
GitHub
    ↓
Jenkins
    ↓
Checkout
    ↓
npm install
    ↓
npm test
    ↓
Docker Build
    ↓
Docker Container
    ↓
Application Deployment
```

This reduces manual work and automates the application deployment process.

---

# 📝 Git Commands

Clone the repository:

```bash
git clone https://github.com/Prajakta-Dangat/nodejs-demo-app.git
```

Move into the project:

```bash
cd nodejs-demo-app
```

Check Git status:

```bash
git status
```

Add changes:

```bash
git add .
```

Commit changes:

```bash
git commit -m "Update application"
```

Push changes:

```bash
git push origin main
```

---

# 🧹 .gitignore

The project uses `.gitignore` to prevent unnecessary files from being uploaded to GitHub.

Examples:

```text
node_modules/
.env
*.log
.vscode/
coverage/
dist/
build/
```

Sensitive information such as passwords, API keys, and secret credentials should never be committed to GitHub.

---

# ✅ Project Outcome

After successfully running the Jenkins pipeline:

- Source code is pulled from GitHub.
- Node.js dependencies are installed.
- Tests are executed.
- Docker image is created.
- Docker container is deployed.
- Application becomes available on port `3000`.

Application:

```text
http://localhost:3000
```

---

# 🎯 Learning Outcomes

Through this project, I learned:

- How Jenkins pipelines work
- How to create a Jenkinsfile
- How to connect Jenkins with GitHub
- How CI/CD automates software delivery
- How to build Docker images
- How to run Docker containers
- How to deploy a Node.js application using Jenkins and Docker
- How GitHub, Jenkins, and Docker work together

---

# 👩‍💻 Author

**Prajakta Pramod Dangat**

BTech E&TC Engineering

GitHub:

https://github.com/Prajakta-Dangat

LinkedIn:

https://linkedin.com/in/prajakta-d-619086315
