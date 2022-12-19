import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";
import "./question.scss";

const Question = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className={showAnswer ? "question active" : "question"}>
      <button className="top" onClick={() => setShowAnswer(!showAnswer)}>
        <h3>{question}</h3>
        {showAnswer ? (
          <FaMinus size={25} color="#002340" />
        ) : (
          <BsPlusLg size={25} color="#b4ff00" />
        )}
      </button>
      <motion.div
        className="answer"
        animate={{ height: showAnswer ? "auto" : "0rem" }}
        initial={{ height: "0rem" }}
        transition={{ duration: 0.3 }}
      >
        <p>{answer}</p>
      </motion.div>
    </div>
  );
};

export default Question;
