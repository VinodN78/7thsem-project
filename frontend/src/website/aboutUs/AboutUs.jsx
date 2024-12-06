import React from "react";
import Hero from "../../components/website/hero/Hero";

const AboutUs = () => {
  return (
    <div className="bg text__color">
      <Hero
        title="Introduction"
        text={
          <>
            <p>
              Libraries are vital hubs for academic growth and intellectual
              engagement, offering more than just shelves of books. They are
              dynamic spaces where individuals come together to study, write,
              and collaborate. They provide an environment conducive to
              scholarly research, enabling students, faculty, and researchers to
              deepen their knowledge and explore new ideas.
            </p>
            <p>
              In addition to physical books, modern libraries integrate
              cutting-edge information technology, allowing users to access
              digital resources, databases, and e-journals from anywhere. They
              often provide training and workshops on research methodologies,
              digital literacy, and the effective use of library tools,
              empowering users to navigate the vast world of information with
              confidence.
            </p>
            <p>
              The College Library, in particular, serves as a gateway to
              information and knowledge. It connects learners to an extensive
              array of resources, including printed books, academic journals,
              multimedia content, and online repositories. It supports
              interdisciplinary learning and ensures that users stay updated
              with the latest advancements in their respective fields.
            </p>
            <p>
              At RUAS (Ramaiah University of Applied Sciences), the library
              system is a cornerstone of academic excellence. It is designed to
              cater to diverse learning needs with a well-curated collection of
              printed and electronic resources. The libraries here foster a
              culture of curiosity and continuous learning, equipping students
              and researchers with the tools they need to succeed academically
              and professionally.
            </p>
          </>
        }
        reverse={true}
      />
      <Hero
        title="Team Information"
        text={
          <p>
            <table border="0" >
              <tr>
                <th className="bg__primary"style={{color: "black"}} >Name</th>
                <th className="bg__primary"style={{color: "black"}}>Registration Number</th>
              </tr>
             
              <tr>
                <td>Adarsh B Patil</td>
                <td>21ETEC004003</td>
              </tr>
              <tr>
                <td>Arjun M P</td>
                <td>21ETEC004013</td>
              </tr>
              
              <tr>
                <td>Mohammod Ibrahim Chickle &nbsp; </td>
                <td>21ETEC004042</td>
              </tr>
              <tr>
                <td>Vinod Kumar</td>
                <td>21ETEC004078</td>
              </tr>
            </table>
          </p>
        }
        reverse={false}
      />
    </div>
  );
};

export default AboutUs;