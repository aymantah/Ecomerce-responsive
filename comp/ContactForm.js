import React from 'react';
import './style.css';

function ContactForm() {
    return (
        <div class="container1">
            <form>
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>

                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>

                {/* <label for="country">Country</label>
                <select id="country" name="country">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
                </select>
                <div></div> */}

                <label for="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default ContactForm;