pipeline {
    agent any
    stages {
        stage('Docker Build') {
            steps {
                // Building the migration image as requested
                sh "docker build -t galaxy-app:latest -f DockerfileMigration ."
            }
        }
        stage('Docker Deploy') {
            steps {
                sh "docker network create galaxy-network || true"
                sh "docker rm -f my-running-galaxy-app nginx-proxy || true"
                // This is the only 'run' command you need:
                sh "docker run -d --name my-running-galaxy-app --network galaxy-network -p 3000:3000 galaxy-app:latest"
                
                // DELETE THE LINE BELOW THIS IN YOUR JENKINSFILE:
                // sh "docker run -d --name my-running-galaxy-app" 
            }
        }
    }
}
