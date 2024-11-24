# Ultimate Suite for Secure, Smart, and Real-Time Cloud Monitoring

## **Overview**
The **Ultimate Suite** is a comprehensive, real-time cloud monitoring and security solution designed for advanced log analysis, ransomware detection, and proactive incident response. It integrates seamlessly with popular tools and technologies to provide a robust platform for safeguarding cloud resources.

---

## **Features**

### **1. Advanced Log Analysis**
- **Log Collection and Processing**: Collects logs from various cloud services, systems, and honeypots.
- **ELK Stack Integration**: Logs are stored and analyzed using Elasticsearch, Logstash, and Kibana, running on Docker.
- **Customizable Dashboards**: Visualize real-time log data, trends, and metrics for enhanced visibility into system performance and security.

### **2. Ransomware Detection Model**
- **Machine Learning Integration**: Utilizes a cutting-edge ML model to classify executables and identify potential ransomware threats.
- **Real-Time Analysis**: The ML model processes files in real time, isolating and mitigating malicious files before they can impact the system.
- **Proactive Security**: Detects and predicts ransomware activities with high accuracy.

### **3. Honeypot Monitoring**
- **Dynamic Honeypots**: Simulates vulnerable services on common attack-prone ports to attract malicious actors.
- **Log Analysis**: Logs from honeypots are analyzed to identify malicious activities.
- **Anomaly Detection**: Monitors unusual patterns and generates alerts for potential threats.

### **4. Smart Alerting and Incident Response**
- **Real-Time Alerts**:
  - **Discord Notifications**: Sends detailed alerts to a configured Discord server for immediate team communication.
  - **Window Alerts**: Triggers pop-up notifications in the frontend for real-time updates.
- **Automated Incident Response**: Provides actionable insights for rapid mitigation and response.
- **Customizable Thresholds**: Configure alert levels based on system requirements.

### **5. User-Friendly Interface**
- **Frontend**: Built with React, providing an intuitive and customizable dashboard for log visualization and threat monitoring.
- **Backend**: Powered by FastAPI, facilitating secure and efficient communication between the system and the frontend.
- **Custom Querying**: Easy-to-use interface for querying and searching logs.

---

## **System Architecture**

### **1. Data Pipeline**
- **Log Generation**: Logs are collected from systems and honeypots.
- **Log Storage**: Logs are ingested into the ELK stack (Elasticsearch, Logstash, Kibana) hosted on Docker.
- **Log Visualization**: Logs are visualized and analyzed in real-time using Kibana.

### **2. Ransomware Detection Workflow**
- **File Ingestion**: Executable files are scanned and classified using the integrated ML model.
- **Threat Classification**: The model determines if the file is malicious (ransomware) or safe.
- **Threat Mitigation**: Malicious files are isolated, and alerts are generated.

### **3. Honeypot Analysis**
- **Honeypot Deployment**: Servers simulate common attack-prone services on specific ports.
- **Log Analysis**: Logs generated by these servers are analyzed to identify malicious behavior.

### **4. Alerts and Notifications**
- **Discord Bot**: Sends real-time alerts with detailed information about suspicious activities to a configured Discord channel.
- **Window Alerts**: Provides instant pop-up notifications in the frontend for logged-in users.

---

## **Technologies Used**

### **Frontend**
- React: User interface development.
- Nivo-charts: For custom visualizations.

### **Backend**
- FastAPI: Backend server for API management.
- Python: Core programming language for backend logic.

### **Log Management**
- ELK Stack (Elasticsearch, Logstash, Kibana):
  - **Elasticsearch**: Stores and indexes logs.
  - **Logstash**: Processes logs and sends them to Elasticsearch.
  - **Kibana**: Provides powerful log visualization.

### **Machine Learning**
- Scikit-learn / TensorFlow / PyTorch: For building and deploying the ransomware detection model.

### **Notification System**
- **Discord Bot**: Built using `discord.py` or similar library to send alerts.
- **Browser Notifications**: Implemented using the browser's native notification APIs.

### **Other Tools**
- Docker: Containerized deployment for ELK stack.
- Honeypot Scripts: Python scripts for monitoring attack patterns.

---

## **Setup Instructions**

### **Prerequisites**
- Docker and Docker Compose installed on your machine.
- Python 3.8+ installed for the backend and ML model.
- Node.js and npm for the React frontend.
- Discord bot token and channel ID for alert configuration.

### **1. Clone the Repository**
```bash
git clone https://github.com/SACHINKUMAR1728/Kaeya.git
cd Kaeya
```

### **2. Set Up ELK Stack**
1. Navigate to the ELK configuration directory:
   ```bash
   cd loggy
   ```
2. Start the ELK stack using Docker Compose:
   ```bash
   docker-compose up --build
   ```
3. Verify the ELK stack is running by accessing Kibana at `http://localhost:5601`.

### **3. Configure the Discord Bot**
Create a Discord bot and obtain its token:
   - Go to Dicord Channel settings.
   - Go to Integrations and select webhooks.
   - Create new Webhook and copy the webhook link.

### **4. Start the Backend**
1. Navigate to the backend directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Start the FastAPI server:
   ```bash
   uvicorn app.main:app --reload
   ```

### **5. Start the Frontend**
1. Navigate to the frontend directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm run dev
   ```

### **6. Access the Dashboard**
- Open your browser and navigate to `http://localhost:5173`.

### **7. Start HoneyPot Scripts**
```
    cd scripts
    cd honeypots
    python honeypot.py
    python attack.py
    python analyze.py
```

---

## **Usage**

### **Log Visualization**
- View log trends, error distribution, and activity timelines on the dashboard.
- Use the custom search bar to query specific logs based on severity, timestamp, or source.

### **Ransomware Detection**
- Upload executable file information for real-time analysis.
- View threat classification results and logs of files.

### **Honeypot Monitoring**
- Monitor logs generated from honeypots.
- View detected malicious activities and alerts in the Discord.

### **Alerts**
- **Discord Notifications**: Receive alerts in your Discord channel for suspicious activities or anomalies.
- **Window Alerts**: Get pop-up notifications directly in the browser.

---

## **Future Enhancements**
- Integration with external threat intelligence feeds.
- Support for more cloud platforms (AWS, Azure, GCP).
- Advanced anomaly detection using AI/ML models.
- Automated remediation actions for detected threats.

---

## **Contributing**
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit changes and push to the branch:
   ```bash
   git commit -m "Add feature-name"
   git push origin feature-name
   ```
4. Submit a pull request.

---

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

