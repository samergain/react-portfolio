import React from "react";

function Home() {
  return (
    <div className="container mt-5 rounded bg-light">
        <div className="row">
        <div className="col">
            <h1 className="pt-3 pl-3">WHO AM I?</h1>
            <hr />
            <div className="newClass">
            <img id="selfie"  src="https://samergain.github.io/samers-portfolio/images/self4.png" alt="Samer selfie" />
            <div id= "textBox" className="mt-3 px-3">
                <p><strong>As a professional, </strong>I studied computer science in Syria and graduated in 2009. Started my career in United Arab Emirates as junior software developer, and quickly jumped to another start-up company because they offered a better training package.</p>
                <p>Working with a start-up was very exciting and challenging. I had to learn so many different fields in a very short period of time. From installing security cameras, to networks cabling and installation, to technical support, and some coding and software testing.</p>
                <p>In 2011, I received an offer to work as a social media producer in Russia Today tv channel. I took the offer and got lost in digital journalism for the next 8 years, half of that in Alhurra tv channel in Virginia, U.S.</p>
                <p>Working in major international media outlets was an amazing journey. It's a very rich environment to gain so many different skills, both soft and technical skills. From multimedia editing to writing articles/news, to social media analytics, to writing reports and meeting daily strict deadlines. Working under pressure was a daily life situation.</p>
                <p>So, I am proud to say that I survived 8 years of journalism and not only survived, but got promoted twice to a mid-level management roles.</p>
                <p>For the past few months, I've been refreshing my knowledge in Computer Science and getting back to coding and I can call myself a web developer with good knowledge of <strong>HTML, CSS, JAVASCRIPT, jQuery, NODE, EXPRESS, MYSQL</strong></p>
            <br />
            <p><strong>As a life-form called Human-being, </strong>I was born and raised in Syria to an Arab father and a Russian mother. Just that fact alone, caused me a lot of confusion growing up. I wasn't able to label myself as anything. I was not an Arab, not a Russian, not a muslim, not a christian, not any of that and all of that at the same time.</p>
            <p>It took me 35 years, and 8 seasons of Game of Thrones to understand that it was a blessing not a curse to be No-one (No-one became my nickname in video games)</p>
            <p>Long story short, I'm No-One who likes hiking, mushroom hunting, nature, cooking, clay modeling, gaming. But coding is all what I do recently.</p>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Home;