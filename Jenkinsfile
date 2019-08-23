pipeline {
  agent any
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
        sh 'npm test '
      }
    }
    stage('Approve') {
      steps {
        input(message: 'se aprueba?', submitter: 'alberto')
      }
    }
    stage('deply') {
      steps {
        echo 'succesfull'
      }
    }
  }
}