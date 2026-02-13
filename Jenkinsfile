pipeline {
    agent any

    stages {
        stage('Docker Build') {
            steps {
                // This builds your image
                sh "docker build -t galaxy-app:latest ."
            }
        }

        stage('Docker Deploy') {
            steps {
                // 1. Remove the old container if it exists
                sh "docker rm -f my-running-galaxy-app || true"
                
                // 2. Run the new container on port 3000
                // We use galaxy-app:latest which was built in the previous stage
                sh "docker run -d --name my-running-galaxy-app -p 3000:3000 galaxy-app:latest"
                
                echo "Success! Your app is running on port 3000."
            }
        }
    }
}


// pipeline {
//     agent any
//     stages {
//         stage('Docker Build') {
//             steps {
//                 sh "docker build -t galaxy-app:latest ."
//             }
//         }
//         stage('Docker Deploy') {
//             steps {
//                 // 1. Create a private network so containers can talk to each other
//                 // sh "docker network create galaxy-network || true"
                
//                 // 2. Clean up old containers
//                 // sh "docker rm -f my-running-galaxy-app nginx-proxy || true"
                
//                 // 3. Start the App on the network
//                 // sh "docker run -d --name my-running-galaxy-app --network galaxy-network -p 3000:3000 galaxy-app:latest"
//                 sh "docker run -d --name my-running-galaxy-app"
                
//                 // 4. Start Nginx on the SAME network, mapping port 80 to your laptop
//                 // sh """
//                 // docker run -d --name nginx-proxy --network galaxy-network -p 80:80 \
//                 // nginx:alpine sh -c "echo 'server { listen 80; location / { proxy_pass http://my-running-galaxy-app:3000; } }' > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
//                 // """
                
//                 echo "Success! Access your app at http://localhost/"
//             }
//         }
//     }
// }
