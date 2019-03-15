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
        sh 'npm test'
        emailext(subject: 'Aprobar', body: 'Por favor aprueba', attachLog: true, to: 'gabo')
      }
    }
    stage('Aprove') {
      steps {
        input(message: 'Aprobar?', submitter: 'gabo')
      }
    }
    stage('Deploy') {
      steps {
        emailext(subject: 'Deployment', body: 'Se envio a PROD', to: 'fabian', attachLog: true)
      }
    }
  }
  environment {
    TARGET_SERVER_USER = 'ec2-user'
    TARGET_SERVER_HOST = '52.15.213.43'
  }
}