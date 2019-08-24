pipeline {
  agent {
    docker {
      args '-p 3001:3000'
      image 'node:6-alpine'
    }

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
        sh 'npm test '
      }
    }
    stage('Approve') {
     when {
          branch 'production'
      }
      steps {
        input(message: 'se aprueba?', submitter: 'alberto')
      }
    }
    stage('deploy to development') {
      when {
		branch 'development'
	}
      steps {
        echo 'succesfull'
      }
    }
    stage('deploy to production'){
       when {
          branch 'production' 
       }
	steps {
           echo 'exitoso'
         }
    }
    stage('aprobar') {
      steps {
        emailext(subject: 'aprobar', body: 'aprueba', attachLog: true, to: 'alberto')
      }
    }
  }
}
