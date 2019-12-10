// JavaScript source code
import React from 'react';
import '../cssfiles/Contactus.css';
import * as emailjs from 'emailjs-com';
class Contactus extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', subject: '', message: '' };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeSubject = this.handleChangeSubject.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);



        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {
        this.setState({ name: event.target.value });
    }
    handleChangeEmail(event) {
        this.setState({ email: event.target.value });
    }
    handleChangeSubject(event) {
        this.setState({ subject: event.target.value });
    }
    handleChangeMessage(event) {
        this.setState({ message: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
       
        var templateParams = {
            from_name: this.state.name + '(' + this.state.email + ')',
            to_name: 'lythanhkhiet123@gmail.com',
            subject: this.state.subject,
            message_html: this.state.message
        }
        emailjs.send('freedo_service', 'template_wFQWbYdD', templateParams, 'user_zks0fmueghCIAkP3GgbQo').then(function (response) {
            alert('Message send successfully');
            console.log('Success', response.status, response.text)
        }, function (err) {
            alert(err.text);
            console.log(err);
        })
    }
   
    render() {
        return (
            <div>
                <h1>Contact Us</h1>
                <p class='para a'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <br/>
                <form class='contactForm' onSubmit={this.handleSubmit}>
                    
                    <table class='tableContact' border='0px'>
                        <tr>
                            <td width='75%'>
                                <br />
                                <p class='field'><span class='inputfield'>Name:</span>
                                <input class='input name' type="text" placeholder="Enter your name" value={this.state.name} onChange={this.handleChangeName} />
                                </p>
                           
                                <br />
                                <p class='field'><span class='inputfield'>Email:</span>
                                <input class='input email' type="text" placeholder="Enter your email" value={this.state.email} onChange={this.handleChangeEmail} />
                                </p>

                                <br />
                                <p class='field'><span class='inputfield'>Subject:</span>
                                <input class='input subject' type="text" placeholder="Enter subject" value={this.state.subject} onChange={this.handleChangeSubject} />
                                </p>

                                <br />
                                <p class='field'><span class='inputfield'>Message:</span>
                                    <textarea class='input message' id='message' rows="10"   placeholder="Enter Message" value={this.state.message} onChange={this.handleChangeMessage} />
                                </p>

                                <br />

                                <input class='submitBtn' type="submit" value="Submit" />
                            </td>
                       
                       
                            <td >
                                <p id='email'><strong>EMAIL:</strong></p><p> Example@gmail.com</p>
                                <hr width='80%'/>
                                <p id='phone'><strong>PHONE:</strong></p><p> 917 686 4214</p>
                                <hr width='80%' />
                                <p id='ontheweb'><strong>ON THE WEB:</strong></p><p> <a href='https://www.pinterest.com.au'>Pinterest  </a>|<a href='https://au.linkedin.com/'> Linkedin</a> |<a href='https://www.twitter.com'> Twitter</a></p>

                            </td>
                            </tr>

                    </table>


                </form>
                
            </div>

        );
    }
}
export default Contactus;
