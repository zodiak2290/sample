pipeline {
  agent {
    docker {
      image 'node:6-alpine'
      args '-p 3000:3000'
    }
  }
  environment {
    CI = 'true'
  }
  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
    stage('Deploy to development') {
      when {
        branch 'development'
      }
      steps {
        sh 'echo "Deploy to development"'
      }
    }
    stage('Deploy to production') {
      when {
        branch 'production'
      } 
      steps {
        sh 'echo "Deploy to production"'
      } 
    } 
  }
}

