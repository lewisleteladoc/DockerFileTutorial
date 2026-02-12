pipeline {
    agent any
    parameters {
        string(name: 'NEW_VERSION', defaultValue: '1.3.0', description: 'The new version to build and deploy')
        string(name: 'AGE', defaultValue: '11', description: 'The age of the user')
    }
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
                // 1. Create a shared network if it doesn't exist
                sh "docker network create galaxy-net || true"

                // 2. Remove old containers to avoid naming conflicts
                sh "docker rm -f galaxy-app nginx-proxy || true"

                // 3. Start Galaxy App on the shared network
                // We don't strictly need to expose port 3000 to the host anymore 
                // because Nginx will talk to it inside the 'galaxy-net'
                sh "docker run -d --name galaxy-app --network galaxy-net galaxy-app:latest"

                // 4. Start Nginx on the SAME network and map port 80 to your laptop
                // The 'proxy_pass' uses the container name 'galaxy-app'
                sh """
                docker run -d --name nginx-proxy --network galaxy-net -p 80:80 \
                nginx:alpine sh -c "echo 'server { listen 80; location / { proxy_pass http://galaxy-app:3000; } }' > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
                """
                
                echo "Galaxy App is now live at http://localhost/"
            }
        }
    }
}
