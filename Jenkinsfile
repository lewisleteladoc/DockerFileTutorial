pipeline {
    agent any
    environment {
        NEW_VERSION = '1.3.0'
    }
    parameters {
        string(name: 'NEW_VERSION', defaultValue: '1.3.0', description: 'The new version to build and deploy')
        string(name: 'AGE', defaultValue: '11', description: 'The age of the user')
    }
    // YOu can have many stages in a pipeline
    stages {
        stage('Build') {
            steps {
                echo "Building...${NEW_VERSION}"
               // sh 'docker build -t my-node-app .'
               // sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
             //   sh 'docker run --rm my-node-app npm test'
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