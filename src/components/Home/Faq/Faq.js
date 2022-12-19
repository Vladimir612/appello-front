import React from "react";
import "./faq.scss";
import Question from "./Question/Question";

const Faq = () => {
  return (
    <section className="faq-section">
      <div className="heading">
        <h2>
          Imate <span>pitanja?</span>
        </h2>
        <h2>
          Mi imamo <span>odgovore</span>
        </h2>
      </div>

      <div className="questions">
        <Question
          question="Šta je optički internet?"
          answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt ab vel vitae qui inventore nihil a eaque sequi ea eius ratione repellat eligendi assumenda recusandae, quasi, rem amet dolorum explicabo!"
        />
        <Question
          question="Šta je optički internet?"
          answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt ab vel vitae qui inventore nihil a eaque sequi ea eius ratione repellat eligendi assumenda recusandae, quasi, rem amet dolorum explicabo!"
        />
        <Question
          question="Šta je optički internet?"
          answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt ab vel vitae qui inventore nihil a eaque sequi ea eius ratione repellat eligendi assumenda recusandae, quasi, rem amet dolorum explicabo!"
        />
        <Question
          question="Šta je optički internet?"
          answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt ab vel vitae qui inventore nihil a eaque sequi ea eius ratione repellat eligendi assumenda recusandae, quasi, rem amet dolorum explicabo!"
        />
        <Question
          question="Poređenje optički internet u odnosu na kablovski i ADSL internet. Koji je bolji?"
          answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt ab vel vitae qui inventore nihil a eaque sequi ea eius ratione repellat eligendi assumenda recusandae, quasi, rem amet dolorum explicabo!"
        />
      </div>
    </section>
  );
};

export default Faq;
