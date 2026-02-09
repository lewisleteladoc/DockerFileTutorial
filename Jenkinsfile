pipeline {
    agent any
    environment {
        NEW_VERSION = '1.3.0'
        DOCKER_HOST = 'tcp://127.0.0.1:2375'
    }
    parameters {
        string(name: 'NEW_VERSION', defaultValue: '1.3.0', description: 'The new version to build and deploy')
        string(name: 'AGE', defaultValue: '11', description: 'The age of the user')
    }
    stages {
        stage('Build') {
            steps {
                echo "Building...${NEW_VERSION}"
                bat 'docker build -t my-node-app .'
                bat 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                bat 'docker run --rm my-node-app npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
                // Add deployment steps here
            }
        }
    }
}