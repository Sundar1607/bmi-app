pipeline {
  agent any

  stages {
    stage('Clone') {
      steps {
        git 'https://github.com/Sundar1607/bmi-app.git'
      }
    }

    stage('Build Docker Images') {
      steps {
        script {
          sh 'docker-compose build'
        }
      }
    }

    stage('Deploy Containers') {
      steps {
        script {
          sh 'docker-compose up -d'
        }
      }
    }
  }
}
