import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import axiosInstance from "../Axios/interceptor";
import style from "./Corsesheder.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faHouse,
  faMessage,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

function Chat() {
  const location = useLocation();
  const course = location.state;
  const CourseId = course._id;

  const userId = localStorage.getItem("userID");
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState(CourseId);
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const [messageText, setMessageText] = useState("");
  const [file, setFile] = useState(null);
  const [fileData, setFileData] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axiosInstance.get(
          `http://localhost:4000/user/${userId}`
        );
        setUsername(response.data.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUser();
  }, [userId]);

  useEffect(() => {
    const socketInstance = socketIOClient("http://localhost:4000");
    setSocket(socketInstance);

    if (username && socketInstance) {
      socketInstance.emit("joinRoom", { username, courseId: room });
    }

    socketInstance.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      if (socketInstance) {
        socketInstance.disconnect();
      }
    };
  }, [username, room]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (messageText.trim()) {
      socket.emit("chatMessage", { msg: messageText });
      setMessageText("");
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file || !socket) return;

    const reader = new FileReader();

    reader.onload = () => {
      const fileData = reader.result;
      const fileName = file.name;

      socket.emit("uploadFile", { fileName, fileData });
    };

    reader.readAsDataURL(file);
  };
  useEffect(() => {
    if (socket) {
      socket.on("fileData", ({ fileName, fileData }) => {
        setFileData({ fileName, fileData });
      });
    }
  }, [socket]);
  return (
    <div className="container py-5">
      <div className="row d-flex justify-content-center">
        <div className={`col-md-8 offset-md-2  ${style.chatBox}`}>
          <div className={`card ${style.chat}`} id="chat1">
            <div
              className={`card-header  text-white d-flex justify-content-between align-items-center p-3 ${style.cardHeader}`}
            >
              <FontAwesomeIcon icon={faHouse} />
              <p className="mb-0 fw-bold">Live Chat: {course.title}</p>
              <i className="fas fa-times"></i>
            </div>
            <div className={`card-body  ${style.chatBody}`}>
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-4 ${
                    msg.sender === userId
                      ? style.sentMessage
                      : style.receivedMessage
                  }`}
                >
                  <div
                    className={`d-flex ${
                      msg.sender === userId
                        ? "justify-content-end"
                        : "justify-content-start"
                    }`}
                  >
                    <img
                      src={`http://localhost:4000/imgs/${msg.img}`}
                      alt="avatar"
                      className="rounded-circle me-3"
                      style={{ width: "45px", height: "45px" }}
                    />
                    <div className={`p-3 border ${style.chatBubble} w-75`}>
                      <p className="small mb-0">{msg.username}</p>
                      <p className="small mb-0">{msg.text}</p>
                      <p className="small mb-0 text-muted">{msg.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <form
                className="form- d-flex align-items-center justify-content-center m-3"
                onSubmit={handleSubmit}
              >
                <input
                  placeholder="  Type your message"
                  type="text"
                  className={`form-control `}
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  required
                />

                {/* <label
                    htmlFor="file"
                    className={`btn mt-1 ms-2 ${style.sendButton}`}
                  >
                    <FontAwesomeIcon icon={faFile} />
                  </label> */}
                {/* <input
                    type="file"
                    id="file"
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                  /> */}
                {/* <button
                    type="button"
                    onClick={handleUpload}
                    className={`btn  mt-1 ${style.sendButton}`}
                  >
                    <FontAwesomeIcon icon={faMessage} />
                  </button> */}
                <div className=" d-flex align-items-end justify-content-end">
                  <button type="submit" className={`btn  ${style.sendButton}`}>
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
