# 🚀 Pipeline Builder – React Flow & FastAPI

A node-based visual pipeline builder developed using React Flow and FastAPI. The application allows users to create workflows through drag-and-drop nodes, define dynamic variables inside text nodes, and validate pipeline structures through backend graph analysis.

This project demonstrates frontend architecture, reusable component design, dynamic UI generation, graph processing, and frontend-backend integration.

---

# 📊 Project Overview

The objective of this project is to build an interactive workflow builder where users can visually construct pipelines using nodes and connections while receiving real-time validation and graph analysis.

The application supports:

* Custom node creation
* Dynamic variable parsing
* Automatic node resizing
* Backend DAG validation
* Pipeline statistics generation

---

# ✅ Key Highlights

* 🏗️ Reusable BaseNode abstraction
* 🎨 Modern dark-themed UI
* 🔗 Drag-and-drop workflow creation
* 📝 Dynamic Text Node resizing
* 🏷️ Variable detection using `{{variable}}` syntax
* ⚡ Automatic handle generation
* 📈 Node and edge statistics
* 🌐 FastAPI backend integration
* 🔄 Directed Acyclic Graph (DAG) validation

---

# 🧰 Tech Stack

## Frontend

* React.js
* React Flow
* JavaScript
* CSS3

## Backend

* FastAPI
* Python

## State Management

* Zustand

---

# 🔬 Project Workflow

## 1. 🏗️ Node Abstraction & Reusable Architecture

To improve maintainability and scalability, a reusable `BaseNode` component was created to abstract common node functionality such as:

* Node container layout
* Header rendering
* Input fields
* Connection handles
* Shared styling

This significantly reduced code duplication and simplified the creation of additional node types.

Using this architecture, the following nodes were implemented:

* Input Node
* Output Node
* LLM Node
* Text Node
* Transform Node
* Merge Node
* Conditional Node
* API Node
* Note Node

The abstraction enables future nodes to be added quickly while maintaining consistent design and behavior.

---

## 2. 🎨 UI Design & Styling

A clean and unified dark-themed interface was designed to improve usability and visual consistency.

Implemented features include:

* Consistent node styling
* Interactive hover effects
* Styled connection handles
* Custom toolbar
* React Flow customization
* Responsive layout

---

## 3. 📝 Dynamic Text Node Logic

The Text Node was enhanced with advanced functionality.

### Auto Resizing

The node automatically expands in width and height as additional text is entered, improving visibility and editing experience.

### Variable Parsing

Users can define variables using:

```text
{{input}}
{{email}}
{{customerId}}
```

The application automatically detects valid JavaScript variable names and extracts them from the text.

### Dynamic Handle Generation

For every detected variable:

* A new input handle is generated
* Handles appear on the left side of the Text Node
* Each handle corresponds to a detected variable

This allows dynamic connections based on user-defined inputs.

---

## 4. 🌐 Backend Integration

The frontend is integrated with a FastAPI backend.

When the user clicks **Submit Pipeline**:

* Nodes are collected from the React Flow canvas
* Edges are collected from the React Flow canvas
* Pipeline data is sent to the backend
* Backend performs graph analysis
* Results are returned and displayed to the user

### Backend Analysis

The backend calculates:

* Total number of nodes
* Total number of edges
* Whether the pipeline forms a Directed Acyclic Graph (DAG)

---

# 📈 Example Response

```json
{
  "num_nodes": 8,
  "num_edges": 6,
  "is_dag": true
}
```

Displayed Information:

* Number of Nodes
* Number of Edges
* DAG Validation Status

---

# 📉 Features Implemented

### Part 1 – Node Abstraction

* Reusable BaseNode architecture
* Reduced code duplication
* Simplified node creation

### Part 2 – Styling

* Custom dark-themed UI
* Unified node design
* Enhanced React Flow appearance

### Part 3 – Text Node Logic

* Dynamic resizing
* Variable extraction
* Dynamic handle creation

### Part 4 – Backend Integration

* FastAPI endpoint integration
* Node count calculation
* Edge count calculation
* DAG validation

---

# 📁 Project Structure

```text
frontend_technical_assessment
│
├── backend
│   └── main.py
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── nodes
│   │   ├── App.js
│   │   ├── toolbar.js
│   │   ├── submit.js
│   │   ├── ui.js
│   │   ├── store.js
│   │   └── index.css
│   │
│   ├── package.json
│   └── package-lock.json
```

---

# ▶️ Running the Project

## Backend

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
pip install fastapi uvicorn python-multipart
```

Run the server:

```bash
python -m uvicorn main:app --reload
```

Backend runs on:

```text
http://localhost:8000
```

---

## Frontend

Navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the application:

```bash
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

# 🚀 Future Improvements

* User authentication
* Pipeline persistence
* Export/import workflows
* Pipeline execution engine
* Real-time collaboration
* Custom node marketplace

---

# 📬 Contact

Made with ❤️ by Bishwaman Das
