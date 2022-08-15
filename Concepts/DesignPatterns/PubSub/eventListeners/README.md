# Title

## Installation

1\. Clone the repository:

```bash
git clone 'FROM WHATEVER REPOSITORY'
```

### Development Mode

For those who want to run the code locally.
The page will reload if you make edits.
You will also see any errors in the console.

### Docker

This project is also Dockerized ONLY for development. This is by far the easiest way to run the project. Dependencies will not need to be manually installed. Download the [Docker App](https://docs.docker.com/get-docker/) and run it. In Terminal navigate the project folder and run `docker up`. To quit run `docker down`.

Open [localhost:8080](http://localhost:8080) to see the live app.

### NPM or YARN

This uses NPM or Yarn Package Managers to run/build projects so you will need to make sure you have them installed unless you use the Docker route explained above. You will also have to Launch the Backend(if applicable to the project) before the Frontend.


#### 1\. Install the dependencies

```bash
cd frontend
npm install
```

#### 2\. Run the development server

```bash
npm run start
```

### **Launch the app**

Runs the FRONTEND app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Testing
In Terminal navigate the project folder/frontend and run `npm test`/`yarn test`.
Launches the test runner in the interactive watch mode.

#### 4\. Test Runner

```bash
npm run test
```
