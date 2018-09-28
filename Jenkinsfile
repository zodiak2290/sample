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
      parallel {
        stage('Test') {
          steps {
            sh 'npm test'
          }
        }
        stage('Send Email') {
          steps {
            emailext(subject: 'Aprobar', body: 'Por Favor Aprobar', attachLog: true, to: 'gabo')
          }
        }
      }
    }
    stage('Aprove') {
      steps {
        input(message: 'Aprobar?', submitter: 'gabo')
      }
    }
    stage('To Deploy') {
      steps {
        emailext(subject: 'Deploy', attachLog: true, body: 'Necesitas aprobar', to: 'fabian')
      }
    }
    stage('To Deploy A') {
      steps {
        input(message: 'Aprobar', submitter: 'fabian')
      }
    }
  }
}