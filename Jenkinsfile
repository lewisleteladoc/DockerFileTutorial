pipeline {
    agent any
    environment {
        NEW_VERSION = '1.3.0'
    }
    parameters {
        string(name: 'NEW_VERSION', defaultValue: '1.3.0', description: 'The new version to build and deploy')
        string(name: 'AGE', defaultValue: '11', description: 'The age of the user')
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                echo "Building...${NEW_VERSION}"
                echo "Build stage completed"
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                echo "Tests passed"
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
                echo "Deployment completed"
            }
        }
    }
}