pipeline {
    agent any
    stages {
        stage('Docker Build') {
            steps {
                // We use 'sh' to call Docker. 
                // This runs 'npm install' INSIDE the container, fixing the EPERM error.
                sh "docker build -t galaxy-app:latest ."
            }
        }
        stage('Docker Deploy') {
            steps {
                // 1. Kill any existing container using port 3000
                sh "docker rm -f my-running-galaxy-app || true"
                
                // 2. Start the container and map port 3000 to your host
                sh "docker run -d -p 3000:3000 --name my-running-galaxy-app galaxy-app:latest"
                
                echo "App is now live at http://localhost:3000"
            }
        }
    }
}
