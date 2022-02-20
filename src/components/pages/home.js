import React, { Component } from 'react'
import LexiTwo from '../../../static/assets/img/lexiTwo.jpg'
import AboutMe from '../../../static/assets/img/lexiTwo.jpg'
import emailjs from "emailjs-com"



export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    // function sendEmail(){

    // }

    render() {
        return (
            <div className="home-wrapper">

                <div className="home-top-image">

                    <div className="image">
                        <img src={LexiTwo} alt="lexi" />
                    </div>

                    <div className="text">
                        <h2>

                            Alexis Sue Lichty Photography 
                        </h2>

                    </div>

                </div>

                <div className="introduction">
                    
                    <div className="hello">
                        <h2>
                            Hello! I'm Lexi Sue

                        </h2>
                    </div>

                    <div className="capture">
                        <h2>
                            Here to capture all of the genuine smiles and joyful moments in life for you to hold on to in photos.
                            
                        </h2>
                    </div>

                    <div className="image">
                        <img src={LexiTwo} alt="lexi" />

                    </div>  

                    <div className="text-home">


                        <div className="text-about-myself">
                            <strong>Lorem ipsum </strong> dolor sit amet consectetur adipisicing elit. Necessitatibus alias cupiditate quam voluptates deleniti magni, earum eaque possimus ex sed repellat aperiam vitae nostrum cumque beatae, nemo labore recusandae? Quo aut cum autem, magnam veritatis consequuntur dignissimos numquam, optio nisi nesciunt odio explicabo iure delectus. Perferendis, expedita? Dolore nemo obcaecati dolorem ad, molestias ipsa expedita.

                        </div>

                        <div className="text-how-i-work">
                            <strong>Lorem ipsum</strong>  dolor sit amet consectetur adipisicing elit. Rerum explicabo alias eveniet ut aliquam necessitatibus accusamus quibusdam libero ullam, repellendus harum obcaecati eius aliquid labore cupiditate iusto vero magni laudantium provident! Adipisci, in maxime. Eaque placeat laborum ducimus et voluptatem adipisci magnam inventore ratione ipsa voluptates distinctio alias odit, quisquam dolores omnis eum nam obcaecati. Eaque sapiente nihil distinctio! Id dicta alias reiciendis voluptas soluta porro maxime optio, accusantium possimus cumque rem ab, sequi sunt!
                        </div>

                        <div className="text-who-i-serve">
                           <strong>Lorem ipsum</strong>  dolor sit amet consectetur adipisicing elit. Molestiae adipisci voluptatibus, est illo possimus animi iusto soluta enim harum! Ipsam vitae nobis tempore molestiae molestias.
                        </div>

                        <div className="text-why-im-here">
                            <strong>Lorem ipsum </strong> dolor sit amet consectetur adipisicing elit. Officiis labore sint sed quam deserunt aspernatur, ab dolor iste libero optio ad perferendis incidunt. Dolore iste, voluptatibus, alias iure accusamus, in blanditiis architecto id libero ad fuga ipsam ipsa? Suscipit iure molestiae dolorem aut est quis eligendi recusandae non expedita, eos ipsam saepe et, repellendus nisi perferendis aliquam rerum? Laboriosam aliquam doloribus, labore perspiciatis magni atque recusandae adipisci numquam aliquid ducimus quaerat doloremque eius officia esse?
                        </div>

                    </div>
                </div>

                <div className="home-location">
                    <div className="text-home-location">


                    <h2>

                        Documenting joyful and cherished moments for couples in Salem Oregon!
                    </h2>

                    <h1>
                        Be sure to check out my <a href="https://www.instagram.com/lexilichtyphotography/">Instagram!</a>

                    </h1>
                    </div>

                </div>

                <div className="shop-wrapper">

                    <div className="picture">


                        <div className="fashion-picture-one">
                                <img src={AboutMe} alt="About Me Img"  />
                            
                        </div>
                        <div className="fashion-picture-two">
                                <img src={AboutMe} alt="About Me Img" />


                        </div>
                        <div className="fashion-picture-three">
                                <img src={AboutMe} alt="About Me Img" />


                        </div>
                        <div className="fashion-picture-four">
                                <img src={AboutMe} alt="About Me Img" />


                        </div>
                        <div className="fashion-picture-five">
                                <img src={AboutMe} alt="About Me Img" />


                        </div>
                        <div className="fashion-picture-six">
                                <img src={AboutMe} alt="About Me Img" />


                        </div>
                        <div className="fashion-picture-seven">
                                <img src={AboutMe} alt="About Me Img" />


                        </div>
                        <div className="fashion-picture-eight">
                                <img src={AboutMe} alt="About Me Img" />


                        </div>
                        <div className="fashion-picture-nine">
                                <img src={AboutMe} alt="About Me Img" />


                        </div>
                        <div className="fashion-picture-ten">
                                <img src={AboutMe} alt="About Me Img" />


                        </div>
                        <div className="fashion-picture-eleven">
                                <img src={AboutMe} alt="About Me Img" />


                        </div>
                        <div className="fashion-picture-twelve">
                                <img src={AboutMe} alt="About Me Img" />


                        </div>
                        <div className="fashion-picture-thirteen">
                                <img src={AboutMe} alt="About Me Img" />


                        </div>
                        <div className="fashion-picture-fourteen">
                                <img src={AboutMe} alt="About Me Img" />


                        </div>
                        <div className="fashion-picture-fifthteen">
                                <img src={AboutMe} alt="About Me Img" />


                        </div>
                        <div className="fashion-picture-sixteen">
                                <img src={AboutMe} alt="About Me Img" />


                        </div>
                        <div className="fashion-picture-seventeen">
                                <img src={AboutMe} alt="About Me Img" />


                        </div>
                        <div className="fashion-picture-eighteen">
                                <img src={AboutMe} alt="About Me Img" />


                        </div>
                        <div className="fashion-picture-nineteen">
                                <img src={AboutMe} alt="About Me Img" />


                        </div>
                        <div className="fashion-picture-twenty">
                                <img src={AboutMe} alt="About Me Img" />


                        </div>
                        <div className="fashion-picture-twentyone">
                                <img src={AboutMe} alt="About Me Img" />


                        </div>
                        <div className="fashion-picture-twentytwo">
                                <img src={AboutMe} alt="About Me Img" />


                        </div>
                        <div className="fashion-picture-twentythree">
                                <img src={AboutMe} alt="About Me Img" />


                        </div>
                        <div className="fashion-picture-twentyfour">
                                <img src={AboutMe} alt="About Me Img" />


                        </div>
                        <div className="fashion-picture-twentyfive">
                                <img src={AboutMe} alt="About Me Img" />


                        </div>
                        <div className="fashion-picture-twentysix">
                                <img src={AboutMe} alt="About Me Img" />


                        </div>
                        <div className="fashion-picture-twentyseven">
                                <img src={AboutMe} alt="About Me Img" />


                        </div>
                        <div className="fashion-picture-twentyeight">
                                <img src={AboutMe} alt="About Me Img" />


                        </div>
                        <div className="fashion-picture-twentynine">
                                <img src={AboutMe} alt="About Me Img" />


                        </div>
                        
                        <div className="fashion-picture-thirty">
                                <img src={AboutMe} alt="About Me Img" />


                        </div>
                        <div className="fashion-picture-thirtyone">
                                <img src={AboutMe} alt="About Me Img" />


                        </div>
                        <div className="fashion-picture-thirtytwo">
                                <img src={AboutMe} alt="About Me Img" />


                        </div>
                        <div className="fashion-picture-thirtythree">
                                <img src={AboutMe} alt="About Me Img" />


                        </div>
                        <div className="fashion-picture-thirtyfour">
                                <img src={AboutMe} alt="About Me Img" />


                        </div>
                        <div className="fashion-picture-thirtyfive">
                                <img src={AboutMe} alt="About Me Img" />


                        </div>
                        <div className="fashion-picture-thirtysix">
                                <img src={AboutMe} alt="About Me Img" />


                        </div>
                        <div className="fashion-picture-thirtyseven">
                                <img src={AboutMe} alt="About Me Img" />


                        </div>
                        <div className="fashion-picture-thirtyeight">
                                <img src={AboutMe} alt="About Me Img" />


                        </div>
                        <div className="fashion-picture-thirtynine">
                                <img src={AboutMe} alt="About Me Img" />


                        </div>
                        

                    </div>


                </div>

                <div className="happy-clients-home">
                    <div className="heading-home-clients">
                        <h2>
                            What Happy Clients Are Saying
                        </h2>

                        <div className="comments-home-clients">

                            <div className="first">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed obcaecati vero adipisci voluptatibus totam illum consectetur neque facilis quidem excepturi odit reprehenderit qui, ipsum fuga voluptates eius similique maxime harum porro unde corrupti velit consequatur. Esse culpa accusamus expedita, id explicabo ratione beatae, voluptates mollitia atque aut perspiciatis minus odit dignissimos aliquid cupiditate dolorem amet officiis nulla eligendi, et delectus?
                                </p>

                                <h2>
                                    - Lorem, ipsum.

                                </h2>

                            </div>

                            <div className="second">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed obcaecati vero adipisci voluptatibus totam illum consectetur neque facilis quidem excepturi odit reprehenderit qui, ipsum fuga voluptates eius similique maxime harum porro unde corrupti velit consequatur. Esse culpa accusamus expedita, id explicabo ratione beatae, voluptates mollitia atque aut perspiciatis minus odit dignissimos aliquid cupiditate dolorem amet officiis nulla eligendi, et delectus?
                                </p>

                                <h2>
                                    - Lorem, ipsum.

                                </h2>

                            </div>

                            <div className="third">
                                <p>
                                    - Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed obcaecati vero adipisci voluptatibus totam illum consectetur neque facilis quidem excepturi odit reprehenderit qui, ipsum fuga voluptates eius similique maxime harum porro unde corrupti velit consequatur. Esse culpa accusamus expedita, id explicabo ratione beatae, voluptates mollitia atque aut perspiciatis minus odit dignissimos aliquid cupiditate dolorem amet officiis nulla eligendi, et delectus?
                                </p>

                                <h2>
                                    - Lorem, ipsum.

                                </h2>

                            </div>

                            <div className="forth">
                                <p>
                                    - Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed obcaecati vero adipisci voluptatibus totam illum consectetur neque facilis quidem excepturi odit reprehenderit qui, ipsum fuga voluptates eius similique maxime harum porro unde corrupti velit consequatur. Esse culpa accusamus expedita, id explicabo ratione beatae, voluptates mollitia atque aut perspiciatis minus odit dignissimos aliquid cupiditate dolorem amet officiis nulla eligendi, et delectus?
                                </p>

                                <h2>
                                    - Lorem, ipsum.

                                </h2>

                            </div>

                            <div className="fifth">
                                <p>
                                    - Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed obcaecati vero adipisci voluptatibus totam illum consectetur neque facilis quidem excepturi odit reprehenderit qui, ipsum fuga voluptates eius similique maxime harum porro unde corrupti velit consequatur. Esse culpa accusamus expedita, id explicabo ratione beatae, voluptates mollitia atque aut perspiciatis minus odit dignissimos aliquid cupiditate dolorem amet officiis nulla eligendi, et delectus?
                                </p>

                                <h2>
                                    - Lorem, ipsum.

                                </h2>

                            </div>

                            <div className="sixth">
                                <p>
                                    - Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed obcaecati vero adipisci voluptatibus totam illum consectetur neque facilis quidem excepturi odit reprehenderit qui, ipsum fuga voluptates eius similique maxime harum porro unde corrupti velit consequatur. Esse culpa accusamus expedita, id explicabo ratione beatae, voluptates mollitia atque aut perspiciatis minus odit dignissimos aliquid cupiditate dolorem amet officiis nulla eligendi, et delectus?
                                </p>

                                <h2>
                                    - Lorem, ipsum.

                                </h2>

                            </div>

                            
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}