# Flask + Express Full Stack Application (Dockerized)

This project demonstrates a full-stack application using:

- **Frontend:** Node.js with Express  
- **Backend:** Flask (Python)  
- **Containerization:** Docker  
- **Orchestration:** Docker Compose  

The frontend collects user input through a form and sends the data to the Flask backend for processing.

---

## Project Architecture

User → Express Frontend → Flask Backend → Response → Frontend → User

- The **Express frontend** serves an HTML form.
- The form sends a POST request to the Express server.
- Express forwards the request to the Flask backend.
- Flask processes the data and returns a JSON response.
- The frontend displays the backend response.

## Technologies Used

### Frontend
- Node.js
- Express.js
- EJS
- Axios

### Backend
- Python
- Flask

### DevOps
- Docker
- Docker Compose
- Docker Hub
- GitHub


## Docker Setup

### Build and Run the Project

From the root directory:

```bash
docker-compose up --build


## Frontend :
http://localhost:3000

## Backend :
http://localhost:5000


## Frontend Image :
https://hub.docker.com/r/soumitatalukder/frontend

## Backend Image :
https://hub.docker.com/r/soumitatalukder/backend