import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import home from './img/home.jpg';
import home2 from './img/home2.jpg';
import home3 from './img/home3.jpg';
import home4 from './img/home4.jpg';
import home5 from './img/home5.jpg';
console.log(home);
console.log(home2);
console.log(home3);
console.log(home4);
console.log(home5);


const HomePage=()=>{
      return (
       
        
        <div>
          
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Home page</title>
          
          <link rel="stylesheet" href="./style.css" />
          {/* Slider */}
          <div className="slider">
            <div className="slider-1">
              <img src={home} alt="home" /> 
              <div className="text">
                <h1>Igabara</h1>
                <span />
                <p>Igabara Hobbit House has a restaurant, a fitness centre and bar in Hambantota.All guest rooms come with air conditioning, a dishwasher, a fridge, a kettle, a bidet, a hairdryer and a desk. With a private bathroom fitted with a shower.
                <br></br>ලොව පුරා සංචාරක ආකර්ෂණය දිනාගත් hobbit house අත්දැකීමක් නොමිලේ ලබන්න ඔබත් කැමති ද?
කැස්බෑවන් ගෙන් ගහන රැකව වෙරල තීරය සහ රැකව කළපුවේ සුන්දරත්වය විඳිමින් සුවපහසු නිවාඩුවක් ගත කිරීමට මෙන්න ඔබට අවස්ථාවක්!
                </p>
                
                <Link to ='calendar'><Button variant="warning" size="lg" style={{position:'absolute',right: 5 }} >Book now</Button>{' '}</Link>
              </div>
            </div>
            <div className="slider-2">
              <img src={home2} alt="home2" />
              <div className="text">
                <h1>Hobbit</h1>
                <span />
                <p>Sri Lanka is globally recognised as one of the few places in the world where you can observe marine turtles in their natural habitat. Five out of seven of the world’s marine turtle species are found in Sri Lanka and come ashore in Rekawa to lay eggs, including green, loggerhead, hawksbill, olive ridley and leatherback. 
The Rekawa Turtle Watch is a marine turtle conservation project which aims to protect the turtles’ nesting sites and ensure that the eggs can hatch safely. Visitors can go on ‘turtle watch’ any evening of the year, where the volunteers from the centre lead groups to the beach between 8:30pm and 11:30pm where you can watch the turtles laying eggs or returning to the sea
.
.
.
#turtles🐢 #rekawa ##hobbithouse #hotelsrilanka #turtlebeach #hobbitlife #travel #travelljng #traveldiary #visitrakawa #village #rekawabeach #fun #enjoy @ Turtle Watch Rekawa</p>
                <Link to ='calendar'><Button variant="warning" size="lg" style={{position:'absolute',right: 5 }} >Book now</Button>{' '}</Link>
              </div>
            </div>
            <div className="slider-3">
              <img src={home3} alt="" />
              <div className="text">
                <h1>House</h1>
                <span />
                <p>ලොව පුරා සංචාරක ආකර්ෂණය දිනාගත් hobbit house අත්දැකීමක් නොමිලේ ලබන්න ඔබත් කැමති ද?
කැස්බෑවන් ගෙන් ගහන රැකව වෙරල තීරය සහ රැකව කළපුවේ සුන්දරත්වය විඳිමින් සුවපහසු නිවාඩුවක් ගත කිරීමට මෙන්න ඔබට අවස්ථාවක්!
ශ්‍රී ලංකාවට  hobbit house සංකල්පය හඳුන්වා දුන් Igabara Hobbit House සමඟින් කොරෝනා අවදානම පහව ගිය සැනින් මෙම අත්දැකීම ඔබට ලබා දෙන්න අප සූදානම්!
රැදී සිටින්න අප සමඟ...
#StayHome #StayClose
Would you like to get a world-famous hobbit house experience here in Sri Lanka for free?
Here is your chance to spend a relaxing holiday enjoying the beauty of the Rekawa beach and the lagoon!
Joining hands with Igabara Hobbit House, the first-ever hobbit house in Sri Lanka, we are ready to reward you this experience as soon as all Coronavirus risks fade away! 
Stay tuned...
#StayHome #StayClose</p>
                <Link to ='calendar'><Button variant="warning" size="lg" style={{position:'absolute',right: 5 }} >Book now</Button>{' '}</Link>
              </div>
            </div>
            <div className="slider-4">
              <img src={home4} alt="" />
              <div className="text">
                <h1>Tangalle</h1>
                <span />
                <p>ලොවපුරා සංචාරක ආකර්ශනය දිනාගත් Hobbi House අත්දැකීමක් ලබන්න කැමති අයට මෙන්න තැනක්.. Igabara Hobbit House</p>
                <Link to ='calendar'><Button variant="warning" size="lg" style={{position:'absolute',right: 5 }} >Book now</Button>{' '}</Link>
              </div>
            </div>
            <div className="slider-5">
              <img src={home5} alt="" />
              <div className="text">
                <h1>Sri lanka</h1>
                <span />
                <p>Go back? No good at all. Go sideways? Impossible. Go forward? Only thing to do on we go ❤️
.
.
Refresh with beach 🏖 lagoon 🚣‍♀️ and nature 🦚🍀 with amazing holiday this upcoming April season 🎒👓

ලොව පුරා සංචාරක ආකර්ෂණය දිනාගත් hobbit house අත්දැකීමක්  ලබන්න ඔබත් කැමති ඇති. Igabara hobbit house  කියන්නෙ මේ concept   එක ලංකාවට මුලින්ම හදුන්වා දුන් අය. 
කැස්බෑවන් ගෙන් ගහන රැකව වෙරල තීරය සහ රැකව කළපුවේ සුන්දරත්වය විඳිමින් සුවපහසු නිවාඩුවක් ගත කිරීමට කැමති කෙනෙක්ට මේක අලුත් අත්දැකීමක් වේවි.</p>
                <Link to ='calendar'><Button variant="warning" size="lg" style={{position:'absolute',right: 5 }} >Book now</Button>{' '}</Link>
              </div>
            </div>
          </div>
        </div>
      );
}

export default HomePage;