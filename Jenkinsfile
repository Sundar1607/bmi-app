pipeline {
  agent any

  environment {
    COMPOSE_PROJECT_NAME = "bmi_app"
    GIT_REPO = "https://github.com/Sundar1607/bmi-app.git"
  }

  stages {
    stage('Build Backend') {
      steps {
        dir('backend') {
          sh 'docker build -t bmi-backend .'
        }
      }
    }

    stage('Build Frontend') {
      steps {
        dir('frontend') {
          sh 'docker build -t bmi-frontend .'
        }
      }
    }

    stage('Deploy App') {
      steps {
        sh 'docker-compose up -d --build'
      }
    }

    stage('Verify') {
      steps {
        sh 'docker ps'
      }
    }
  }

  post {
    success {
      echo '✅ BMI App Deployed Successfully!'
    }
    failure {
      echo '❌ Deployment Failed.'
    }
  }
}
